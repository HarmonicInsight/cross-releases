## Insight Doc Translator v1.0.5

> **TL;DR (English)** — Trial experience overhaul + stability fixes. The old "get a trial key by email" button is gone: installing the app unlocks every feature for 30 days automatically (no sign-up, no key). License status (paid / trial days left / free) is always visible in the status bar. Also fixes an empty language dropdown bug, reduces UI-thread blocking, and bundles public terminology dictionaries (MHLW multilingual glossary, OTIT "Genba no Kotoba"). EV code-signed installer.

Insight Doc Translator（Word / Excel / PowerPoint / PDF 多言語翻訳）のトライアル体験一新＋安定性アップデートです。

### 変更点（1.0.5）
- **トライアルは登録不要に一本化**: Help リボンの「トライアル（メール認証で自動発行）」ボタンとコマンドパレット項目を廃止。インストール後30日間は、キーも登録もなしで全機能をご利用いただけます。
- **ライセンス状態の常時表示**: ステータスバー右下に「トライアル（残り N 日）／プラン名 ライセンス有効／無料版」を常時表示。クリックでライセンス画面が開きます。
- **セキュリティ**: トライアル開始記録（trial.json）を DPAPI（Windows 標準暗号化）で保存。既存の記録は開始日を維持したまま自動移行します。
- **不具合修正・安定性**: 言語プルダウンが空になることがある不具合を修正。大きなファイル操作時の UI スレッドブロッキングを解消。
- **公的用語辞書の同梱**: 厚労省 多言語用語集・OTIT「げんばのことば」をバンドル辞書として搭載（GitHub 配布版では本版から）。

### トライアル / ライセンス
- **インストールから30日間フル機能・登録もキーも不要** → 期間後は無料版として継続利用可（翻訳結果のファイル保存・出力は有償）。
- ライセンス購入は license.h-insight.jp から。発行キーをアプリの「ライセンス」画面でアクティベート。

### セキュリティ・配布
- **EV コード署名済み**（GlobalSign EV・HARMONIC insight LLC）。BYOK（6エンジン）・ドキュメントはローカル処理。

### 動作環境
- Windows 10（64bit, バージョン1809以降）/ Windows 11

### SHA-256 (asset integrity)
- InsightDocTranslator_Setup_1.0.5.zip: `F36D293C1430A28CFBA4F8EEF3365B02748902EC89C71D24CC689F1E2B95E996` (85,849,339 B)
- InsightDocTranslator_Setup_1.0.5.exe: `54C1AE9C417A601C1A6144FEE26CAADE05E55BD1894940751EC9D1C45D9D9578` (86,378,864 B)
