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
| データ通信 | ・Bluetooth Low Energyによる無線通信 |
| 使用環境条件 | ・温度：0～40℃<br>・湿度：10～90％ RH（結露なきこと） |

### フレームの種類

| Wellington Black | Wellington Brown |
|:---|:---|
|![Wellington Black](/images/type_wellington_black.png) | ![Wellington Brown](/images/type_wellington_brown.png) |
| Square Black |Square Navy | 
| ![Square Black](/images/type_square_black.png) | ![Square Navy](/images/type_square_navy.png) |
| Oval Brown | Oval Red |
| ![Oval Brown](/images/type_oval_brown.png) | ![Oval Red](/images/type_oval_red.png) |
| Boston Black| Boston Brown |
| ![Boston Black](/images/type_boston_black.png) | ![Boston Brown](/images/type_boston_brown.png) |

## 保証・アフターサービス

- [jins-assist-support@jins.com](<mailto:jins-assist-support@jins.com?subject=%5BJINS%20MEME%5D%20お問い合わせ&body=ご所属:%20%0D%0Aお問い合わせ内容:%20詳細をご記入ください>) へメールにてお問い合わせください。JINS店舗・JINSオンラインショップでは受け付けておりません。
- 保証・アフターサービスはご購入から6か月です。

## ご購入方法

ご購入は以下の流れになります。

### (1) ソフトウェア動作確認と見積依頼

- [製品比較](#製品比較)をご確認のうえ、通常版・アカデミック版を選択してください。アカデミック版はアルゴリズム開発用でデータ処理の難易度が高いため、通常版を利用しての研究をお薦めしております。
- ソフトウェアが動作予定の機器にインストールできることを確認してください。OSが古すぎたり、新しすぎたり、特殊な環境下では動作しないことがあります。
- [見積依頼書](/data/rfq.zip)に必要事項を記載し、[jins-assist-support@jins.com](<mailto:jins-assist-support@jins.com?subject=%5BJINS%20MEME%5D%20購入希望&body=ご所属:%20%0D%0Aお名前:%20%0D%0A見積希望内容:%20詳細ファイルをご添付ください>) へメールにて見積依頼書をご送付ください。見積書を返送いたします。

### (2) ご発注

[法人販売規約](/pdf/JINSMEME法人販売規約202511.pdf)をご覧のうえ、お送りした見積書下部の法人規約同意の署名欄にご署名・ご返送いただきますと正式にご注文となります。

### (3) 発送

- 正式なご注文をいただきましたら商品の手配に入ります。納期は、ご注文から2週間ほどを目安にお考え頂けますと幸いです。
- 弊社捺印済みの正式な __見積書、納品書、請求書などのデータ__ は、商品の発送時に、メール添付にて送付いたします。

### (4) お受け取りとお支払い

商品を受領しましたら、ご請求書に記載の方法でお支払いください。
