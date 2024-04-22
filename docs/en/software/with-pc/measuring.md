# 測定のながれ<Badge type="danger" text="アカデミック版" />

JINS MEME ES_Rの機能を使用するには、最初に接続をする必要があります。

## 接続

### ドングルとPCの接続 (Windowsのみ)

- ドングルをパソコンの任意のUSBポートに挿入し、JINS MEME ES_Rとドングルとの通信を確立させます。
    - `重要` ドングルのドライバが認識されない場合は、Silicon labsが公開しているCP210x USB - UART ブリッジ VCPドライバをお試しください。

### ①アプリの起動

1. JINS MEME ACADEMIC  のアイコンをクリックして、ソフトウェアを起動します。
    - 「データ取得」画面が表示されます。

### ②ドングルとポートの設定 (Windowsのみ)

1. `Scan port` ボタンをクリックし、ドングルを検索します。
    - コンボボックスにUSBのポート番号が表示されます。
1.  一覧から通信先のポート番号を選択し、 Open ボタンをクリックします。

### ③JINS MEME ES_Rの接続

1. 接続可能な状態のJINS MEME ES_Rが近くにあるときに、 `Scan device` ボタンをクリックすると、接続可能なJINS MEME ES_Rの検索されます。
1. コンボボックスに接続可能なJINS MEME ES_RのID番号が表示されます。  
1. 接続対象のJINS MEME ES_Rを選択し、 `Connect' ボタンをクリックします。  
1. ステータス表示が `Connected` に切り替わり、通信が確立されます。  
    - PCとの相性により接続が失敗することがあります。接続が失敗した場合は再度接続をお試しください。

![接続](/images/pc_setting1.png)


## 計測

1. 計測開始
    - 計測するデータモード「Select mode」、通信速度「Transmission speed」、センサーレンジ「Measurement range of Accelerometer」および「Measurement range of Gyroscope」を指定し、 `Start Measurement` ボタンをクリックすることでJINS MEME ES_Rから計測値が送信され、グラフ描画を開始します。
    - `参考` 各項目の詳細については、「画面 ⇒ データ再生画面」を参照してください。  
    - `重要` 「Select mode」で「Quaternion」を選択した場合、グラフは描画されません。
1. 計測停止
    - 計測中に `Stop Measurement` ボタンをクリックすることで、計測を停止します。

![計測](/images/pc_setting2.png)


## 切断

1. JINS MEME ES_Rの切断
    1. JINS MEME ES_Rの計測を停止した状態で、 `Disconnect` ボタンをクリックします。
    1. Disconnect の表示が Connect  ボタンに切り替わり、通信が切断されます。
1. ドングルとPCの切断 (Windowsのみ)
    1. 任意のUSBポートでのドングル通信中に、 `Close` ボタンをクリックします。
    1. Close  ボタンの表示が  Open  ボタンに切り替わり、ドングル通信が切断されます。

![切断](/images/pc_setting3.png)

