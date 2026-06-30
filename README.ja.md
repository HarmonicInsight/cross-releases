# Insight Business Suite — Releases

> 🇬🇧 [English README](./README.md)

HARMONIC insight のプロダクトリリースを管理するリポジトリです。

## ダウンロード

[Releases ページ](https://github.com/HarmonicInsight/cross-releases/releases) からインストーラーをダウンロードしてください。

## 製品一覧

| 製品 | プラットフォーム | 説明 | 最新バージョン |
|------|:----------------:|------|:--------------:|
| スッキリカメラ (Insight Camera) | Android | シンプルで美しいカメラアプリ | v1.0.0 |
| Insight Training Studio (INMV) | Windows | 教育動画作成ツール (PPTX → ナレーション付き MP4 / SCORM) | v1.0.7 |
| Insight Performance Management (IOSH) | Windows | Excel 版管理・AI 分析ツール | v1.0.5 |
| Insight Deck Quality Gate (INSS) | Windows | PowerPoint コンテンツ管理・AI 編集ツール | v1.0.5 |
| Insight Doc Translator (INST) | Windows | AI 多言語ドキュメント翻訳ツール | v1.0.4 |
| InsightPy (INPY) | Windows | Python 学習・自動化スタジオ（Python 同梱・RPA） | v1.0.1 |

## インストール方法

### Android アプリ
- [Google Play Store](https://play.google.com/store/apps/details?id=com.harmonic.insight.camera) からインストール
- または Releases ページから APK をダウンロードしてサイドロード

### Windows アプリ
1. Releases ページから最新のインストーラー (`.exe`) をダウンロード
2. ダウンロードしたファイルを実行
3. 画面の指示に従ってインストール

### Windows SmartScreen 警告が出た場合

現在、インストーラーは**コード署名未対応**で配布されています (今後対応予定)。
初回実行時、Windows が以下のような青い全画面警告を表示する場合があります:

> **Windows によって PC が保護されました**
> Microsoft Defender SmartScreen は認識されないアプリの起動を停止しました。
> このアプリを実行すると、PC に問題が起こる可能性があります。

これは **新しい配布元・配布数の少ないインストーラー全般**で表示される警告で、
ファイルが悪意あるものという意味ではありません。インストールを続行する手順:

1. 青い警告画面の左下にある **「詳細情報」** をクリック
2. 隠れていた **「実行」** ボタンが表示されるのでクリック
3. 続いて Windows のユーザーアカウント制御 (UAC) が表示されたら **「はい」** を選択

インストーラーが正規のものかを実行前に確認したい場合は、下記の SHA-256 ハッシュと
照合してください (「ダウンロード検証」セクション参照)。

## ダウンロード検証 (SHA-256)

法人ユーザー・セキュリティ担当者向けに、各リリースで公開している SHA-256 ハッシュにより
ダウンロードファイルの完全性を検証できます。

### Insight Training Studio v1.0.7

```
749B488E11D5070DD0C3D339544B0C43AA3803A6747FDFC153198493BEDEF899  InsightTrainingStudio_Setup_1.0.7.exe
BF671964DE39A5F04125310036F7971B8F1803CE6889B94F98E114E7AFEF7DA9  InsightTrainingStudio_Setup_1.0.7.zip
```

### Insight Doc Translator v1.0.4

```
EF1E4B950FE0BE4F5853E7C3BE3C7D5A5F0037A2401FD77E30D17CD7B9B5E09E  InsightDocTranslator_Setup_1.0.4.exe
DA313351AA1C8EDA98F78D1EEACFB82F5272F7DBA8D253ECE000EE975D0C7FB8  InsightDocTranslator_Setup_1.0.4.zip
```

### 検証方法 (PowerShell)

```powershell
Get-FileHash -Algorithm SHA256 .\InsightTrainingStudio_Setup_1.0.7.exe
```

### 検証方法 (Linux/macOS)

```bash
sha256sum InsightTrainingStudio_Setup_1.0.7.exe
```

出力されるハッシュ値が上記と一致することをご確認ください。

## ファイル関連付け

| 拡張子 | 製品 | 説明 |
|--------|------|------|
| `.pptx` | Insight Training Studio | 単一ファイル運用 (プロジェクトメタデータは `customXml` に埋め込み) |
| `.iosh` | Insight Performance Management | プロジェクトファイル |
| `.inss` | Insight Deck Quality Gate | プロジェクトファイル |

## ライセンス

Windows のプログラム一覧、アプリ内のライセンス画面からご確認いただけます。
インストール後にライセンスキー未入力でも FREE プランとして基本機能をお使いいただけます。

---

Copyright (C) 2026 HARMONIC insight
