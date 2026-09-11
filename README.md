# JINS MEME Platform Web

[デプロイ先](https://jins-meme.github.io/jinsmeme-platform)
[VitePress](https://vitepress.dev/)を使用したLTS版サポートページ

## 開発

npm run docs:dev
npm run docs:build (たまにdevでエラー出ずに、デプロイしてエラーになることがあるので、その時はこれを試す)
ページ設定はdocs/.vitepress/config.mjs で実施する

### `docs/doc/principles` / `docs/en/doc/principles` について

分析ノウハウ系のページ(通常版の演算処理・バイタルデータの注意点・シーン分析例・
時系列分析例・モーショントラッキング)。**正本はこのリポジトリのこれらのファイル。**
[python-processing-core](https://github.com/jins-meme/python-processing-core) 側の
`docs/principles/`(submodule・sparse-checkout)から参照専用で見えるようにしているが、
編集はこちらで行うこと(python-processing-core は PRIVATE リポジトリで GitHub Pages の
ビルドからは認証なしに参照できないため、submodule の向きはこちらへは持たせていない)。

## 備忘録

- github pages用に `base: '/jinsmeme-platform/',` を設定に追加したのでgithub pages以外にデプロイする時は修正する。

