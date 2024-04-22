---
outline: deep
---

![](/images/title.png)

## 機種の種類

- <Badge type="tip" text="通常版" />は、JINS MEME内またはアプリ内で意味づけを行ったデータを取得でき、一般的な実験用途に適しています。
- <Badge type="danger" text="アカデミック版" />(ES-R)は、粒度の細かいEOGや6軸センサーの生データを取り込むことができます。最大で100Hzでの全データ種、200HzでのEOGの取得に対応しております。
- アカデミック版のデータを通常版のデータに変換するツールは提供しておりません。

![](/images/schematics.png)

## 対応ソフトウェアと取得可能なデータ 

| 機種 | 転送周期 | ソフトウェアと対応OS |
| :---: | :---: | :--- |
| <Badge type="tip" text="通常版" /> | 20Hz<br/>60秒1回 | <ul><li>[通常版 Logger<br/> (iOS / Android)](/software/es/logger_app)</li><li>SDK (iOS / Android / Nodejs)<br/>※問い合わせ対応、20Hz・60秒間隔データのみ</li></ul> |
| <Badge type="danger" text="アカデミック版" /><br/>(ES-R) | 50/100Hz | <ul><li>Academic(ES-R)版 Logger<br/>([Windows / MacOS](/software/with-pc/) / [Android](/software/with-android/))</li><li>[SDK](https://github.com/jins-meme/ES_R-Development-Kit)</li></ul>  |

### データ一覧<Badge type="tip" text="通常版" />

[詳細はこちら](/doc/data_es)からご覧ください。

| データ種類 | 名称・別称 | 含まれる指標の例 |
|:---|:---|:---|
| 20Hzデータ | リアルタイムデータ, currentData | まばたきイベント、視線移動、加速度、角度 |
| 15秒間隔データ | ロジック指標データ, logicIndexData | 集中、落ち着き、緊張、覚醒、歩数、姿勢角(前後・左右)、歩行振動(X/Y/Z)、まばたき統計指標(H/W, Mean/Sd) |
| 60秒間隔データ | サマリデータ, スタンダードデータ, summaryData | 歩数(ピッチ4段階)、姿勢角(前後・左右)、歩行振動(X/Y/Z)、まばたき統計指標(H/W, Mean/Sd) | 
| 高速頭部運動データ | 首振りデータ, fastHeadMotion | 縦や横に顔を向けたときのイベント |
| 低速頭部運動データ | 頭の回転と傾きデータ, slowHeadRotation, slowHeadTilting | ゆっくりとした頭の回転や傾きのイベント |

### データ一覧<Badge type="danger" text="アカデミック版" /> 

[詳細はこちら](/doc/data_esr)からご覧ください。

| データ種類 | 含まれる指標の例 |
|:---|:---|
| Standard Mode データ | EOG電位シグナル, 加速度（1行に2データ） |
| Full Mode データ | EOG電位シグナル, 加速度, 角速度 |
| Quaternion データ | Quaternion |


## 製品仕様

<Badge type="tip" text="通常版" />

| 項目 | 仕様 |
|:---|:---|
| バッテリー | リチャージブルリチウムイオンバッテリー内蔵 |
| 充電時間 | 約2.5h |
| 使用時間 | アクティブモード（連続使用 ジャイロなし）：最大約24時間<br/>アクティブモード（連続使用 ジャイロあり）：最大約12時間<br/>スリーブモード（待機状態）：約2週間 |
| 質量 | 約32g（度なしUVカットレンズの場合） |
| 材質 | プラスチック(core/crip)、SUS316L(core)、TR-90(frame) |
| センサー | ・3点式眼電位センサー(Resolusion: 12bit, Ideal: 2.5mV)<br>・3軸加速度センサー<br>・3軸ジャイロ（角速度）センサー |
| データ通信 | Bluetooth Low Energyによる無線通信 |
| 外部インターフェース | micro  USB端子  |
| 使用環境条件 | ・温度：0～40℃<br>・湿度：10～90％ RH（結露なきこと） |

<Badge type="danger" text="アカデミック版" />

| 項目 | 仕様 |
|:---|:---|
| バッテリー | リチャージブルリチウムイオンバッテリー内蔵 |
| 充電時間 | 約2.5h |
| 使用時間 | - Quartanion mode: 約9h<br>- Full node: 約11h<br>- Standard mode: 約15h |
| 質量 | 約32g（度なしUVカットレンズの場合） |
| 材質 | プラスチック(core/crip)、SUS316L(core)、TR-90(frame) |
| センサー | ・3点式眼電位センサー(Resolusion: 12bit, Ideal: 2.5mV)<br>・3軸加速度センサー<br>・3軸ジャイロ（角速度）センサー |
| データ通信 | ・Bluetooth Low Energyによる無線通信 |
| 使用環境条件 | ・温度：0～40℃<br>・湿度：10～90％ RH（結露なきこと） |

## ご購入窓口・保証・アフターサービス

- [JINS MEMEサポート](https://cloud.mail.jins.com/aboutmeme)へお問い合わせください。JINS店舗・JINSオンラインショップでは受け付けておりません。
- 保障・アフターサービスはご購入から１年です。
