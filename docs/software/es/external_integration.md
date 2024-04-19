---
outline: deep
---

# 外部連携

Google DriveもしくはWebsocketを利用し、データを外部に連携することが可能です。

## Google Drive 連携

### 設定方法

- 画面下部の設定ボタンをタップし、GoogleDrive連携のボタンスイッチをタップします。
- (iOSのみ)外部サイトへのアクセス許可を求められるので**続ける**をタップします。
- **Googleアカウントを選択**、もしくは**アカウントを追加**を実施し、連携したいアカウントを選択します。
- 権限のスコープの詳細が表示されるのでチェックを入れ、Continueをタップします。Loggerではマイドライブの直下にフォルダを作成しそこにCSVを書き込みます。それ以外のフォルダへのアクセスはできないようになっています。
- 設定完了すると、CSVファイル生成時に以下のフォルダに自動連携されます。
    - iOS: マイドライブ/JINS_MEME_LOGGER
    - Android: マイドライブ/JINS_MEME_LOGGER_ANDROID
- 保存時にネットワークが不通の状態では連携されませんので、連携ボタンをタップするか手動でファイルを取り出してください。

![gdrive_settings](/images/gdrive_settings.png)

## WebSocket連携

データを受信する側をWebSocket Serverとして、Logger(WebSocket Client)からリアルタイムにデータ連携が可能です。

### 手動設定

入力欄に設定名、IPアドレス、ポートを入力し、受信したいデータタイプを選びます。

![wss_settings](/images/wss_settings.png)

### QRコードからの設定情報読み込み

QRコードから簡便に設定を行うことが可能です。**wss://192.168.0.1:5000** のようにwss://{IPアドレス}:{ポート}の形式の文字列を表すQRコードを読み込ませると自動的にIPアドレスとポートをセットすることが可能です。設定名と受信したいデータタイプはセットしてください。

### データの受信

- WebSocket Serverを起動します
- Loggerの設定画面から追加するか、既存の設定をタップし、接続に成功するとスイッチがオンになります
- 接続している限り、指定したデータタイプが1行毎にJSON文字列化した状態でメッセージングされ続けます
 
#### heartbeatメッセージの除外

アプリ内で使用しているライブラリの仕様上、heartbeatメッセージ(死活監視用メッセージ)を送信することがあります。Server側では予期しないメッセージを受信することになりますので、エラーにならないよう以下のように該当文字列("heartbeat")があった場合除外する処理を入れてください。

```
if(message.indexOf("heartbeat") === -1){
  //ここに実際の処理
  //const obj = JSON.parse(messeage);
}
```

#### Node.js による WebSocket Serverサンプル

以下はNode.jsでwsパッケージを利用しLoggerからデータを受け取るサンプルスクリプトになります。このスクリプトを動作しているマシンのIPアドレスのポート5000にLoggerから接続します。

```
const server = require("ws").Server;
const ws_server = new server({ port: 5000 });

ws_server.on("connection", ws => {
  console.log("connected from client");
  ws.on('message',function(message){
    if(message.indexOf("heartbeat") === -1){
      //メッセージを出力
      console.log(message);

      //実際の処理する場合はparseして処理していきます
      //const obj = JSON.parse(messeage);
    }
  });
});
```
