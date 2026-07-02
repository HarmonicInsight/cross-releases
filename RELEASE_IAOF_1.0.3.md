## Insight Office v1.0.3

> **TL;DR (English)** — Try-it-now samples (no API key needed), a floating PDF annotation palette with undo/redo, better trial UX (no more nagging dialog during the trial — AI concierge works out of the box for 30 days; a clear notice appears only after the trial ends), jump-to-cell from comparison results, and DPAPI-encrypted trial record. EV code-signed installer.

Insight Office（PDF 編集・文書比較・Excel 解析 × AI）の体験改善アップデートです。

### 変更点（1.0.3）
- **「サンプルで試す」**: ウェルカム3カード（PDF編集／比較／Excel分析）とチュートリアルを API キー不要で体験可能に。デモ用の比較ペア・PDF・数式入り解析サンプルを同梱（サンプルは一時コピーで開くため原本には触れません）。
- **トライアル体験の一新**: トライアル中（インストール後30日）は起動時の案内を出さず、AI コンシェルジュを含む全機能をそのまま利用可能に。案内はトライアル終了後のみ表示（旧「トライアルライセンスの登録が必要」文言は廃止）。
- **有料/無料の見える化**: プランバッジのツールチップで境界を列挙、有料リボン機能（ページ抽出/OCR 等）に未購入時 👑 目印。
- **PDF 注釈の強化**: フローティング注釈パレット（選択/ハイライト/下線/取消線/フリーハンド/テキスト/削除/全消去/元に戻す/やり直し、ドラッグ移動可）。テキスト注釈のフォント種類・サイズ指定に対応。
- **比較→元セルへ遷移**: 差分行のダブルクリックで元ファイルの該当セルへジャンプ。
- **セキュリティ**: トライアル開始記録（trial.json）を DPAPI（Windows 標準暗号化）で保存。既存の記録は開始日を維持したまま自動移行します。

### トライアル / ライセンス
- **インストールから30日間フル機能・登録もキーも不要** → 期間後は無料版として継続利用可（閲覧・編集・比較・解析の画面操作は無料、保存・書き出し系は有償）。
- ライセンス購入は license.h-insight.jp から。発行キーをアプリの「ライセンス」画面でアクティベート。

### セキュリティ・配布
- **EV コード署名済み**（GlobalSign EV・HARMONIC insight LLC）。AI は BYOK・ドキュメントはローカル処理。

### 動作環境
- Windows 10（64bit, バージョン1809以降）/ Windows 11

### SHA-256 (asset integrity)
- （署名後に記入）
