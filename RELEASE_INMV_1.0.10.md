## Insight Training Studio v1.0.10

> **TL;DR (English)** — Trial experience overhaul. The old "get a trial key by email" button is gone: installing the app now unlocks every feature for 30 days automatically (no sign-up, no key). Your license status — paid plan, trial days remaining, or free edition — is always visible in the status bar (click to open the license screen). The trial start record is now DPAPI-encrypted. EV code-signed installer.

Insight Training Studio（PowerPoint→研修動画）のトライアル体験を一新するアップデートです。

### 変更点（1.0.10）
- **トライアルは登録不要に一本化**: 旧「トライアル（メール認証で自動発行）」ボタンを廃止。インストール後30日間は、キーも登録もなしで全機能をご利用いただけます。
- **ライセンス状態の常時表示**: ステータスバー右下に「トライアル（残り N 日・YYYY-MM-DD まで）／プラン名 ライセンス有効／無料版」を常時表示。クリックでライセンス画面が開きます。
- **ライセンス画面の改善**: 自動トライアル中も TRIAL 表示＋残り日数を明示（従来は FREE 表示のままでした）。
- **セキュリティ**: トライアル開始記録（trial.json）を DPAPI（Windows 標準暗号化）で保存。既存の記録は開始日を維持したまま自動移行します。

### トライアル / ライセンス
- **インストールから30日間フル機能・登録もキーも不要** → 期間後は無料版として継続利用可（出力に制限）。
- ライセンス購入は license.h-insight.jp から。発行キーをアプリの「ライセンス」画面でアクティベート。

### セキュリティ・配布
- **EV コード署名済み**（GlobalSign EV・HARMONIC insight LLC）。

### 動作環境
- Windows 10（64bit, バージョン1809以降）/ Windows 11

### SHA-256 (asset integrity)
- （署名後に記入）
