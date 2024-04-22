---
outline: deep
---

![](/images/title.png)

## Model Type

- <Badge type="tip" text="Standard" />can acquire data with semantics within JINS MEME or within the application, and is suitable for general experimental use.
- <Badge type="danger" text="Academic" />(ES-R) can capture raw data from EOG and 6-axis sensors with fine granularity. It supports acquisition of all data types at a maximum of 100 Hz and EOG at 200 Hz.
- We do not provide a tool to convert Academic Edition data to Standard Edition data.

![](/images/schematics.png)

## Supported software and obtainable data 

| Model | Frequency | Software and OS |
| :---: | :---: | :--- |
| <Badge type="tip" text="Standard" /> | 20Hz<br/>Once per 60s | <ul><li>[Standard Logger<br/> (iOS / Android)](/software/es/logger_app)</li><li>SDK (iOS / Android / Nodejs)<br/>※Inquiry support, 20Hz and 60 second interval data only</li></ul> |
| <Badge type="danger" text="Academic" /><br/>(ES-R) | 50/100Hz | <ul><li>Academic(ES-R) Logger<br/>([Windows / MacOS](/software/with-pc/) / [Android](/software/with-android/))</li><li>[SDK](https://github.com/jins-meme/ES_R-Development-Kit)</li></ul>  |

### Data types<Badge type="tip" text="Standard" />

For more information, please [click here](/doc/data_es).

| データ種類 | 名称・別称 | 含まれる指標の例 |
|:---|:---|:---|
| 20Hzデータ | リアルタイムデータ, currentData | まばたきイベント、視線移動、加速度、角度 |
| 15秒間隔データ | ロジック指標データ, logicIndexData | 集中、落ち着き、緊張、覚醒、歩数、姿勢角(前後・左右)、歩行振動(X/Y/Z)、まばたき統計指標(H/W, Mean/Sd) |
| 60秒間隔データ | サマリデータ, スタンダードデータ, summaryData | 歩数(ピッチ4段階)、姿勢角(前後・左右)、歩行振動(X/Y/Z)、まばたき統計指標(H/W, Mean/Sd) | 
| 高速頭部運動データ | 首振りデータ, fastHeadMotion | 縦や横に顔を向けたときのイベント |
| 低速頭部運動データ | 頭の回転と傾きデータ, slowHeadRotation, slowHeadTilting | ゆっくりとした頭の回転や傾きのイベント |

### Data types<Badge type="danger" text="Academic" /> 

For more information, please [click here](/doc/data_esr).

| データ種類 | 含まれる指標の例 |
|:---|:---|
| Standard Mode データ | EOG電位シグナル, 加速度（1行に2データ） |
| Full Mode データ | EOG電位シグナル, 加速度, 角速度 |
| Quaternion データ | Quaternion |


## 製品仕様

<Badge type="tip" text="通常Standard版" />

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

<Badge type="danger" text="Academic" />

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
