## Insight Doc Translator v1.0.4

> **TL;DR (English)** — Major update: DOCX image translation pipeline (OCR → translate → re-render),
> full 4-language UI (JA/EN/ZH/KO), improved PDF translation reliability, stronger engine
> connection testing, bilingual EULA, and many bug fixes. In-place upgrade from v1.0.3
> preserves all API keys, translation memory, and glossaries.

### DOCX 画像翻訳パイプライン
- **DocxImageService**: Word ドキュメント内の画像に対する OCR → 翻訳 → 差し戻しのパイプラインを実装
- **ClaudeVisionOcrService**: Claude Vision OCR の精度・安定性を強化（多言語混在ページにも対応）

### 多言語 UI（4 言語完全対応）
- XAML / MessageBox / 進捗ダイアログ / エラー通知のすべてを `LanguageManager` 経由に統一（Phase 1a–1c）
- DataGrid 表示・時刻表記・PPTX shape 名を **JA / EN / ZH / KO** で本格対応
- `Log.*` / `UI.*` キー約 380 個を再編、深刻なリグレッションを修正

### 翻訳エンジン / 接続
- **EngineConnectionTester**: 各エンジンへの接続テストを安定化（タイムアウト・エラーハンドリング整理）
- **CostEstimateService**: API コスト見積もりロジックを改善
- **LanguageDetector**: 言語自動判定の精度向上
- TM（翻訳メモリ）を `(engine, src, tgt)` 3 キーで保持し、エンジン横断混在を防止

### PDF 翻訳
- **PdfService**: PDF 入出力を強化
- Syncfusion PDF 抽出にページ単位タイムアウトを追加し、特定ページでの指数的減速をガード

### ヘルプ / オンボーディング
- **HelpWindow** を 4 言語化（ja / en / zh / ko）
- **TutorialDialog**: チュートリアルフローを拡充
- ライセンス画面のフッターから代理店窓口（申込 / 問合せメール）にショートカット

### コンプライアンス / 配布
- **Installer/EULA.txt**: インストール時に同意ページを表示（BYOK / AI 翻訳 / PDF 翻訳 / サードパーティ API の責任分界）
- EULA に英語版（参考訳）を追記 — 日本語版を法的拘束力ある原文として維持
- `insight-common` を d1e2a58 まで追従（ResellerHelpUrl + 4 言語コピー改善）

### アップグレード手順
旧 v1.0.3 から本版へ上書きインストール。設定（API キー・翻訳メモリ・用語集）はすべて引き継がれます。

### 既知の制限 / Known limitations
- インストーラはコード署名未適用のため、Windows SmartScreen が「不明な発行元」と表示する場合があります。
  Setup is currently unsigned; Windows SmartScreen may show an "unknown publisher" warning.
  → 詳細表示 → 「実行」で続行できます / Click "More info" → "Run anyway" to proceed.

### SHA-256 (asset integrity)
```
DA313351AA1C8EDA98F78D1EEACFB82F5272F7DBA8D253ECE000EE975D0C7FB8  InsightDocTranslator_Setup_1.0.4.zip
EF1E4B950FE0BE4F5853E7C3BE3C7D5A5F0037A2401FD77E30D17CD7B9B5E09E  InsightDocTranslator_Setup_1.0.4.exe
```

Verify on Windows: `Get-FileHash InsightDocTranslator_Setup_1.0.4.zip -Algorithm SHA256`
