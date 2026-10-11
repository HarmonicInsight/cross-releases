# HARMONIC insight — リリース配布

> 🇬🇧 [English README](./README.md)

ハーモニックインサイト合同会社（HARMONIC insight）の Windows アプリの公式配布リポジトリです。
製品サイト: **[insight-office.com](https://www.insight-office.com/ja?utm_source=github&utm_medium=readme&utm_campaign=cross-releases)**（日本語） / **[insightoffice.io](https://insightoffice.io/?utm_source=github&utm_medium=readme&utm_campaign=cross-releases)**（English）

## 製品一覧

| 製品 | できること | 最新版 | 製品ページ |
|---|---|:---:|---|
| Insight Training Studio | PowerPoint からナレーション付きの研修動画（MP4 / SCORM 1.2）を作る | v1.1.3 | [詳しく](https://www.insight-office.com/ja/products/insight-training-studio?utm_source=github&utm_medium=readme&utm_campaign=cross-releases) |
| Insight Doc Translator | PDF・Word・Excel・PowerPoint をレイアウトそのまま翻訳する | v1.0.9 | [詳しく](https://www.insight-office.com/ja/products/insight-doc-translator?utm_source=github&utm_medium=readme&utm_campaign=cross-releases) |
| InsightPy | 環境構築なしで Python の学習と Office の自動化（Python 同梱） | v1.0.6 | [詳しく](https://python.h-insight.jp/?utm_source=github&utm_medium=readme&utm_campaign=cross-releases) |
| Insight Milestone | チームの日程を1本の線表で管理する（無料体験版） | v0.3.0 | [詳しく](https://www.insight-office.com/ja/products/insight-milestone?utm_source=github&utm_medium=readme&utm_campaign=cross-releases) |
| Insight Office | Word・Excel・PowerPoint・PDF をひとつのアプリで扱う | v1.0.4 | [詳しく](https://www.insight-office.com/ja/products/insight-office?utm_source=github&utm_medium=readme&utm_campaign=cross-releases) |

過去の版を含むすべてのインストーラーは [Releases ページ](https://github.com/HarmonicInsight/cross-releases/releases) にあります。
スマホアプリ: [Google Play](https://play.google.com/store/apps/dev?id=8493363519214339034) / [App Store](https://apps.apple.com/developer/id6779485494)

## インストール方法（Windows）

1. 製品ページか Releases ページから最新の `_Setup_*.zip` をダウンロード
2. 展開してインストーラーを実行

現在のインストーラーは EV コード署名済みです（発行元: **HARMONIC INSIGHT LLC**）。
新しい版の配布直後は、Microsoft Defender SmartScreen が「Windows によって PC が保護されました」と表示することがあります。
その場合は「詳細情報」→「実行」を押し、発行元が HARMONIC INSIGHT LLC であることを確かめてください。

## ダウンロードの検証（SHA-256）

各リリースのページにファイルの SHA-256 を載せています。PowerShell での確認方法:

```powershell
Get-FileHash .\<ダウンロードしたファイル> -Algorithm SHA256
```

## お問い合わせ

support@h-insight.jp — ハーモニックインサイト合同会社
