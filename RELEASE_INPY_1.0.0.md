## InsightPy v1.0.0

> **TL;DR (English)** — First public release of InsightPy: a Python learning + business-automation studio for Windows. Bundled Python (no install), a free 96-lesson learning center, multi-file projects with package folders, BYOK AI code generation, scheduled/sequential runs, and an EV code-signed installer.

InsightPy（Python スタジオ）の初回公開リリースです。書いて・学んで・実行し、Office／データ／Web／RPA を自動化できる Windows デスクトップアプリです。

### 学習（無料）
- **学習センター**: 「ゼロからの Python（高校情報I 準拠）」71 レッスン ＋ すぐ使えるサンプル 25 本（日英）
- **クラスとモジュール（発展）章**: クラス入門〜継承、モジュール、複数ファイルのプロジェクト構成まで
- 実行ステップ可視化（Python Tutor 型）／日本語エラー解説（ルールベース・キー不要）／🎓 先生にきく（ソクラテス式）
- AI なし静的コードチェック（構文・未定義名・定番ミス。オフライン・課金ゼロ）

### 実行・エディタ
- **同梱 Python 3.12（インストール不要）**: pip も PATH も不要
- VS Code 風エディタ（補完・括弧/引用符補完・自動インデント・行コメント）
- **複数ファイル＝プロジェクト実行**: 同じフォルダの .py が互いに import 可。サブフォルダ＝Python パッケージ階層に対応。📦 プロジェクト／▶ エントリ(main.py) を一目で識別
- ƒ 関数リファレンス（検索・挿入）

### 業務自動化（有料）
- 業務ライブラリ実行（openpyxl / python-docx / python-pptx / pypdf / pandas / numpy / matplotlib / requests / selenium / beautifulsoup4 等）
- AI コード生成（BYOK: 自分の Claude / OpenAI / Gemini キー）
- スケジュール実行・連続実行（ローカル RPA オーケストレーター）／アセット（資格情報・設定の暗号化保管）

### セキュリティ・配布
- **EV コード署名済み**（GlobalSign EV・HARMONIC insight LLC）。SmartScreen 警告を回避
- API キー・アセットは端末内で DPAPI 暗号化保存。コード・ファイルはクラウドへ自動送信しません

### 動作環境
- Windows 10（64bit, バージョン1809以降）/ Windows 11、ディスク約 500MB

### SHA-256 (asset integrity)
```
BC83BAA0F92499C4A11BD952581AEAE5357E5B16515A06536CECBE15EA1B0A5F  InsightPy_Setup_1.0.0.zip
20134C075AF38379EE6E51C208258E6C9231A6F32A8DB972CD7AEAF3AE9B9DE9  InsightPy_Setup_1.0.0.exe
```

Verify on Windows: `Get-FileHash InsightPy_Setup_1.0.0.zip -Algorithm SHA256`
