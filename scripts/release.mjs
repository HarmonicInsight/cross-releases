#!/usr/bin/env node
/**
 * HARMONIC insight 製品リリースCLI
 *
 * 使い方:
 *   node scripts/release.mjs --code INST --version 1.0.2 --asset ../win-app-insight-translate/.../InsightDocTranslator_Setup_1.0.2.zip
 *   node scripts/release.mjs --code INMV --version 1.1.0 --asset <path> --notes-file RELEASE.md
 *
 * やること:
 *   1. 引数とファイル名規則のバリデーション
 *   2. 既存タグとの衝突チェック (gh release view)
 *   3. gh release create <CODE>-v<version> <asset> でGitHub Release作成
 *   4. license-manager の /api/releases/refresh を叩いてキャッシュ即時purge
 *   5. 配布URL・アップグレードゲートURLを標準出力に表示
 *
 * 前提:
 *   - gh CLI がインストール済み・HarmonicInsight org に auth 済み
 *   - env RELEASE_REFRESH_TOKEN が設定済み (license-manager の Vercel env と同値)
 *   - env LICENSE_BASE (任意、未設定なら https://license.h-insight.jp)
 */

import { spawnSync } from "node:child_process";
import { existsSync, readFileSync, statSync } from "node:fs";
import { basename, dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import process from "node:process";

// スクリプト隣接の .env.local があれば読み込む (RELEASE_REFRESH_TOKEN 等)
(function loadLocalEnv() {
  const here = dirname(fileURLToPath(import.meta.url));
  const envPath = resolve(here, "..", ".env.local");
  if (!existsSync(envPath)) return;
  const content = readFileSync(envPath, "utf8");
  for (const line of content.split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Z_][A-Z0-9_]*)\s*=\s*(.*)\s*$/);
    if (!m) continue;
    if (m[1] in process.env) continue; // 既存env優先
    let val = m[2];
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }
    process.env[m[1]] = val;
  }
})();

/** 対応製品とファイル名規則。harmonic-license-manager/src/lib/releases.ts の SPECS と同期させること。 */
const PRODUCTS = {
  INMV: {
    name: "Insight Training Studio",
    assetPattern: /^InsightTrainingStudio_Setup_(.+)\.zip$/i,
  },
  INST: {
    name: "Insight Doc Translator",
    assetPattern: /^InsightDocTranslator_Setup_(.+)\.zip$/i,
  },
  INSS: {
    name: "Insight Deck Quality Gate",
    assetPattern: /^InsightDeckQualityGate_Setup_(.+)\.zip$/i,
  },
  IOSH: {
    name: "Insight Performance Management",
    assetPattern: /^InsightPerformanceManagement_Setup_(.+)\.zip$/i,
  },
  IOSD: {
    name: "Insight AI Doc Factory",
    assetPattern: /^InsightAiDocFactory_Setup_(.+)\.zip$/i,
  },
  INAG: {
    name: "Insight Agent",
    assetPattern: /^InsightAgent_Setup_(.+)\.zip$/i,
  },
};

const LICENSE_BASE = (process.env.LICENSE_BASE || "https://license.h-insight.jp").replace(/\/$/, "");

function parseArgs(argv) {
  const out = { dryRun: false };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--code") out.code = argv[++i];
    else if (a === "--version") out.version = argv[++i];
    else if (a === "--asset") out.asset = argv[++i];
    else if (a === "--notes-file") out.notesFile = argv[++i];
    else if (a === "--notes") out.notes = argv[++i];
    else if (a === "--dry-run") out.dryRun = true;
    else if (a === "-h" || a === "--help") out.help = true;
  }
  return out;
}

function usage() {
  console.log(`Usage: node scripts/release.mjs --code <CODE> --version <X.Y.Z> --asset <path> [--notes-file <path> | --notes <text>] [--dry-run]

製品コード: ${Object.keys(PRODUCTS).join(", ")}

環境変数:
  RELEASE_REFRESH_TOKEN  license-manager の /api/releases/refresh 認証用
  LICENSE_BASE           (任意) デフォルト https://license.h-insight.jp`);
}

function die(msg) {
  console.error(`\x1b[31m✗\x1b[0m ${msg}`);
  process.exit(1);
}

