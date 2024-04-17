---
outline: deep
---

# JINS MEME センサー

## 機種の種類と対応するソフトウェア

| 機種 | 転送周期 | ソフトウェアと対応OS | 取得可能データ |
| :---: | :---: | :--- | :--- |
| 通常版 | 20Hz<br/>60秒1回 | Logger<br/> (iOS / Android) | - 20Hzデータ<br/>- 15秒間隔データ<br/>- 60秒間隔データ<br/>- 高速頭部運動データ<br/>- 低速頭部運動データ |
| アカデミック版 | 50/100Hz | アカデミック版 Logger<br/> (Windows / MacOS / Android) | - Standard Mode<br/>- Full Mode<br/>- Quaternion |

## データ種類の名称・指標

### 通常版

| データ種類 | 名称・別称 | 含まれる指標の例 |
|:---:|:---:|:---|
| 20Hzデータ | リアルタイムデータ, currentData | まばたきイベント、視線移動、加速度、角度 |
| 15秒間隔データ | ロジック指標データ, logicIndexData | 集中、落ち着き、緊張、覚醒、歩数、姿勢角(前後・左右)、歩行振動(X/Y/Z)、まばたき統計指標(H/W, Mean/Sd) |
| 60秒間隔データ | サマリデータ, スタンダードデータ, summaryData | 歩数(ピッチ4段階)、姿勢角(前後・左右)、歩行振動(X/Y/Z)、まばたき統計指標(H/W, Mean/Sd) | 
| 高速頭部運動データ | 首振りデータ, fastHeadMotion | 縦や横に顔を向けたときのイベント |
| 低速頭部運動データ | 頭の回転と傾きデータ, slowHeadRotation, slowHeadTilting | ゆっくりとした頭の回転や傾きのイベント |

### アカデミック版

| データ種類 | 含まれる指標の例 |
|:---:|:---|
| Standard Mode | EOG電位シグナル, 加速度（1行に2データ） |
| Full Mode | EOG電位シグナル, 加速度, 角速度 |
| Quaternion | Quaternion |


## 製品仕様

Gen1データは削除

## ご購入窓口

- JINS店舗・JINSオンラインショップでは受け付けておりません。
- []()へお問い合わせください。

## 保障・アフターサービス

- ご購入から１年
- []()へお問い合わせください。


## 取り扱い上の注意

[ご利用上の注意]()をご覧ください。

## フォーマットサンプル

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).

Check out the documentation for the [full list of runtime APIs](https://vitepress.dev/reference/runtime-api#usedata).