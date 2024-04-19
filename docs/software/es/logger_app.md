---
outline: deep
---

# データ取得手順

ロガーアプリはJINS MEMEでのデータ取得に特化したスマートフォン向けアプリです。利用規約は[JINS MEME 利用規約](https://jinsmeme.com/term)に準じます。

## インストール

## 測定に関する注意

- 起動初回時には位置情報(Bluetooth)の許可、モーションアクティビティ情報の取得許可(iOSのみ)を求められますので、許可してください。
- 正常着用時以外のデータは正しく測定できませんので、正しくメガネを装着してください。
- Androidアプリはバックグラウンド時に自動的に直近の使用していない(約5〜30分)アプリをOS側で落とす機能により計測が途切れます。長時間測定の際は画面をオンにし続ける設定にし、フォアグラウンド（アプリが表示されている状態）を保ってください。

## 測定ボタンによる測定

1. JINS MEME を充分に充電してください
2. 接続画面でJINS MEMEを検索※
3. 接続したいJINS MEMEをタップし接続完了（アクティベートされ赤文字で表示される）すると、画面下部**ロガー**ボタンをタップすると現在のデータが表示されます
4. (オプション)ジャイロセンサーを使用する場合は、**設定**でジャイロを取得をオンにしてください
5. 測定の開始時間になったらロガータブ下部の**記録**をタップ(タップした時点からのデータがCSVに残ります) ※自動保存では不要です
6. 測定の終了時間になったら**記録終了**をタップ(タップした時点までのデータがCSVに残ります) ※自動保存では不要です
7. ファイルを取り出したら、JINS MEMEとの接続を切る（接続画面で接続しているJINS MEMEをタップし、モーダル内の切断するをタップ）・アプリを落とす・JINS MEMEを逆さまにしてスリープさせる、などで測定を終了させます。

## 自動保存による測定

- 設定タブ→自動保存をオンにすると、指定した時間毎にファイルが区切られ自動的に保存されるようになります（上記の**記録をタップ**〜**記録終了をタップ**が不要になります）。
- 設定タブ→保存周期で、保存する間隔を指定できます。ファイル名の拡張子の前に「_m5(数字は保存間隔)」が付与されます。

## ファイルの種類と取り出し方法

- **(file_id)_currentData.csv**: 20Hzデータ(currentData)
- **(file_id)_logicIndexData.csv**: 15秒間隔データ(logicIndexData)
- **(file_id)_summaryData.csv**: 60秒間隔データ(summaryData)
- **(file_id)_fastHeadMotion.csv**: 高速頭部運動データ(fastHeadMotion)
- **(file_id)_slowHeadMotion.csv**: 低速頭部運動データ(slowHeadTilting, slowHeadRotation)
- **(file_id)_motionActivity.csv**: (iOSのみ)スマートフォンで取得されたmotion activity分類(データ内容の詳細は[公式ドキュメント](https://developer.apple.com/documentation/coremotion/cmmotionactivity)をご覧ください)
- **(file_id)_location.csv**: (iOSのみ)スマートフォンで取得された緯度経度データ

file_idはiOS/Androidで以下のようになります。

- iOS
    - `{日付 8文字}-{時刻 6文字}_{固有機体ID 12文字}({UDID 頭8文字})`
    - 例: 20210719-081859_CDC007922D4F(00DF874C)_currentData.csv
- Android
    - `{日付 8文字}-{時刻 6文字}_{固有機体ID 12文字}`
    - 例: 20210719-081859_CDC007922D4F_currentData.csv

※iOSでのUDIDに関して、同じJINS MEME機体を使用していても、繋げるスマートフォンの端末が異なる場合は別のUDIDになります。これはOS側の「プライバシーを考慮したトラッキング対策のため、端末別に別のUDIDとして見えるようにする」という仕様によるものです。

### iOSのファイル取得

- アプリ内で取得
    - 画面下部**CSV**をタップするとファイル一覧が表示されるのでファイルをタップし詳細を表示し、**他のアプリで開く**をタップすると、ファイルの転送先が選択できます
- Windowsで取得
    - iTunesからiPhoneに接続しファイル共有からLoggerアプリのストレージ領域（Loggerアプリ→JINS MEME DEVELOPERS）にアクセスすると抜き出しができます。
- Macで取得
    - Macの場合、iPhoneを接続してLoggerアプリのストレージ領域（Loggerアプリ→JINS MEME DEVELOPERS）にアクセスすると抜き出しができます。

![itunes_download](/images/itunes_download.png)

### Androidのファイル取得

(内部ストレージ →) Download以下にファイル種毎にフォルダが切られ保存されています。ファイラーアプリ(スマホ内のファイルを操作するアプリ、Google filesやES File Explorerなど)を使用し測定したファイルを取り出してください。