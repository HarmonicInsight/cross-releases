## InsightPy v1.0.2

> **TL;DR (English)** — Big feature + polish update. Adds a tabbed editor (new files are created and opened instantly), Jobs (bundle scripts, run/schedule unattended, analyze logs), a one-click "Try it" tutorial, a clearer paid/free indicator (trial badge, crown 👑 marks, click-to-buy), toolbar icons, and adjustable menu/editor font size. Install-triggered 30-day full trial (no key, no registration), bundled Python, free 78-lesson learning center linked to the "Zero-to-Python" YouTube course, EV code-signed installer.

InsightPy（Python 学習＋業務自動化スタジオ）の機能・磨き込みアップデートです。

### 新機能・改善（1.0.2）
- **タブ式エディタ**: 「＋ 新規スクリプト」で**即ファイルが作られてタブで開く**（名前の場所が最初から分かる）。複数ファイルをタブで併用、アクティブなタブを実行、切替時に自動保存。
- **ジョブ（連続実行のグループ化）**: 保存スクリプトを名前付きジョブに束ね、**今すぐ実行／無人スケジュール／実行ログの分析**（成功率・平均所要・連続失敗・履歴・CSV）。手動・無人どちらの実行も同じログに蓄積。
- **お試し・チュートリアル（🚀 お試し）**: サンプル即実行 → ジョブ → 無人スケジュールのその場テスト → ログ確認、をワンクリックで体験。
- **有料/無料の見える化**: プランバッジに「体験版 残りN日／無料版」とプラン別色、ツールチップで有料/無料の境界を全列挙、有料機能に 👑 目印、バッジ**クリックで購入・アップグレード**。
- **UI 磨き込み**: ツールバー全ボタンにアイコン、メニュー文字サイズを右下で増減、エディタ文字は Ctrl+ホイールで拡縮、ツリー選択時の視認性改善。

### 学習（無料）
- 「ゼロからの Python」**78 レッスン** ＋ サンプル集（日英）。YouTube 講座と1レッスンずつ連動し、アプリから該当動画をワンクリック再生。
- 実行ステップ可視化／日本語エラー解説／🎓 先生にきく／AIなし静的コードチェック。

### 実行・自動化
- **同梱 Python 3.12（インストール不要）**、複数ファイル＝プロジェクト実行、業務ライブラリ（openpyxl/python-docx/python-pptx/pypdf/pandas/numpy/matplotlib/requests/selenium/beautifulsoup4 等）、AIコード生成（BYOK）、ジョブのスケジュール無人実行。

### トライアル / ライセンス
- **インストールから30日間フル機能・登録もキーも不要** → 期間後は無料版。価格: 個人 ¥20,000／法人 ¥50,000（端末・年）。

### セキュリティ・配布
- **EV コード署名済み**（GlobalSign EV・HARMONIC insight LLC）。API キー・アセットは端末内で DPAPI 暗号化。

### 動作環境
- Windows 10（64bit, バージョン1809以降）/ Windows 11、ディスク約 500MB

### SHA-256 (asset integrity)
```
9A2B239494ADEA158075C40DA5979D5CB912242A366B281F9B1685D957071C6C  InsightPy_Setup_1.0.2.zip
A77EAC0493D71414CFE7850E5BEDF7E53B80AA824C311940FEFC39560D6F9583  InsightPy_Setup_1.0.2.exe
```

Verify on Windows: `Get-FileHash InsightPy_Setup_1.0.2.zip -Algorithm SHA256`
