# HARMONIC insight — Releases

> 🇯🇵 [日本語版 README](./README.ja.md)

Official download distribution for Windows apps by HARMONIC insight LLC.
Product pages: **[insightoffice.io](https://insightoffice.io/?utm_source=github&utm_medium=readme&utm_campaign=cross-releases)** (English) / **[insight-office.com](https://www.insight-office.com/ja?utm_source=github&utm_medium=readme&utm_campaign=cross-releases)** (日本語)

## Products

| Product | What it does | Latest | Product page |
|---|---|:---:|---|
| Insight Training Studio | Turn PowerPoint into narrated training videos (MP4 / SCORM 1.2) | v1.1.3 | [Details](https://www.insight-office.com/ja/products/insight-training-studio?utm_source=github&utm_medium=readme&utm_campaign=cross-releases) |
| Insight Doc Translator | Translate PDF / Word / Excel / PowerPoint while keeping the layout | v1.0.9 | [Details](https://www.insight-office.com/ja/products/insight-doc-translator?utm_source=github&utm_medium=readme&utm_campaign=cross-releases) |
| InsightPy | Python learning and Office automation, no setup (Python bundled) | v1.0.6 | [Details](https://python.h-insight.jp/?utm_source=github&utm_medium=readme&utm_campaign=cross-releases) |
| Insight Milestone | Team schedules on a single timeline (free trial) | v0.3.0 | [Details](https://www.insight-office.com/ja/products/insight-milestone?utm_source=github&utm_medium=readme&utm_campaign=cross-releases) |
| Insight Office | Word / Excel / PowerPoint / PDF in one app | v1.0.4 | [Details](https://www.insight-office.com/ja/products/insight-office?utm_source=github&utm_medium=readme&utm_campaign=cross-releases) |

Installers for every version are on the [Releases page](https://github.com/HarmonicInsight/cross-releases/releases).
Mobile apps: [Google Play](https://play.google.com/store/apps/dev?id=8493363519214339034) / [App Store](https://apps.apple.com/developer/id6779485494).

## Installation (Windows)

1. Download the latest `_Setup_*.zip` from the product page or the Releases page
2. Extract it and run the installer

Current installers are EV code-signed (publisher: **HARMONIC INSIGHT LLC**).
On the first downloads of a new version, Microsoft Defender SmartScreen may still show
"Windows protected your PC" until reputation builds. Click **More info** → **Run anyway**
and check that the publisher is HARMONIC INSIGHT LLC.

## Verifying downloads (SHA-256)

Each release lists the SHA-256 of its files. To check a download in PowerShell:

```powershell
Get-FileHash .\<downloaded file> -Algorithm SHA256
```

Compare the result with the value on the release page.

## Support

support@h-insight.jp — HARMONIC insight LLC
