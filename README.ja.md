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

## インストール方法

### Android アプリ
- [Google Play Store](https://play.google.com/store/apps/details?id=com.harmonic.insight.camera) からインストール
- または Releases ページから APK をダウンロードしてサイドロード

### Windows アプリ
1. Releases ページから最新のインストーラー (`.exe`) をダウンロード
2. ダウンロードしたファイルを実行
3. 画面の指示に従ってインストール

> **Windows SmartScreen に関するご注意**
>
> 現在、インストーラーは**コード署名未対応**で配布されています。Windows SmartScreen により
> 「Windows によって PC が保護されました」と表示される場合があります。
> その場合は **詳細情報 → 実行** を選択してください。
> コード署名対応は今後のバージョンで導入予定です。

## ダウンロード検証 (SHA-256)

法人ユーザー・セキュリティ担当者向けに、各リリースで公開している SHA-256 ハッシュにより
ダウンロードファイルの完全性を検証できます。

### Insight Training Studio v1.0.7

```
749B488E11D5070DD0C3D339544B0C43AA3803A6747FDFC153198493BEDEF899  InsightTrainingStudio_Setup_1.0.7.exe
BF671964DE39A5F04125310036F7971B8F1803CE6889B94F98E114E7AFEF7DA9  InsightTrainingStudio_Setup_1.0.7.zip
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
