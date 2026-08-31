# パソコンでの使用<Badge type="danger" text="アカデミック版" />

JINS MEME ES_R からデータを取得し、リアルタイムに可視化しながら CSV へ記録するパソコン用ロガーの操作方法を説明します。

**USB ドングルは不要です。** パソコン本体の Bluetooth LE を使って直接 ES_R に接続します。

> **注意:** USB ドングルを使う旧アプリをご利用の場合は[旧バージョンのマニュアル](./old_app.html)を参照してください。画面構成が大きく異なります。

## 動作環境

| 項目 | 内容 |
|---|---|
| 対応OS（Windows） | Microsoft Windows 11 以降 64bit<br>メモリー：4GB以上（推奨 8GB） |
| 対応OS（macOS） | macOS 14 以降<br>メモリー：4GB以上（推奨 8GB） |
| ハードウェア | **BLE 対応の Bluetooth アダプタ**（パソコン内蔵のもので構いません） |
| ドングル | **不要** |

## ダウンロード

[こちら](https://github.com/jins-meme/ES_R-DataLogger/releases) からファイルをダウンロードしてください。

| OS | ファイル |
|---|---|
| Windows | `JINS_MEME_DataLogger_Setup.exe`（インストーラー） |
| macOS | dmg を zip で固めたもの |

## インストール

### Windows

1. ダウンロードした `JINS_MEME_DataLogger_Setup.exe` をダブルクリックします。
    - `重要` インストールには管理者権限が必要です。「ユーザーアカウント制御」画面が表示されたら「はい」をクリックしてください。管理者以外のアカウントの場合は、管理者に依頼してインストールを行ってください。
1. 言語（日本語 / English）を選び、ウィザードに従って進めます。
1. インストール先（既定は `C:\Program Files\JINS MEME DataLogger`）、スタートメニューのフォルダ名、デスクトップアイコンの作成有無を指定します。
1. 「インストール」をクリックします。
    - `参考` **.NET 10 Desktop Runtime** がパソコンに入っていない場合、インストーラーが自動でダウンロードして導入します。この処理はウィザードを進めたあとに走るため、完了まで数分かかることがあります。**インターネット接続が必要です。**
1. 完了画面で「完了」をクリックします。

アンインストールは、Windows の「アプリ」一覧から `JINS MEME DataLogger` を選んで削除します。

::: tip 更新するとき
自動更新には対応していません。新しいバージョンのインストーラーをそのまま実行すると、上書きインストールされます。
:::

### macOS

1. ダウンロードした zip を展開し、中の dmg を開きます。
1. 表示されたアプリを「アプリケーション」フォルダへドラッグします。
1. 「アプリケーション」フォルダから起動します。
1. 初回起動時に Bluetooth の使用許可を求められるので、許可してください。

アンインストールは、「アプリケーション」フォルダから削除します。

## 画面の構成

![メイン画面](/images/pc_logger_main.png)

左のカラムに接続と計測の操作がまとまっていて、右側にリアルタイムチャートが 3 枚並びます。

| 場所 | 内容 |
|---|---|
| メニューバー `Setting (S)` | 保存先や TCP 出力などの設定画面を開きます |
| メニューバー `Version (V)` | アプリのバージョン情報を表示します |
| 左カラム上部 | アプリのバージョンと、接続中の ES_R のファームウェアバージョン |
| `Scan` / `File Replay` / `Connect` | デバイスの検索・接続、記録済み CSV の再生 |
| `State :` | 接続状態（`Disconnected` / `Connected` / 再生中はファイル名） |
| `Select Mode` ほか | 計測条件の設定 |
| `Start Measurement` / `Free Marking` | 計測の開始・停止、アーチファクトの付与 |
| `Success rate` / `Communication` | データ受信の成功率と直近の通信率 |
| `IP address` / `Port` / `Status` | TCP 出力の状態 |
| チャート 1〜3 | リアルタイム波形 |

## 接続する

1. ES_R を充電し、メガネの上下を正しい位置にした状態でペアリングモードにします。
1. `Scan` をクリックします。見つかったデバイスが `ESRG2_0 (mac_address)` の形でコンボボックスに並びます。
    - 1 回で見つからないことがあります。その場合はもう一度 `Scan` してください。
1. 接続したいデバイスを選び、`Connect` をクリックします。
1. 接続されると `State :` が `Connected` になり、ES_R のファームウェアバージョンが表示されます。

接続を終えるときは `Disconnect` をクリックします。

::: warning ES_R は同時に 1 台のホストとしか接続できません
スマートフォンのアプリなどが接続中の場合は、先に切断してください。
:::

## 計測する

### 計測条件を設定する

接続すると、ES_R の現在値が読み出されて各項目に反映されます。計測を始める前に必要に応じて変更してください。

| 項目 | 内容 |
|---|---|
| `Select Mode` | データモード。`Standard` / `Full` / `Quaternion` |
| `Trans Speed` | サンプリング周波数。`100Hz` / `50Hz` |
| `Accel Range` | 加速度センサーの計測レンジ。±2 / ±4 / ±8 / ±16 G |
| `Gyro Range` | ジャイロセンサーの計測レンジ。±250 / ±500 / ±1000 / ±2000 dps |

**モード別の稼働センサー**

| モード | 稼働センサー | チャート表示 |
|---|---|---|
| `Standard` | 眼電位センサー、加速度センサー | あり（EOG は 1 組目を描画） |
| `Full` | 眼電位センサー、加速度センサー、ジャイロセンサー | あり |
| `Quaternion` | クォータニオン出力 | **なし**（波形に出せる値がないため空のままです） |

### 計測を開始・停止する

- `Start Measurement` をクリックすると、計測とCSV 記録が始まります。
- 計測中は `Stop Measurement` に変わります。もう一度クリックすると停止し、CSV が確定します。
- 計測中は `Select Mode` などの設定を変更できません。

### Artifact（アーチファクト）を付ける

被験者の動作や外的イベントの位置を、後から探せるように印を付けられます。付け方は 2 通りあります。

**`Free Marking` ボタン** — クリックすると、その直後の 1 行の `ARTIFACT` 列に `x` が入ります。**計測中のみ**有効です（Windows では計測中以外はボタンが無効になり、macOS では計測中だけボタンが現れます）。

**チャートをクリック** — クリックした位置の行に、任意の文字列を入れられます。入力ダイアログが開くので、空のまま OK を押すと `X` が入ります。**計測中と再生中**のどちらでも使えます。

![Artifact 入力ダイアログ](/images/pc_logger_artifact.png)

付けた印はその場でチャートに縦線とラベルで表示され、CSV へは次のタイミングでまとめて書き戻されます。

| 状況 | 書き戻すタイミング | 書き戻し先 |
|---|---|---|
| 計測中 | `Stop Measurement` または切断時 | その計測で保存した CSV |
| 再生中 | `Record` または `Disconnect` 時 | 再生元の CSV |

- カンマと改行は列が崩れないよう空白へ置き換えられます。
- 同じ行を何度クリックしても、最後に入力した値で上書きされます。
- 書き戻しは一時ファイルへ書いてから置き換えるので、途中で失敗しても元の CSV は壊れません。

### 通信状態を確認する

| 表示 | 内容 |
|---|---|
| `Success rate` | 計測開始からの累積のデータ取得率 |
| `Communication` | 直近 1 秒間のデータ取得率 |

数値が大きく下がる場合は、パソコンと ES_R の距離を近づける、`Trans Speed` を 50Hz に下げる、といった対処を試してください。

## チャートを操作する

![再生中の画面](/images/pc_logger_replay.png)

チャートは 3 枚あり、それぞれ独立して表示内容を変えられます。波形は**間引かずに全サンプルを描いています**。

| 操作 | 内容 |
|---|---|
| カテゴリのコンボボックス + `Apply` | そのチャートに表示するセンサー種別（`Electrooculography` / `Gyroscope` / `Accelerometer`）を切り替えます |
| 左のチェックボックス | 系列ごとの表示・非表示を切り替えます |
| `↕＋` / `↕－` | 縦軸（振幅）の拡大・縮小 |
| `＋` / `－`（左カラム） | 横軸（時間）のレンジを **3 / 7 / 15 / 30 秒** で切り替えます。3 枚のチャートに同時に効きます |

::: tip EOG チャートの既定表示
`Left` と `Right` は生の電位で振れが大きく、既定では `ΔH` / `ΔV` の判読を妨げるため非表示にしてあります。必要ならチェックを入れてください。
:::

## 記録される CSV

### 保存場所とファイル名

| OS | 既定の保存先 |
|---|---|
| Windows | `ドキュメント\JINS\MEME_Academic` |
| macOS | `~/Documents/JINS/MEME_Academic` |

保存先は `Setting` の `Save File Path` で変更できます。ファイル名はどちらも `<MACアドレス>_<UTC日時>.csv` です。

`Setting` の `Save Dialog` を有効にしておくと、計測終了後に保存先を選び直すダイアログが出ます。

### 列の構成

書式は Mac 版・Android 版と共通です。モードによって列が変わります。

| モード | 列 |
|---|---|
| Standard | `ARTIFACT,NUM,DATE,ACC_X,ACC_Y,ACC_Z,EOG_L1,EOG_R1,EOG_L2,EOG_R2,EOG_H1,EOG_H2,EOG_V1,EOG_V2` |
| Full | `ARTIFACT,NUM,DATE,ACC_X,ACC_Y,ACC_Z,GYRO_X,GYRO_Y,GYRO_Z,EOG_L,EOG_R,EOG_H,EOG_V` |
| Quaternion | `ARTIFACT,NUM,DATE,QUATERNION_W,QUATERNION_X,QUATERNION_Y,QUATERNION_Z` |

先頭には計測条件を記したヘッダが付きます。

```
// Data mode  : Full
// Transmission speed  : 100Hz
// Acceleration sensor's range  : 2g
// Gyroscope sensor's range  : 250dps
//
//ARTIFACT,NUM,DATE,ACC_X,ACC_Y,ACC_Z,GYRO_X,GYRO_Y,GYRO_Z,EOG_L,EOG_R,EOG_H,EOG_V
,1,2026/08/27 04:27:10.21,-200,-3415,-2284,178,-343,763,2007,2001,6,-2004
```

- `DATE` は **UTC** で記録されます。チャートの表示だけをローカルタイムに切り替えたい場合は `Setting` の `Time Display` を使ってください（記録される値は常に UTC のままです）。
- `NUM` はデバイス側カウンタの差分を積算した単調増加値です。取りこぼしがあると番号が飛びます。
- `ARTIFACT` には `Free Marking` やチャートのクリックで付けた印が入ります。
- 100Hz なら 100 行、50Hz なら 50 行たまるごとに書き出します。1 行ずつ開閉すると取りこぼすためで、計測停止時に残りをまとめて書き出します。

## File Replay（記録した CSV を再生する）

デバイスが手元になくても、記録済みの CSV を読み込んで計測時と同じ画面で確認できます。

### 再生を始める

1. `File Replay` をクリックします。
1. ファイル選択ダイアログで CSV を選びます。
1. **選んだ時点で再生が始まります**（Start ボタンはありません）。
    - `Select Mode` などがファイルの記録条件に切り替わり、`State :` にファイル名が出ます。

読み込めるのは本アプリ形式（Mac 版・Android 版と共通）の CSV です。旧 Windows 版が出力した `// Accelerometer sensor's range` 表記や `BattLv` 列付きの CSV も読めます。

### 再生中の操作

| 操作 | 内容 |
|---|---|
| スライダー | 再生位置の変更。離した時点でシークします |
| `<<` / `>>` | 横軸レンジ − 2 秒ぶん戻る／進む。前後のウィンドウが 2 秒重なって見えます |
| `x1` | 再生速度を x1 → x2 → x4 → x8 → x16 → x32 → x1 と切り替えます |
| `Pause` / `Resume` | 一時停止と再開 |
| `Record` | 再生を止めます。グラフはそのまま残ります |
| `Disconnect` | 再生セッションを終了し、読み込んだデータを破棄します |

- チャートの横軸は CSV の `DATE` 列（UTC）を基準に描くので、記録時の時刻がそのまま出ます。
- シークやレンジ変更のあとは、右端から徐々に埋めるのではなく、ウィンドウ幅ぶんを先読みして満たした状態で再開します。
- `ARTIFACT` 列に値がある行は、チャート上に縦線とラベルで重ねて表示されます。
- **再生速度を上げても間引きはしません。** 1 秒あたりに流す行数を増やしているだけなので、x32 でも波形の細部（ハム成分など）は残ります。

再生中もチャートをクリックして Artifact を付けられます（[Artifact（アーチファクト）を付ける](#artifact-アーチファクト-を付ける) 参照）。

### ドラッグして区間を切り出す

![区間切り出しダイアログ](/images/pc_logger_cut.png)

再生中にチャート上を横方向へドラッグすると、選択範囲が反転表示されます。マウスを離すとファイル名の入力ダイアログが出て、再生元と同じフォルダにその区間だけの CSV を書き出せます。

- ヘッダはそのままコピーされるので、切り出した CSV もそのまま `File Replay` で開けます。
- 同名のファイルが既にある場合は、ダイアログを閉じずにエラーを表示します。

## Setting（設定）

メニューバーの `Setting (S)` から開きます。

![設定画面](/images/pc_logger_setting.png)

| 項目 | 内容 |
|---|---|
| `Save File Path` | CSV の保存先。既定は `ドキュメント\JINS\MEME_Academic` |
| `Acc Offset X / Y / Z` | チャート表示にのみ加算するオフセット。**CSV に記録される値は変わりません** |
| `Save Dialog` | 計測終了後に保存先を選び直すダイアログを表示します |
| `Time Display` | チャートの横軸をローカルタイムで表示します（記録は常に UTC） |
| `TCP Output` | 計測データを TCP で外部へ流します |
| `Local Port` | 待ち受けポート。既定は `88` |

設定内容は次回起動時に復元されます。保存先は Windows が `%APPDATA%\JINS\MEME_Academic\settings.json`、macOS はアプリの環境設定（`UserDefaults`）です。

## TCP 出力

`TCP Output` を有効にすると、指定ポートで待ち受けを開始します（左カラムの `Status :` が `Listen` になります）。クライアントが 1 台つながると `Accepted` に変わり、CSV とまったく同じ書式のヘッダと行が流れます。

- 計測開始より前に接続していた場合は、計測開始時にヘッダが送られます。
- 同時に受け付けるクライアントは **1 台まで** です。

```
$ ncat 127.0.0.1 88
// Data mode  : Full
// Transmission speed  : 100Hz
// Acceleration sensor's range  : 2g
// Gyroscope sensor's range  : 250dps
//
//ARTIFACT,NUM,DATE,ACC_X,ACC_Y,ACC_Z,GYRO_X,GYRO_Y,GYRO_Z,EOG_L,EOG_R,EOG_H,EOG_V
,1,2026/08/27 04:27:10.21,-200,-3415,-2284,178,-343,763,2007,2001,6,-2004
```

### Python での受信サンプル

```python [tcp_client.py]
import socket

target_ip = "127.0.0.1"   # ロガーが動いているPCのIPアドレス
target_port = 88          # Setting の Local Port と合わせる
buffer_size = 4096

tcp_client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
tcp_client.connect((target_ip, target_port))

is_end = False
while not is_end:
    response = tcp_client.recv(buffer_size)
    if response == b"":
        is_end = True
    print("[*]Received a response : {}".format(response))

tcp_client.close()
```

## バージョンを確認する

メニューバーの `Version (V)` から確認できます。問い合わせの際はこのバージョンをお知らせください。

![バージョン情報](/images/pc_logger_version.png)

## うまく動かないとき

| 症状 | 対処 |
|---|---|
| `Scan` しても何も出ない | ES_R が充電されていてペアリングモードになっているか、パソコンの Bluetooth が ON になっているかを確認してください |
| 他のアプリが掴んでいる | ES_R は同時に 1 台のホストとしか接続できません。スマートフォンのアプリなどが接続中なら切断してください |
| 接続はできるが値が来ない | Windows の「設定 > Bluetooth とデバイス」から ES_R を一度削除し、再度スキャンし直すと GATT のキャッシュが解消することがあります |
| 取得率が上がらない | パソコンと ES_R の距離を近づける、`Trans Speed` を 50Hz に下げる、2.4GHz 帯の混雑を避ける |
| インストール時にランタイムの導入に失敗する | インターネットに接続できない環境では自動導入ができません。[.NET 10 Desktop Runtime](https://dotnet.microsoft.com/download/dotnet/10.0) を手動で導入してから、もう一度インストーラーを実行してください |
