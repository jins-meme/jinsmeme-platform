#!/bin/sh
# docs/doc/principles (python-processing-core の submodule) を
# docs/principles/ 配下だけ sparse-checkout する。
#
# git の submodule はリポジトリ丸ごとしか登録できないため、
# python-processing-core の他のファイル(python/ 以下など)を
# checkout しないよう sparse-checkout で絞っている。
# sparse-checkout の設定はこのリポジトリの clone ごとにローカルな状態なので
# (.gitmodules には残らない)、`git submodule update --init` した後は
# このスクリプトを実行すること。

set -e
cd "$(dirname "$0")/.."

git submodule update --init docs/doc/principles

cd docs/doc/principles
git sparse-checkout init --no-cone
git sparse-checkout set '/docs/principles/*' '/docs/principles/**'
git read-tree -mu HEAD
