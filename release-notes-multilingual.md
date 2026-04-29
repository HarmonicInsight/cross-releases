# 多言語対応強化リリース

## ハイライト

- **インストーラーが OS の表示言語に自動追従** — Windows の UI 言語が日本語ならインストールウィザードも日本語で、英語/中国語(簡体)/韓国語の OS なら自動的にその言語で表示されます。
- **アプリ初回起動時も OS 言語を自動採用** — 設定ファイルが無い初回起動でも、OS 言語に合わせて起動します。中国語 OS のユーザーが日本語画面で起動する事故を防ぎます。
- **インストール後の手動言語切替も保持** — 一度ユーザーが言語を切り替えれば設定が保存され、次回以降はその言語で起動します。

## 各製品の対応言語

| 製品 | 対応言語 | OS フォールバック |
|---|---|---|
| Insight Doc Translator (INST) | ja / en / zh / ko | ja → JA, zh → ZH, ko → KO, それ以外 → EN |
| Insight Deck Quality Gate (INSS) | ja / en | ja → JA, それ以外 → EN |
| Insight Performance Management (IOSH) | ja / en / zh | ja → ja, zh → zh, それ以外 → en |
| Insight AI Doc Factory (IOSD) | ja / en / zh | ja → ja, zh → zh, それ以外 → en |
| Insight Training Studio (INMV) | ja / en / zh / ko | ja → ja, zh → zh, ko → ko, それ以外 → en |
| Insight Agent (INAG) | ja / en | ja → ja, それ以外 → en |

## 互換性

- 既存ユーザーの設定（保存済みの言語）は引き継がれます。
- ZH/KO の翻訳が一部未整備な箇所では英語にフォールバック表示されます。
- ライセンスキー・プロジェクトファイル形式は変更ありません。

## INST の追加変更点

- 翻訳設定パネルの Source/Target 言語ドロップダウンが UI 言語に追従
- 翻訳エンジンのモデル名表示・「ページ送り／連続スクロール」トグル等が UI 言語に追従
- 起動ログ（Log パネル）が UI 言語に追従
- 翻訳サーバー (NeonDB) 連携カードを ENT プラン専用に変更（非 ENT には非表示）
- 言語切替後に再起動を促すダイアログを表示

## INMV の追加変更点

- VOICEVOX 案内ページのメッセージを zh / ko に翻訳
- インストーラーウィザード用 ChineseSimplified / Korean ISL 対応
