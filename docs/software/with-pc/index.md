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

[こちら](https://github.com/jins-meme/ES_R-Development-Kit/releases) からファイルをダウンロードしてください。

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

![メイン画面（macOS・計測中）](/images/pc_logger_webview_main.png)

左のカラムに接続と計測の操作がまとまっていて、右側がグラフ画面です。Windows 版と macOS 版は同じ構成です（上の画像は macOS 版）。

| 場所 | 内容 |
|---|---|
| `Setting (S)`（Windows はメニューバー）/ `Settings`（macOS は左上のボタン） | 保存先や TCP 出力などの設定画面を開きます |
| `Version (V)`（Windows のメニューバー） | アプリのバージョン情報を表示します |
| 左カラム上部 | アプリのバージョンと、接続中の ES_R のファームウェアバージョン |
| `Scan`（macOS は `Start Scan`）/ `File Replay` / `Connect` | デバイスの検索・接続、記録済み CSV の再生 |
| `State :` | 接続状態（`Disconnected` / `Connected` / 再生中はファイル名） |
| `Select Mode` ほか | 計測条件の設定 |
| `Start Measurement` / `Free Marking` | 計測の開始・停止、アーチファクトの付与 |
| `Save Artifacts` | 再生中だけ表示されます。グラフで付けたアーチファクトを再生中の CSV へ書き戻します |
| `Success rate` / `Communication` | データ受信の成功率と直近の通信率 |
| `IP address` / `Port` / `Status` | TCP 出力の状態 |
| グラフ画面 | 表示幅の切り替え、再生の操作、波形のグラフ（[グラフを操作する](#グラフを操作する) 参照） |

グラフ画面には、そのモードでデータのあるグラフだけが並びます。

| モード | 表示されるグラフ |
|---|---|
| `Full` | EOG、加速度（Accelerometer）、ジャイロ（Gyroscope） |
| `Standard` | EOG、加速度 |
| `Quaternion` | なし（「No charts for this mode」と表示されます） |

## 接続する

1. ES_R を充電し、メガネの上下を正しい位置にした状態でペアリングモードにします。
1. `Scan` をクリックします。見つかったデバイスが `ESRG2_0 (mac_address)` の形でコンボボックスに並びます。
    - 1 回で見つからないことがあります。その場合はもう一度 `Scan` してください。
1. 接続したいデバイスを選び、`Connect` をクリックします。
1. 接続されると `State :` が `Connected` になり、ES_R のファームウェアバージョンが表示されます。

接続を終えるときは `Disconnect` をクリックします。

::: details Shelf mode（保管モード）へ移行する
接続中かつ計測していないときに `Disconnect` を **5 秒押したまま**にすると確認ダイアログが出て、`Yes` を選ぶと ES_R が Shelf mode に移行します。Shelf mode はペアリング機能を止めて消費電力を抑えるモードで、出荷前や長期保管の前に使います。**復帰は充電のみで、アプリからは戻せません。**
:::

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
| `Standard` | 眼電位センサー、加速度センサー | あり（EOG は 1 パケットに入っている 2 サンプルを両方描画） |
| `Full` | 眼電位センサー、加速度センサー、ジャイロセンサー | あり |
| `Quaternion` | クォータニオン出力 | **なし**（波形に出せる値がないため「No charts for this mode」と表示されます） |

### 計測を開始・停止する

- `Start Measurement` をクリックすると、計測とCSV 記録が始まります。
- 計測中は `Stop Measurement` に変わります。もう一度クリックすると停止し、CSV が確定します。
- 計測中は `Select Mode` などの設定を変更できません。

### Artifact（アーチファクト）を付ける

被験者の動作や外的イベントの位置を、後から探せるように印を付けられます。付け方は 2 通りあります。

**`Free Marking` ボタン** — クリックすると、その直後の 1 行の `ARTIFACT` 列に `X` が入り、グラフにも印が表示されます。**計測中のみ**有効です（Windows では計測中以外はボタンが無効になり、macOS では計測中だけボタンが現れます）。

**グラフをクリック** — ドラッグせずにクリックすると、グラフ画面の下に入力欄が開き、クリックした位置の行に任意の文字列を入れられます。空のまま `Add` を押すと `X` が入ります。**計測中と再生中**のどちらでも使えます。

![Artifact の入力欄](/images/pc_logger_webview_artifact.png)

グラフで付けた印はその場でグラフに縦線とラベルで表示され、CSV へは次のタイミングでまとめて書き戻されます。

| 状況 | 書き戻すタイミング | 書き戻し先 |
|---|---|---|
| 計測中 | `Stop Measurement` または切断時 | その計測で保存した CSV |
| 再生中 | `Save Artifacts` または `Disconnect` 時 | 再生元の CSV |

- 入力できるのは 64 文字までです。カンマと改行は列が崩れないよう空白へ置き換えられます。
- `=` `+` `-` `@` で始まる文字列は入力できません（表計算ソフトで開いたときに数式として読まれるのを防ぐため）。
- 同じ行に何度付けても、最後に入力した値で上書きされます。
- `Free Marking` の `X` は受信したその場で CSV へ書き込まれるので、書き戻しの対象にはなりません。
- 書き戻しは一時ファイルへ書いてから置き換えるので、途中で失敗しても元の CSV は壊れません。

### 通信状態を確認する

| 表示 | 内容 |
|---|---|
| `Success rate` | 計測開始からの累積のデータ取得率 |
| `Communication` | 直近 1 秒間のデータ取得率 |

数値が大きく下がる場合は、パソコンと ES_R の距離を近づける、`Trans Speed` を 50Hz に下げる、といった対処を試してください。

## グラフを操作する

![再生中の画面（macOS）](/images/pc_logger_webview_replay.png)

グラフは共通の時間軸で並び、横方向（時間）の操作はすべてのグラフに同時に効きます。波形は**間引かずに全サンプルを描いています**（ハム成分を残して、電極の状態を目で判断できるようにするため）。

| 操作 | 内容 |
|---|---|
| `Window` の `60s` / `30s` / `15s` / `10s` | 横軸（時間）の表示幅を切り替えます（既定は 30 秒） |
| Ctrl（macOS は ⌘）+ ホイール、トラックパッドのピンチ | 横軸（時間）の拡大・縮小 |
| グラフ上のドラッグ、Shift + ホイール、`◀◀` / `▶▶` | 前後の時間へ移動します（`◀◀` / `▶▶` は表示幅の半分ずつ） |
| `LIVE` / `Back to LIVE` | 計測中は直近 30 分まで遡れます。過去を見ているときは `Back to LIVE` になり、押すと最新の位置へ戻ります |
| グラフごとの `−` / `+` | 縦軸（振幅）の縮小・拡大。縦軸の上でホイールしても拡大・縮小できます |
| 縦軸のドラッグ | 縦方向へ移動します |
| `Auto` | 見えている波形に合わせて縦軸を自動で合わせ続けます（もう一度押すと解除） |
| `↺` | そのグラフの縦軸を元に戻します。操作バーの `Reset view` は時間と縦軸をすべて元に戻します |
| タイトル左の `∧` / `∨` | グラフを畳む・開く |
| グラフのクリック（ドラッグしない） | Artifact を付けます（[Artifact（アーチファクト）を付ける](#artifact-アーチファクト-を付ける) 参照） |

EOG のグラフには `Vv`（縦方向）と `Vh`（横方向）の眼電位を µV で、加速度は G、ジャイロは dps で表示します。

## 記録される CSV

### 保存場所とファイル名

| OS | 既定の保存先 |
|---|---|
| Windows | `ドキュメント\JINS\MEME_Academic` |
| macOS | `~/Documents/JINS/MEME_Academic` |

保存先は `Setting` の `Save File Path` で変更できます。ファイル名はどちらも `<MACアドレス>_<UTC日時>.csv.gz` です。

`Setting` の `Save Dialog` を有効にしておくと、計測終了後に保存先を選び直すダイアログが出ます。

### 圧縮形式（`.csv.gz`）

計測データは **gzip 圧縮された CSV（`.csv.gz`）** で保存されます（`Setting` の `Save Format` が既定で有効）。中身は従来の CSV とまったく同じで、圧縮されているぶんファイルサイズが小さくなります。

従来どおり非圧縮の `.csv` で保存したい場合は、`Setting` の `Save Format` のチェックを外してください。ファイル名は `<MACアドレス>_<UTC日時>.csv` になります。

`.csv.gz` は一般的な gzip 形式なので、特別なツールは要りません。

| 用途 | 方法 |
|---|---|
| 展開する | 7-Zip、The Unarchiver などの解凍ソフト。macOS はダブルクリックでも展開できます |
| コマンドライン | `gzip -d <ファイル名>.csv.gz` |
| Python (pandas) | `pd.read_csv("data.csv.gz")` — 拡張子から自動で展開されます |

::: tip 計測が途中で切れても読めます
圧縮は一定行ごとの書き出し単位で完結させながら追記していく方式です。そのため、アプリが強制終了したり BLE が切断されたりしても、その時点までのファイルがそのまま開けます。
:::

### 列の構成

書式は Mac 版・Android 版と共通です（以下は展開したあとの中身です）。モードによって列が変わります。

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

- `DATE` は **UTC** で記録されます。グラフの表示だけをローカルタイムに切り替えたい場合は `Setting` の `Time Display` を使ってください（記録される値は常に UTC のままです）。
- `NUM` はデバイス側カウンタの差分を積算した単調増加値です。取りこぼしがあると番号が飛びます。
- `ARTIFACT` には `Free Marking` やグラフのクリックで付けた印が入ります。
- 100Hz なら 100 行、50Hz なら 50 行たまるごとに書き出します。1 行ずつ開閉すると取りこぼすためで、計測停止時に残りをまとめて書き出します。`.csv.gz` の場合はこの書き出し 1 回ぶんが圧縮の単位になります。

## File Replay（記録した CSV を再生する）

デバイスが手元になくても、記録済みの CSV を読み込んで計測時と同じ画面で確認できます。

### 再生を始める

1. `File Replay` をクリックします。
1. ファイル選択ダイアログでファイルを選びます。`.csv.gz`（圧縮）と `.csv`（非圧縮）のどちらでも構いません。**あらかじめ展開しておく必要はありません。**
1. **選んだ時点で再生が始まります**（Start ボタンはありません）。
    - `Select Mode` などがファイルの記録条件に切り替わり、`State :` にファイル名が出ます。

読み込めるのは本アプリ形式（Mac 版・Android 版と共通）の CSV です。旧 Windows 版が出力した `// Accelerometer sensor's range` 表記や `BattLv` 列付きの CSV も読めます。

圧縮されているかどうかは拡張子ではなくファイルの中身で判定するので、`.csv.gz` を `.csv` に付け替えたファイルもそのまま開けます。

Windows では、エクスプローラーで `.csv` / `.csv.gz` を右クリックして「プログラムから開く」からも起動できます。

### 再生中の操作

再生の操作は、グラフ画面の上の操作バーにあります。

| 操作 | 内容 |
|---|---|
| 再生位置のスライダー | 再生位置の変更。右に現在の時刻とファイル末尾の時刻が出ます |
| `▶` / `⏸` | 再生と一時停止 |
| `◀◀` / `▶▶` | 表示幅の半分ずつ戻る／進む |
| `x1` | 再生速度を x1 / x2 / x4 / x8 / x16 / x32 から選びます |
| `Save Artifacts`（左カラム） | 再生中に付けた Artifact を再生元の CSV へ書き戻します |
| `Disconnect`（左カラム） | 再生を終了します。付けた Artifact はこのときにも書き戻されます |

- グラフの横軸は CSV の `DATE` 列（UTC）を基準に描くので、記録時の時刻がそのまま出ます（`Time Display` を有効にするとローカルタイム表示）。
- `ARTIFACT` 列に値がある行は、グラフ上に縦線とラベルで重ねて表示されます。
- **再生速度を上げても間引きはしません。** x32 でも波形の細部（ハム成分など）は残ります。

再生中もグラフをクリックして Artifact を付けられます（[Artifact（アーチファクト）を付ける](#artifact-アーチファクト-を付ける) 参照）。

::: tip 区間の切り出しについて
以前のバージョンにあった「ドラッグして区間を切り出す」機能は廃止しました。区間の始まりと終わりに Artifact を付けて、解析側で切り出してください。
:::

## Setting（設定）

Windows はメニューバーの `Setting (S)`、macOS は左上の `Settings` ボタンから開きます。

![設定画面（macOS）](/images/pc_logger_webview_setting.png)

| 項目 | 内容 |
|---|---|
| `Save File Path` | CSV の保存先。既定は Windows が `ドキュメント\JINS\MEME_Academic`、macOS が `~/Documents/JINS/MEME_Academic`。macOS は `Select` で選び直し、`Open Folder` で保存先を Finder で開けます |
| `Acc Offset X / Y / Z` | グラフ表示にのみ加算するオフセット。**CSV に記録される値は変わりません** |
| `Save Format` | 計測データを gzip 圧縮して `.csv.gz` で保存します（**既定で有効**）。外すと `.csv` になります。読み込みは設定に関係なく両方に対応します |
| `Save Dialog` | 計測終了後に保存先を選び直すダイアログを表示します |
| `Time Display` | グラフの横軸をローカルタイムで表示します（記録は常に UTC） |
| `TCP Output` | 計測データを TCP で外部へ流します |
| `Local Port` | 待ち受けポート。既定は `88` |

設定内容は次回起動時に復元されます。保存先は Windows が `%APPDATA%\JINS\MEME_Academic\settings.json`、macOS はアプリの環境設定（`UserDefaults`）です。

## TCP 出力

`TCP Output` を有効にすると、指定ポートで待ち受けを開始します（左カラムの `Status :` が `Listen` になります）。クライアントが 1 台つながると `Accepted` に変わり、CSV とまったく同じ書式のヘッダと行が流れます。

- 計測開始より前に接続していた場合は、計測開始時にヘッダが送られます。
- 同時に受け付けるクライアントは **1 台まで** です。
- 流れるデータは **常に非圧縮のテキスト** です。`Save Format` の設定は保存するファイルにだけ効き、TCP 出力には影響しません。

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

左カラムの上部に、アプリのバージョンと接続中の ES_R のファームウェアバージョン（`MEME Version`）が表示されます。Windows はメニューバーの `Version (V)` からも確認できます。問い合わせの際はこのバージョンをお知らせください。

## うまく動かないとき

| 症状 | 対処 |
|---|---|
| `Scan` しても何も出ない | ES_R が充電されていてペアリングモードになっているか、パソコンの Bluetooth が ON になっているかを確認してください |
| 他のアプリが掴んでいる | ES_R は同時に 1 台のホストとしか接続できません。スマートフォンのアプリなどが接続中なら切断してください |
| 接続はできるが値が来ない | Windows の「設定 > Bluetooth とデバイス」から ES_R を一度削除し、再度スキャンし直すと GATT のキャッシュが解消することがあります |
| 取得率が上がらない | パソコンと ES_R の距離を近づける、`Trans Speed` を 50Hz に下げる、2.4GHz 帯の混雑を避ける |
| グラフが表示されない（Windows） | グラフ画面には Microsoft Edge WebView2 Runtime を使います。Windows 11 には最初から入っていますが、削除されている場合はグラフの場所に表示される案内に従って導入し、アプリを起動し直してください |
| インストール時にランタイムの導入に失敗する | インターネットに接続できない環境では自動導入ができません。[.NET 10 Desktop Runtime](https://dotnet.microsoft.com/download/dotnet/10.0) を手動で導入してから、もう一度インストーラーを実行してください |
