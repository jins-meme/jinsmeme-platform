---
outline: deep
---

![](/images/title.png)

## 製品比較

| 項目 | 通常版 | アカデミック版 (ES-R) |
|:---|:---|:---|
| 機種の概要 | JINS MEME 標準版。アプリや内部処理で意味付けされたデータを取得。一般的な実験用途に適す。 | 粒度の細かいEOGや6軸センサーの生データを取得可能。研究用途向け。|
| 転送周期 | 20Hz（60秒ごとのサマリ等は別） | 50/100Hz（EOGや全データ種は最大100Hz、EOGは200Hz対応とする記載あり） |
| 対応ソフトウェア | 通常版 Logger（iOS/Android）、SDK（iOS/Android/Nodejs）※20Hz・60秒間隔データのみ（問い合わせ対応） | Academic(ES-R)版 Logger（Windows/MacOS/Android）、SDK（ES_R-Development-Kit リポジトリ） |
| データ種類（主なもの） | 20Hz リアルタイムデータ(currentData): まばたき、視線移動、加速度、角度<br/>15秒間隔 ロジック指標(logicIndexData): 集中・落ち着き等<br/>60秒間隔 サマリ(summaryData) | Standard Mode: EOG電位シグナル、加速度（1行に2データ）<br/>Full Mode: EOG、加速度、角速度<br/>Quaternion データ: Quaternion（姿勢表現） |
| データ変換 | — | アカデミック版のデータを通常版のデータに変換するツールは提供していない |
| バッテリー | リチャージブルリチウムイオンバッテリー内蔵 | リチャージブルリチウムイオンバッテリー内蔵 |
| 充電時間 | 約2.5時間 | 約2.5時間 |
| 使用時間（連続） | アクティブ（ジャイロなし）：最大約24時間<br/>アクティブ（ジャイロあり）：最大約12時間<br/>スリーブモード：約2週間 | Quartanion mode: 約9h<br/>Full mode: 約11h<br/>Standard mode: 約15h |
| 質量 | 約32g（度なしUVカットレンズの場合） | 約32g（度なしUVカットレンズの場合） |
| 材質 | プラスチック(core/crip)、SUS316L(core)、TR-90(frame) | プラスチック(core/crip)、SUS316L(core)、TR-90(frame) |
| センサー | 3点式眼電位センサー（Resolusion: 12bit, Ideal: 2.5mV）、3軸加速度、3軸ジャイロ | 同上（アカデミック版は生データ・高サンプリングのEOGや6軸データ取得が可能） |
| データ通信 | Bluetooth Low Energy | Bluetooth Low Energy |
| 外部インターフェース | micro USB端子 | micro USB端子 |
| 使用環境条件 | 温度：0～40℃、湿度：10～90% RH（結露なきこと） | 温度：0～40℃、湿度：10～90% RH（結露なきこと） |
| フレームの種類 | Wellington, Square, Oval, Boston 等のカラーバリエーション（画像あり） | 同等のフレーム種類（画像は共通で掲載） |
| 備考 | 実験用の統計・指標データが中心で、アプリ連携が容易 | 研究向けの高解像度生データ取得が可能。SDKとリポジトリでの開発が前提。 |
