# Android用 Academic(ES-R)版ロガー<Badge type="danger" text="アカデミック版" />

JINS MEME ES_Rで取得したデータを、Android端末に保存することができます。

> **注意:** こちらは **バージョン2まで** の旧アプリ向けの説明です。バージョン3以降をご利用の場合は[新しいアプリのマニュアル](./index.html)を参照してください。

## ソフトウェアをダウンロードする

- [ここ](https://github.com/jins-meme/ES_R-DataLogger/releases) からファイルをダウンロードしてください。
  - Android8以降, BLE4.2以降搭載端末

## インストールする

Android12端末の画面を例に説明します。

1. ダウンロードしたapkファイルを開きます（提供元不明のアプリのインストールが許可されていない場合は許可してください）。
2. ダイアログが表示されるので`インストール`をタップします。
3. インストールが完了したら`開く`をタップします。
4. 位置情報の権限認可のダイアログが表示されるので`アプリの使用時のみ`をタップします（古いAndroidでは許可する/許可しないのみ表示されます）。
5. デバイス内ファイルアクセスの権限認可のダイアログが表示されるので`許可`をタップします。
6. 起動完了です。

![](/images/android_install.png)

## 測定のながれ

### 接続

JINS MEME ES_Rとの通信は以下の2種類を選択できます。BLEで安定しなかった場合、USBドングル経由の接続をお試しください。

| Type | 概要 | 注意点 |
|:---:|:---:|:---:|
| BLE | 端末のBluetoothを使って直接データ受信 | 端末によって通信が安定しない場合があります |
| USB | ドングルでデータ受信 | 特定のタイミングでUSBを挿抜する必要があります |

#### 直接接続(BLE)の準備

端末のBluetoothを使用する場合は、`USE BLE`をタップすることで完了します。

#### ドングル接続(USB)の準備

1. USE USBをタップします。
2. メイン画面を表示させ、Android端末のUSBコネクタにドングルを挿入します。
    - ドングルの接続を確認するダイアログが表示されます(①)。
    - `参考` Android標準で対応しているチップのためドライバのインストール等は必要ありません。
3. **OK**をタップします。
4. **OPEN**をタップします。
    - ドングルとの通信が確立されます。しばらくするとドングルが接続状態なったことが表示されます(②)。

![接続](/images/android_setting1.png)

#### JINS MEME ES_Rの接続

1. 画面が接続待ち状態にあることを確認し、**Scan Device**をタップします。
    - JINS MEME ES_Rの検索が開始されます。JINS MEME ES_Rの検索は、おおよそ6秒間継続します。
    - JINS MEME ES_Rの検索実行の結果、1つまたは複数のJINS MEME ES_Rが発見された場合は、計測機器リストに発見されたJINS MEME ES_RのIDが表示されます。
    - JINS MEME ES_Rが発見されなかった場合は、右上の画面に戻ります。
    - 1回で見つからない場合がありますので、その時はリトライしてください。
2. 接続対象のJINS MEME ES_Rを選択し、**Connect**をタップします。
    - 検索で見つかっていない時はConnectできません。
    - 接続が完了するとConnectedと表示されます。

![接続](/images/android_setting2.png)

### 計測

#### 計測開始

1. 計測するデータモード「Select mode」、通信速度「Transmission speed」、センサーレンジ「Measurement range of Accelerometer」および「Measurement range of Gyroscope」を指定し、**START MEASUREMENT** をタップすると、計測開始の確認画面が表示されます。
    - `参考` 各項目の詳細については、[パソコンで使用する > 画面 > データ再生画面](../with-pc/windows.html)を参照してください。
1. **OK** をタップすると、JINS MEME ES_Rから計測値が送信され、データ保存を開始します。
1. グラフでデータを確認したい場合は `(TYPE) GRAPH DISABLED` のところをそれぞれタップすると `(TYPE) GRAPH ENABLED` と表示が変わります。モードに応じて表示できるグラフは以下のように異なります。
    - Standard: EOG, ACC
    - Full: EOG, ACC, GYRO
    - Quaternion: 表示なし

![測定開始](/images/android_setting3.png)

#### 計測停止

- 計測中に**STOP MEASUREMENT**タップします。
    - 計測停止の確認画面が表示されます。
- **OK** をタップします。
    - JINS MEME ES_Rからの計測値が保存されます。
    - データが保存場所: /$TOP/JINS/MEME_academic (デバイスによって $TOP はダウンロード、内部ストレージ、SDカード等と異なります)

![測定停止](/images/android_setting4.png)

### 切断

1. JINS MEME ES_Rの計測を停止した状態で、**Disconnect**をタップします。
    - JINS MEME ES_R接続状態が「Status: Connected」と表示されているときに、**Disconnect**をタップしてください。
2. 通信が切断されると、画面が切り替わります。
3. （ドングル使用時のみ）ソフトウェアを終了させると、接続状態にあるドングルは切断されます。USBコネクタからドングルを外してください。

![切断](/images/android_setting5.png)