function run(cmd, args, opts = {}) {
  const r = spawnSync(cmd, args, { stdio: opts.capture ? "pipe" : "inherit", encoding: "utf8", shell: process.platform === "win32" });
  if (r.status !== 0 && !opts.allowFail) {
    const tail = r.stderr || r.stdout || "";
    die(`${cmd} ${args.join(" ")} exited with ${r.status}\n${tail}`);
  }
  return r;
}

function validateSemver(v) {
  return /^\d+\.\d+\.\d+$/.test(v);
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help || !args.code || !args.version || !args.asset) {
    usage();
    process.exit(args.help ? 0 : 1);
  }

  const code = args.code.toUpperCase();
  const product = PRODUCTS[code];
  if (!product) die(`Unknown product code: ${code}. Use one of: ${Object.keys(PRODUCTS).join(", ")}`);

  if (!validateSemver(args.version)) die(`Invalid semver: ${args.version} (expected X.Y.Z)`);

  const assetPath = resolve(args.asset);
  if (!existsSync(assetPath)) die(`Asset not found: ${assetPath}`);
  if (!statSync(assetPath).isFile()) die(`Asset is not a file: ${assetPath}`);

  const assetName = basename(assetPath);
  const match = assetName.match(product.assetPattern);
  if (!match) die(`Asset name "${assetName}" does not match pattern for ${code}: ${product.assetPattern}`);
  if (match[1] !== args.version) {
    die(`Asset filename version "${match[1]}" does not match --version "${args.version}"`);
  }

  const tag = `${code}-v${args.version}`;
  const title = `${product.name} v${args.version}`;

  console.log(`\x1b[36m●\x1b[0m Preparing release:`);
  console.log(`    code:    ${code} (${product.name})`);
  console.log(`    tag:     ${tag}`);
  console.log(`    asset:   ${assetPath}`);
  console.log(`    size:    ${(statSync(assetPath).size / (1024 * 1024)).toFixed(1)} MB`);

  // 既存タグの衝突チェック
  const view = run("gh", ["release", "view", tag], { capture: true, allowFail: true });
  if (view.status === 0) {
    die(`Tag "${tag}" already exists on GitHub. Use a new version or delete the existing release.`);
  }

  if (args.dryRun) {
    console.log(`\x1b[33m⏸\x1b[0m Dry run — skipping gh release create and refresh.`);
    return;
  }

  // gh release create
  const ghArgs = ["release", "create", tag, assetPath, "--title", title];
  if (args.notesFile) ghArgs.push("--notes-file", args.notesFile);
  else if (args.notes) ghArgs.push("--notes", args.notes);
  else ghArgs.push("--generate-notes");

  console.log(`\x1b[36m●\x1b[0m Running: gh ${ghArgs.join(" ")}`);
  run("gh", ghArgs);

  // Cache purge
  const refreshToken = process.env.RELEASE_REFRESH_TOKEN;
  if (!refreshToken) {
    console.warn(`\x1b[33m⚠\x1b[0m RELEASE_REFRESH_TOKEN not set — skipping cache purge. Site will pick up new version within 1 hour.`);
  } else {
    try {
      const r = await fetch(`${LICENSE_BASE}/api/releases/refresh`, {
        method: "POST",
        headers: { Authorization: `Bearer ${refreshToken}` },
      });
      if (r.ok) {
        console.log(`\x1b[32m✓\x1b[0m Cache purged at ${LICENSE_BASE}/api/releases`);
      } else {
        const body = await r.text().catch(() => "");
        console.warn(`\x1b[33m⚠\x1b[0m Cache purge failed: ${r.status} ${body}`);
      }
    } catch (e) {
      console.warn(`\x1b[33m⚠\x1b[0m Cache purge error: ${e?.message ?? e}`);
    }
  }

  const downloadUrl = `https://github.com/HarmonicInsight/cross-releases/releases/download/${tag}/${assetName}`;
  const gateUrl = `${LICENSE_BASE}/download/${code}`;

  console.log(`\n\x1b[32m✓ Released ${tag}\x1b[0m`);
  console.log(`    Direct download: ${downloadUrl}`);
  console.log(`    Trial gate:      ${gateUrl}`);
  console.log(`    Upgrade URL:     ${gateUrl}?upgrade=1&email=<USER_EMAIL>`);
}

main().catch((e) => die(e?.stack || String(e)));
