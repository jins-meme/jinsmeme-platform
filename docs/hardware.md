---
outline: deep
---

![](/images/title.png)

## 製品比較

| 項目 | ES <Badge type="tip" text="通常版" /> | ES-R <Badge type="danger" text="アカデミック版" /> |
|:---|:---|:---|
| 機種の概要 | JINS MEME 通常版。アプリや内部処理で意味付けされたデータを取得。一般的な実験向け。 | アカデミック版。粒度の細かいEOGや6軸センサーの生データを取得可能。アルゴリズム開発用でデータ処理の難易度が高いため、通常版でも対応可能な場合には、通常版を利用しての研究をお薦めしております。|
| 転送周期 | 20Hz, 60秒1回 | 50/100Hz |
| 対応ソフトウェア | - Logger [（iOS/Android）](/software/es/logger_app) | - Logger ([Windows / macOS](/software/with-pc/) / [Android](/software/with-android/))<br /> -[SDK](https://github.com/jins-meme/ES_R-Development-Kit)|
| 主なデータ種類 | - __R3__: 20Hz リアルタイムデータ(currentData): まばたき、視線移動、加速度、角度<br/>- __R5__: 15秒間隔 ロジック指標(logicIndexData): 集中・落ち着き等<br/>- __R4__: 60秒間隔 サマリ(summaryData)<br /><br />[詳細はこちら](/doc/data_es)| __R1__: 測定前にいずれかのモードを選択<br />- Full Mode: EOG、加速度、角速度<br/>- Standard Mode: EOG（1行に2データ）、加速度<br/>- Quaternion mode: Quaternion（姿勢表現）<br /><br />[詳細はこちら](/doc/data_esr)|
| 使用時間（連続） | - アクティブ（ジャイロなし）：最大約24時間<br/>- アクティブ（ジャイロあり）：最大約12時間<br/>- スリーブモード：約2週間 | - Full mode: 約11h<br/>- Standard mode: 約15h<br/>- Quartanion mode: 約9h |
| 一式単価 | 19,800円 (1.60標準クリアレンズ込み【度付き対応可】。オプションレンズは追加料金が必要です) | 64,900円 (1.60標準クリアレンズ込み【度付き対応可】。オプションレンズは追加料金が必要です) |

![](/images/schematics.png)

R1データ(Full / Standard)からR2/R3/R5データへは、[変換アプリ](https://jinsmeme.streamlit.app/)を使用し疑似的に変換することができます（アプリがスリープ状態だった場合はUpボタンを押してアプリを起動させてください）。

## 共通仕様

| 項目 | 仕様 |
|:---|:---|
| バッテリー | リチャージブルリチウムイオンバッテリー内蔵 |
| 充電クリップインターフェース | micro  USB端子  |
| 充電時間 | 約2.5h |
| 質量 | 約32g（度なしUVカットレンズの場合） |
| 材質 | プラスチック(core/crip)、SUS316L(core)、TR-90(frame) |
| センサー | ・3点式眼電位センサー(Resolusion: 12bit, Ideal: 2.5mV)<br>・3軸加速度センサー<br>・3軸ジャイロ（角速度）センサー |
| データ通信 | ・Bluetooth Low Energyによる無線通信<br />・電波到達距離 最大7m程度 |
| 使用環境条件 | ・温度：0～40℃<br>・湿度：10～90％ RH（結露なきこと） |

## フレームの種類

| Wellington Black (for Men) | Wellington Brown (for Men) |
|:---|:---|
|![Wellington Black](/images/type_wellington_black.png) | ![Wellington Brown](/images/type_wellington_brown.png) |
| Square Black (for Men) | Square Navy (for Men) |
| ![Square Black](/images/type_square_black.png) | ![Square Navy](/images/type_square_navy.png) |
| Oval Brown (for Women) | Oval Red (for Women) |
| ![Oval Brown](/images/type_oval_brown.png) | ![Oval Red](/images/type_oval_red.png) |
| Boston Black (for Women) | Boston Brown (for Women) |
| ![Boston Black](/images/type_boston_black.png) | ![Boston Brown](/images/type_boston_brown.png) |

## ご購入・保証・アフターサービス

- 現在、新規のご購入を受け付けておりません。研究に関してはお問い合わせアドレスをご利用ください。
- 保証・アフターサービスはご購入から6か月です。
- お問い合わせ: [jins-assist-support@jins.com](<mailto:jins-assist-support@jins.com?subject=%5BJINS%20MEME%5D%20お問い合わせ&body=ご所属:%20%0D%0Aお問い合わせ内容:%20詳細をご記入ください>) ※JINS店舗・JINSオンラインショップでは受け付けておりません。
