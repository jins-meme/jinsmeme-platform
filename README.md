# JINS MEME Platform Web

[デプロイ先](https://jins-meme.github.io/jinsmeme-platform)
[VitePress](https://vitepress.dev/)を使用したLTS版サポートページ

## 開発

npm run docs:dev
npm run docs:build (たまにdevでエラー出ずに、デプロイしてエラーになることがあるので、その時はこれを試す)
ページ設定はdocs/.vitepress/config.mjs で実施する

### 初回セットアップ(submodule)

`docs/doc/principles` は [python-processing-core](https://github.com/jins-meme/python-processing-core)
の `docs/principles/` を submodule として取り込んでいる。
git の submodule はリポジトリ丸ごとしか登録できないため、sparse-checkout で
`docs/principles/` 以外(python コードなど)を checkout しないようにしている。
この sparse-checkout 設定は clone ごとにローカルな状態(`.gitmodules` には残らない)なので、
clone 後は毎回このスクリプトを実行すること。

```
./scripts/init-submodules.sh
```

`docs/doc/principles` の中身(通常版の演算処理・バイタルデータの注意点など)を更新したいときは
python-processing-core 側の `docs/principles/` を直接編集して commit/push し、こちらでは

```
cd docs/doc/principles && git fetch && git checkout origin/develop
cd ../../.. && git add docs/doc/principles && git commit -m "..."
```

で追随先のコミットを更新する。

## 備忘録

- github pages用に `base: '/jinsmeme-platform/',` を設定に追加したのでgithub pages以外にデプロイする時は修正する。

