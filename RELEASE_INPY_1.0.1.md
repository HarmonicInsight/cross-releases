## InsightPy v1.0.1

> **TL;DR (English)** — Maintenance + feature update. Adds Jobs (named groups of scripts you run, schedule unattended, and analyze with logs), a one-click "Try it" tutorial, and a clearer paid/free indicator (trial badge + crown 👑 marks + full boundary tooltip). Install-triggered 30-day full trial (no key, no registration), bundled Python, free 78-lesson learning center linked to the "Zero-to-Python" YouTube course, EV code-signed installer.

InsightPy（Python 学習＋業務自動化スタジオ）の機能アップデート版です。

### 新機能・改善（1.0.1）
- **ジョブ（連続実行のグループ化）**: 保存スクリプトを名前付きの「ジョブ」に束ね、**今すぐ実行（連続実行）／無人スケジュール／実行ログの分析**（成功率・平均所要・連続失敗・履歴・CSV出力）まで一気通貫。手動・無人どちらの実行も同じログに蓄積。
- **お試し・チュートリアル（🚀 お試し）**: サンプル即実行 → デモデータ作成 → ジョブを開く → 無人スケジュールをその場でテスト → ログ確認、を**ワンクリックの5ステップ**で体験。
- **有料/無料の見える化**: プランバッジに「**体験版 残りN日／無料版**」とプラン別色、ツールチップで**有料/無料の境界を全列挙**。有料機能には **👑** 目印（未購入の間だけ表示・購入で消える）。バッジ**クリックで購入・アップグレード**。
- 無料/有料ゲートを同梱ライブラリ実態に整合。各種 UI/アクセシビリティ改善。

### 学習（無料）
- 「ゼロからの Python」**78 レッスン** ＋ サンプル集（日英）。YouTube 講座と1レッスンずつ連動し、アプリから該当動画をワンクリック再生。
- 実行ステップ可視化／日本語エラー解説／🎓 先生にきく／AIなし静的コードチェック。

### 実行・自動化
- **同梱 Python 3.12（インストール不要）**、VS Code 風エディタ、複数ファイル＝プロジェクト実行。
- 業務ライブラリ（openpyxl/python-docx/python-pptx/pypdf/pandas/numpy/matplotlib/requests/selenium/beautifulsoup4 等）、AIコード生成（BYOK）、ジョブのスケジュール無人実行。

### トライアル / ライセンス
- **インストール（初回起動）から30日間フル機能・登録もキーも不要** → 期間後は無料版。
- 価格: 個人 ¥20,000／法人 ¥50,000（端末・年）。

### セキュリティ・配布
- **EV コード署名済み**（GlobalSign EV・HARMONIC insight LLC）。API キー・アセットは端末内で DPAPI 暗号化。

### 動作環境
- Windows 10（64bit, バージョン1809以降）/ Windows 11、ディスク約 500MB

### SHA-256 (asset integrity)
```
9FA1ED76FAFFE7171D46827050BE64E90C7F1807B4AD28F5037ABAB8D7968E58  InsightPy_Setup_1.0.1.zip
326283857D4B325EBD7E33ABA2196D851F416EE3AF8C61097CB00B0DD3ADA0A1  InsightPy_Setup_1.0.1.exe
```

Verify on Windows: `Get-FileHash InsightPy_Setup_1.0.1.zip -Algorithm SHA256`
