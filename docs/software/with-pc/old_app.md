# パソコン用 Academic(ES-R)版ロガー（旧バージョン）<Badge type="danger" text="アカデミック版" />

JINS MEME ES_Rで取得したデータを、パソコンに保存することができます。

> **注意:** こちらは **USBドングルを使う旧アプリ** 向けの説明です。ドングル不要でパソコン本体のBluetoothを使う新しいアプリをご利用の場合は[新しいアプリのマニュアル](./index.html)を参照してください。

## ソフトウェアをダウンロードする

[こちら](https://github.com/jins-meme/ES_R-DataLogger/releases) からファイルをダウンロードしてください。

## ソフトウェア動作環境

|OS| 環境|
|:---:|:---:|
| 対応OS（Windows） | Microsoft Windows 11以降 64bit<br>メモリー：4GB以上 （推奨 8GB）|
| 対応OS（MacOS） | MacOS 14以降<br>メモリー：4GB以上 （推奨 8GB）|

## インストールする

### Windows

1. ファイルをダブルクリックで実行するとアプリが起動するので、ソフトウェアのバージョンを確認し、 Next >  ボタンをクリックします。
    - `重要` 管理者以外のアカウントでログインしている場合は、「ユーザアカウント制御」画面が表示されます。インストールを続行する場合は、管理者に依頼してインストールを行ってください。
1. ユーザー名、組織名、シリアル番号を入力し、 Next >  ボタンをクリックします。  
1. ソフトウェアのインストール先を指定し、 Next >  ボタンをクリックします。  
1. スタートメニューに登録するフォルダ名を指定し、 Next >  ボタンをクリックします。
1. デスクトップアイコンの作成を指定し、 Next >  ボタンをクリックします。  
1. 入力情報を確認し、間違いなければ、 Install  ボタンをクリックします。  
1. インストール完了画面が表示されたら、 Finish  ボタンをクリックし、画面を閉じます。  

![手順](/images/windows_install.png)

アンインストールは、アプリケーション一覧からアプリを選択して削除します。

### MacOS

1. ファイルを展開します。
1. 実行ファイルをアプリケーションフォルダに移動します。
1. 実行します。

アンインストールは、アプリケーションフォルダから削除します。

---

## 測定のながれ

JINS MEME ES_Rの機能を使用するには、最初に接続をする必要があります。

### 接続

#### ドングルとPCの接続 (Windowsのみ)

- ドングルをパソコンの任意のUSBポートに挿入し、JINS MEME ES_Rとドングルとの通信を確立させます。
    - `重要` ドングルのドライバが認識されない場合は、Silicon labsが公開しているCP210x USB - UART ブリッジ VCPドライバをお試しください。

#### ①アプリの起動

1. JINS MEME ACADEMIC  のアイコンをクリックして、ソフトウェアを起動します。
    - 「データ取得」画面が表示されます。

#### ②ドングルとポートの設定 (Windowsのみ)

1. `Scan port` ボタンをクリックし、ドングルを検索します。
    - コンボボックスにUSBのポート番号が表示されます。
1.  一覧から通信先のポート番号を選択し、 Open ボタンをクリックします。

#### ③JINS MEME ES_Rの接続

1. 接続可能な状態のJINS MEME ES_Rが近くにあるときに、 `Scan device` ボタンをクリックすると、接続可能なJINS MEME ES_Rの検索されます。
1. コンボボックスに接続可能なJINS MEME ES_RのID番号が表示されます。  
1. 接続対象のJINS MEME ES_Rを選択し、 `Connect' ボタンをクリックします。  
1. ステータス表示が `Connected` に切り替わり、通信が確立されます。  
    - PCとの相性により接続が失敗することがあります。接続が失敗した場合は再度接続をお試しください。

![接続](/images/pc_setting1.png)

### 計測

1. 計測開始
    - 計測するデータモード「Select mode」、通信速度「Transmission speed」、センサーレンジ「Measurement range of Accelerometer」および「Measurement range of Gyroscope」を指定し、 `Start Measurement` ボタンをクリックすることでJINS MEME ES_Rから計測値が送信され、グラフ描画を開始します。
    - `参考` 各項目の詳細については、「画面 ⇒ データ再生画面」を参照してください。  
    - `重要` 「Select mode」で「Quaternion」を選択した場合、グラフは描画されません。
1. 計測停止
    - 計測中に `Stop Measurement` ボタンをクリックすることで、計測を停止します。

![計測](/images/pc_setting2.png)

### 切断

1. JINS MEME ES_Rの切断
    1. JINS MEME ES_Rの計測を停止した状態で、 `Disconnect` ボタンをクリックします。
    1. Disconnect の表示が Connect  ボタンに切り替わり、通信が切断されます。
1. ドングルとPCの切断 (Windowsのみ)
    1. 任意のUSBポートでのドングル通信中に、 `Close` ボタンをクリックします。
    1. Close  ボタンの表示が  Open  ボタンに切り替わり、ドングル通信が切断されます。

![切断](/images/pc_setting3.png)

---

## 画面

### データ取得画面

<img src="/images/image50.png" width="600px" alt="img">

| 図内番号 | 名称 | 項目 | 説明 |
| :---: | --- | --- | --- |
| 1 | Settings(S) | | 設定画面(後述参照)を表示します。(※ドングル通信中は操作不可。) |
| 2 | Version(V) | | バージョン情報画面を表示します。 |
| 3 | 切り替えタブ | | データ取得タブ「Acquire sensor data」、データ再生タブ「Review sensor data」の切り替えを行います。 |
| 4 | ステータスバー | Battery Level | 計測動作中に計測機器の電池レベルを５段階表示します。 |
| | | MEME Version | 接続中のJINS MEME ES_Rのバージョン情報を表示します。 |
| | | Dongle Version | 接続中のドングルのバージョン情報を表示します。 |
| | | Success rate | 計測開始からのデータ取得率を表示します。 |
| | | Communication | 計測中の直近200m秒のデータ取得率を表示します。 |
| 5 | グラフ表示種別設定 | | 対象グラフに表示する種別を設定します。コンボBOXにて下記の種別を選択し、「Apply」ボタンをクリックすることでグラフに反映されます。 |
| | | Hide | グラフを非表示にします。 |
| | | Accelerometer | 加速度センサーの値を表示します。 |
| | | Gyroscope | ジャイロセンサーの値を表示します。 |
| | | Electrooculography | 眼電位センサーの値を表示します。 |
| 6-1 | グラフ | | グラフを表示します。計測停止時は、マウス操作によりズームやスクロールを行うことができます。 |
| | | ズーム | グラフ上でマウスの左クリック後、ホイール操作で拡大縮小ができます。 |
| | | スクロール | グラフ上でマウスの左クリック後、ドラッグ操作で移動ができます。 |
| 6-2 | グラフ凡例データ選択 | | 凡例データグラフの表示/非表示を切り替えます。 |
| | | マークがある時 | グラフを表示します。 |
| | | マークがない時 | グラフを非表示にします。 |
| 7 | ドングル接続部 | | ドングルとの接続操作を行います。 |
| | | Scan Port | ドングル用ポートの検索を行います。 |
| | | コンボBOX | ドングル用ポートのリスト表示と選択を行います。 |
| | | Connect/Close | ドングルとの接続/切断を行います。 |
| 8 | JINS MEME ES_R 接続部 | | JINS MEME ES_Rとの接続操作を行います。 |
| | | Scan Device | JINS MEME ES_Rの検索を行います。 |
| | | コンボBOX | JINS MEME ES_Rのリスト表示と選択を行います。 |
| | | Connect/Disconnect | JINS MEME ES_Rとの接続/切断を行います。<br>「Status」で接続状態を表示します。 |
| 9 | データ取得制御部 | | 計測機器の設定及び計測操作を行います。<br>※Quaternionを選択した場合、計測モードの選択はできますがグラフは描画されません。 |
| | | Initialize | 計測レンジ及び通信速度設定値の初期化を行います。 |
| | | Select Mode | 計測モードの選択ができます。各モードにおける稼動センサーとサンプリング周波数は下表のとおりです。 |
| | | Transmission Speed | JINS MEME ES_Rとドングル間のBluetooth通信速度が選択できます。100Hzと50Hzから選択でき、50Hzではより安定したデータ取得が可能です。 |
| | | Measurement range of Accelerometer | 加速度センサーの計測レンジを±2 ±4 ±8 ±16gから選択できます。 |
| | | Measurement range of Gyroscope | ジャイロセンサーの計測レンジを±250 ±500 ±1000 ±2000から選択できます。 |
| | | Start Measurement / Stop Measurement | JINS MEME ES_Rに対し、計測の開始/停止の指示を行います。取得データは以下に保存されます。<br>`\Documents\JINS\MEMEacademic\SensorData`<br>記録データの内容については、「TCPソケット通信の受信フォーマットに関して」を参照してください。 |
| | | Free Marking | 計測データにアーチファクトを追加します。計測データを保存したcsvファイルのA列に「x」が記載されます。 |
| 10 | TCPソケット通信 | | TCPソケット通信の状態が表示されます。 |
| | | IP address | TCPソケット通信を行うIPアドレスです。 |
| | | Port | TCPソケット通信を行うPort番号です。 |
| | | Status | TCPソケット通信の状態が表示されます。 |

**Select Mode：計測モード別の稼動センサーとサンプリング周波数**

| 計測モード | 稼動センサー | サンプリング周波数 |
| --- | --- | --- |
| Full mode | 眼電位センサー | 100Hz |
| | 加速度センサー | 100Hz |
| | ジャイロセンサー | 100Hz |
| Standardmode | 眼電位センサー | 200Hz |
| | 加速度センサー | 100Hz |
| Quaternion | — | 100Hz |

### データ再生画面 (この機能はWindowsのみです)

<img src="/images/image51.png" width="600px" alt="img">

| 図内番号 | 名称 | 項目 | 説明 |
| :---: | --- | --- | --- |
| 1 | Settings(S) | | 設定画面(後述参照)を表示します。(※ドングル通信中は操作不可。) |
| 2 | Version(V) | | バージョン情報画面を表示します。 |
| 3 | 切り替えタブ | | データ取得タブ「Acquire sensor data」、データ再生タブ「Review sensor data」の切り替えを行います。 |
| 4 | ステータスバー | Battery Level | 計測動作中に計測機器の電池レベルを５段階表示します。 |
| | | MEME Version | 接続中のJINS MEME ES_Rのバージョン情報を表示します。 |
| | | Dongle Version | 接続中のドングルのバージョン情報を表示します。 |
| 5 | グラフ表示種別設定 | | 対象グラフに表示する種別を設定します。コンボBOXにて夏期の種別を選択し、「Apply」ボタンをクリックすることでグラフに反映されます。 |
| | | Hide | グラフを非表示にします。 |
| | | Accelerometer | 加速度センサーの値を表示します。 |
| | | Gyroscope | ジャイロセンサーの値を表示します。 |
| | | Electrooculography | 眼電位センサーの値を表示します。 |
| 6-1 | グラフ | | グラフを表示します。計測停止時は、マウス操作によりズームやスクロールを行うことができます。 |
| | | ズーム | グラフ上でマウスの左クリック後、ホイール操作で拡大縮小ができます。 |
| | | スクロール | グラフ上でマウスの左クリック後、ドラッグ操作で移動ができます。 |
| 6-2 | グラフ凡例データ選択 | | 凡例データグラフの表示/非表示を切り替えます。 |
| | | マークがある時 | グラフを表示します。 |
| | | マークがない時 | グラフを非表示にします。 |
| 7 | ファイル取得・選択 | | 計測データを保存したファイル一覧を取得し表示します。<br>（※ドングル通信中は操作不可。） |
| | | Previous files with measurement data | 取得したファイル名の一覧を表示します。 |
| | | Set data folder | ファイル取得先フォルダを指定するダイアログを表示します。 |
| 8 | 選択中ファイル情報 | | ファイル一覧にて選択した任意のファイルの情報を表示します。 |
| | | Data mode | 計測モードを表示します。 |
| | | Transmission Speed | JINS MEME ES_Rとドングル間のBluetooth通信速度を表示します。 |
| | | Accelerometer sensor's range | 加速度センサーの計測レンジを表示します。 |
| | | Gyroscope sensor's range | ジャイロセンサーの計測レンジを表示します。 |
| | | From | 計測を開始した日時（GMT)を表示します。 |
| | | To | 計測を停止した日時（GMT)を表示します。 |
| 9 | ファイルレビュー | | 選択した任意のファイルのレビュー操作をします。 |
| | | Replay Speed | 動的なレビュー時の再生速度を設定します。 |
| | | Start | 動的なレビューを開始します。 |
| | | Pause/Resume | 動的なレビューの停止をします。 |
| | | Stop | 動的なレビューの停止をします。 |
| | | Plot the Data | 「Start」ボタンをクリックした後に「Plot the Data」ボタンをクリックすると、ファイルのデータを一括に読み込み、静的に表示します。 |

### 設定画面

<img src="/images/image52.png" width="600px" alt="img">

| 図内番号 | 名称 | 項目 | 説明 |
| :---: | --- | --- | --- |
| 1 | センサーデータ保存フォルダ | | センサーデータの保存先フォルダを指定します。 |
| | | Browse | フォルダ選択ダイアログが表示され、保存先を指定することができます。 |
| | | Open Folder | 保存先フォルダをエクスプローラーで開きます。 |
| 2 | 加速度DCオフセット値 | | 加速度センサーデータをグラフ表示する場合のオフセット値を指定します。ファイル保存されたデータは、センサー生値になります。（オフセット値は含みません） |
| | | X-Axis | X軸のオフセット値を指定します。 |
| | | Y-Axis | Y軸のオフセット値を指定します。 |
| | | Z-Axis | Z軸のオフセット値を指定します。 |
| 3 | 保存ファイル名変更ダイアログ表示 | | 計測動作終了時、保存ファイル名変更ダイアログの表示／非表示を指定します。 |
| | | チェックあり | ファイル名変更ダイアログを表示します。 |
| | | チェックなし | ファイル名変更ダイアログは表示されません。<br>デフォルト名が使用されます。（BLT アドレス_記録開始日時.csv） |
| 4 | TCPソケット通信 | | TCPソケット通信の有効／無効を指定します。<br>記録データの内容については、後述する「TCPソケット通信の受信フォーマットに関して」を参照してください。 |
| | | チェックあり | TCPソケット通信を有効にし、IPアドレス、Port番号が設定できます。 |
| | | チェックなし | TCPソケット通信を無効にします。 |
| 5 | 適用／キャンセル | | 本画面で指定したパラメータの保存、キャンセルを行います。 |

---

## TCP ソケット通信

ソケット通信によるログファイルは「計測情報を記載したヘッダ部」と「センシングデータを記載したボディ部」の2段構成となっています。ヘッダ部には「Data mode、Transmission speed、Accelerometer sensor's range、Gyroscope sensor's range、データ序列」の順に計測情報が記載されています。

**Select mode「Full」、Transmission speed「100Hz」、Measurement range of Accelerometer「±4g」、Measurement range of Gyroscope「1000dps」の場合**

```
//Data mode  : Full
//Transmission speed  : 100Hz
//Acceleration sensor's range  : 4g
//Gyroscope sensor's range  : 1000dps
//ARTIFACT,NUM,DATE,ACC_X,ACC_Y,ACC_Z,GYRO_X,GYRO_Y,GYRO_Z,EOG_L,EOG_R,EOG_H,EOG_V
```

### ■各計測モードのデータ序列について

#### 1. 計測モードが「Standard」の場合

```
//ARTIFACT,NUM,DATE,ACC_X,ACC_Y,ACC_Z,EOG_L1,EOG_R1,EOG_L2,EOG_R2,EOG_H1,EOG_H2,EOG_V1,EOG_V2
```

【説明】  
アーチファクト、総カウント、計測日時、加速度センサー値（X軸）、加速度センサー値（Y軸）、加速度センサー値（Z軸）、EOGセンサー値1（左）、EOGセンサー値1（右）、EOGセンサー値2（左）、EOGセンサー値2（右）、EOGセンサー値1（水平差分）、EOGセンサー値2（水平差分）、EOGセンサー値1（垂直差分）、EOGセンサー値2（垂直差分）

```
// Data mode  : Standard
// Transmission speed  : 50Hz
// Acceleration sensor's range  : 2g
// Gyroscope sensor's range  : 250dps
//
//ARTIFACT,NUM,DATE,ACC_X,ACC_Y,ACC_Z,EOG_L1,EOG_R1,EOG_L2,EOG_R2,EOG_H1,EOG_H2,EOG_V1,EOG_V2
,1,2016/03/15 01:25:10.85,790,329,16523,-59,-189,-21,-165,130,144,124,93
,2,2016/03/15 01:25:10.87,746,369,16503,-42,-158,-7,-153,116,146,100,80
,3,2016/03/15 01:25:10.89,801,302,16553,-48,-161,-16,-152,113,136,104,84
```

#### 2. 計測モードが「Full」の場合

```
//ARTIFACT,NUM,DATE,ACC_X,ACC_Y,ACC_Z,GYRO_X,GYRO_Y,GYRO_Z,EOG_L,EOG_R,EOG_H,EOG_V
```

【説明】
アーチファクト、総カウント、計測日時、加速度センサー値（X軸）、加速度センサー値（Y軸）、加速度センサー値（Z軸）、角速度センサー値（X軸）、角速度センサー値（Y軸）、角速度センサー値（Z軸）、EOGセンサー値（左）、EOGセンサー値（右）、EOGセンサー値（水平差分）、EOGセンサー値（垂直差分）

```
// Data mode  : Full
// Transmission speed  : 100Hz
// Acceleration sensor's range  : 2g
// Gyroscope sensor's range  : 250dps
//
//ARTIFACT,NUM,DATE,ACC_X,ACC_Y,ACC_Z,GYRO_X,GYRO_Y,GYRO_Z,EOG_L,EOG_R,EOG_H,EOG_V
,1,2016/03/15 01:26:07.23,780,254,16542,0,33,-66,4,-171,175,83
,2,2016/03/15 01:26:07.24,737,293,16559,-7,11,-79,12,-150,162,69
,3,2016/03/15 01:26:07.25,896,249,16539,15,34,-58,-9,-196,187,102
```

#### 3. 計測モードが「Quaternion」の場合

```
// Data mode  : Quaternion
// Transmission speed  : Standard
// Acceleration sensor's range  : 2g
// Gyroscope sensor's range  : 2000dps
//
//ARTIFACT,NUM,DATE,QUATERNION_W,QUATERNION_X,QUATERNION_Y,QUATERNION_Z
```

【説明】
アーチファクト、総カウント、計測日時、クォータニオン(W)、クォータニオン(X)、クォータニオン(Y)、クォータニオン(Z)

```
// Data mode  : Quaternion
// Transmission speed  : 50Hz
// Acceleration sensor's range  : 2g
// Gyroscope sensor's range  : 2000dps
//
//ARTIFACT,NUM,DATE,QUATERNION_W,QUATERNION_X,QUATERNION_Y,QUATERNION_Z
,1,2016/3/21 15:51:53.32,13931501,1065299619,133555066,-5213924
,2,2016/3/21 15:51:53.34,13930073,1065376001,132938877,-5356280
,3,2016/3/21 15:51:53.36,13922096,1065454235,132305442,-549757
```

### Socket クライアントサンプル

以下がPythonでのデータ受信サンプルです。

```python [tcp_client.py]
import socket
target_ip = "127.0.0.1" #Change here
target_port = 60000 #Change here
buffer_size = 4096

# 1.ソケットオブジェクトの作成
tcp_client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
print("tcp_client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)")

# 2.サーバに接続
tcp_client.connect((target_ip,target_port))
print("tcp_client.connect((target_ip,target_port))")

is_end = False
while not is_end:
    # 3.サーバからのレスポンスを受信
    response = tcp_client.recv(buffer_size)
    if response == b"":
        is_end = True
    print("[*]Received a response : {}".format(response))

# 4.接続を終了させる
tcp_client.close()
```
