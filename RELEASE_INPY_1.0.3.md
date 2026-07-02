## InsightPy v1.0.3

> **TL;DR (English)** — Trial experience cleanup. Removes the obsolete "trial key" button (installing already unlocks every feature for 30 days — no sign-up, no key), unifies the trial logic with the shared TrialGate module across all HARMONIC insight desktop apps, and encrypts the trial record with DPAPI. In-app purchase buttons now resolve through the license server's /buy redirector, so checkout destinations stay current without app updates. EV code-signed installer.

InsightPy（Python 学習＋業務自動化スタジオ）のトライアル体験整理アップデートです。

### 変更点（1.0.3）
- **トライアル導線の整理**: 購入ダイアログの「30日 無料トライアル」ボタンを廃止。トライアルはインストール後30日自動（キー・登録不要）のため、取得操作は不要です。
- **トライアル基盤の共通化**: 全 HARMONIC insight デスクトップ製品共通の TrialGate モジュールに統一（残日数などの表示・判定ロジックが製品間で一致）。
- **セキュリティ**: トライアル開始記録（trial.json）を DPAPI（Windows 標準暗号化）で保存。既存の記録は開始日を維持したまま自動移行します。
- **購入ボタンの安定化**: アプリ内の購入ボタンはライセンスサーバの /buy を経由して最新のチェックアウト先に接続します（サーバ側で追従するため、以後アプリ更新なしで購入先変更に対応）。

### トライアル / ライセンス
- **インストールから30日間フル機能・登録もキーも不要** → 期間後は無料版（学習センター・実行・可視化は無料のまま、業務機能は有償）。

### セキュリティ・配布
- **EV コード署名済み**（GlobalSign EV・HARMONIC insight LLC）。同梱 Python 3.12・完全ローカル動作。

### 動作環境
- Windows 10（64bit, バージョン1809以降）/ Windows 11、ディスク約 500MB

### SHA-256 (asset integrity)
- InsightPy_Setup_1.0.3.zip: `182233348A32C41B41B30022C21A6F4B9CD0D3CCF4B766824F737D411CF47F71` (121,814,502 B)
- InsightPy_Setup_1.0.3.exe: `F4E1565BB50F2B272876B7E740844FE82081263D378748DAE8DFA553C423E742` (122,336,448 B)
