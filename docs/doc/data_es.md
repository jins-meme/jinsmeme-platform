# 通常版Logger データ定義

## モーション指標の軸定義

![](/images/axisdef.png)

角度に関してはセンサーの特性上ドリフト（値が一定速度で変化すること）、ハンプ（値に小さい段差が発生すること）が起こります。

## 静止指標と歩行指標

- JINS MEMEで測定できるデータのうち、 **静止指標** とあるものは、歩行・メガネを手で触っている・咀嚼などがない静止時のみに有効な指標となります。前記以外の条件で測定した時はノイズフラグとして検出されたり、不正確な値を出力したり、検出されなかったりしますのでご注意ください。summaryDataにおいては疑わしいシグナルが除外されるよう、クレンジングがかけられています。
- JINS MEMEで測定できるデータのうち、 **歩行指標** とあるものは、歩いている時に取得できるデータになります。歩いている以外の振動・動作パターンでは正確に測定できませんのでご注意ください。

## 20Hzデータ(currentData)

約20Hzでデータを取得でき、動きの把握やコントローラーなど精緻なデータの即時取得・分析に適したモードです。このデータはJINS MEMEとスマートフォンがBluetooth接続している時のみ生成されます。

| iOS/Android/Nodejs/Logger | 型(iOS/Android) | 型(Nodejs) | 説明 | 値の範囲 |
|:---|:---:|:---:|:---|:---:|
| blinkSpeed `静止指標` | Int | Number | まばたき速度、閉眼時間(mSec) | 0-400(通常90−180付近) |
| blinkStrength `静止指標` | Int | Number | まばたき強度(uV-equiv) | 0-1000(通常30−150付近) |
| eyeMoveUp `静止指標` | Int | Number | 視線が上に動いた時のイベント | 0: 検知無し<br/>1: 極小-7: 特大 |
| eyeMoveDown `静止指標` | Int | Number | 視線が下に動いた時のイベント | 0: 検知無し<br/>1: 極小-7: 特大 |
| eyeMoveLeft `静止指標` | Int | Number | 視線が左に動いた時のイベント | 0: 検知無し<br/>1: 極小-7: 特大 |
| eyeMoveRight `静止指標` | Int | Number | 視線が右に動いた時のイベント | 0: 検知無し<br/>1: 極小-7: 特大 |
| roll | Float | Number | 姿勢角のロール成分（左右傾き）を示す度 | -180.00 - 180.00 |
| pitch | Float | Number | 姿勢角のピッチ成分（前後傾き）を示す度 | -180.00 - 180.00 |
| yaw | Float | Number | 姿勢角のヨー成分（横回転）を示す度 | 0.00 - 360.00 |
| accX | Float | Number | 加速度のX軸成分（左右）、1G=16 | -128(-8G) - 127(7.9375G) |
| accY | Float | Number | 加速度のY軸成分（前後）、1G=16 | -128(-8G) - 127(7.9375G) |
| accZ | Float | Number | 加速度のZ軸成分（上下）、1G=16 | -128(-8G) - 127(7.9375G) |
| walking(isWalking) `歩行指標` | boolean | Number | かかとが地面についた時の一歩の検知(検知後0.15~0.25s後にフラグ) | 0/false: 検知無し<br/>1/true: 検知有り |
| noiseStatus | boolean | Number | 眼電位電極のノイズ状況を表す整数値 | 0/false: ノイズ無し<br/>1/true: ノイズ有り |
| fitError | Int | Number | JINS MEMEが実際に装着されているかどうか、揺れで5秒に1回判定 | 0: 装着中<br />1: 非装着 |
| powerLeft | Int | Number | 電池残量を表す整数値 | 0: 充電中<br />1: 空-5: 満充電 |
| sequenceNumber(seqNo) | Int | Number | 0-255までの循環連番整数 | 0-255 |

※Nodejsはnodejs-sdkの型になります(nodejsでは内部構造の問題でboolean型が使用されないので注意)

## 15秒間隔データ(logicIndexData)

15秒間隔データは生体指標を出力する一番粒度の細かいデータです。このデータはJINS MEMEとスマートフォンがBluetooth接続している時のみ生成されます。
※サブアプリ動作時、規格化値、サブ指標、RTアルゴリズム動作時、の記載がある指標は記録されないことがあります。

|Logger|API|型(API/CSV)|説明|値の範囲|
|:--|:--|:--|:--|:--:|
|date|date|String|計測日時|2000-01-01T00:00:00 - 2099-12-31T23:59:59|
|stepCount`歩行指標`|stp|Number(int)|歩数| 0-255 |
|stepCadence`歩行指標`|cad|Number(float)|ケイデンス(ピッチ)| 0-255 |
|isStill|isl|Boolean / Number(int)|静止（装着してない）判定| true: 非装着（静止） false: 装着中（非静止）|
|noiseTime|nis\_time|Number(float)|ノイズ時間|0.00 - 15.00|
|isValid|vld|Boolean / Number(int)|静止状態のデータ有効性（ノイズ3秒以下かつ歩数5歩以下）| true: 有効 false: 無効|
|xMean|tl\_xav|Number(float)|傾き平均X (度) | -180.00-180.00 |
|xSD|tl\_xsd|Number(float)|傾き標準偏差X (度) | 0-655.36 |
|yMean|tl\_yav|Number(float)|傾き平均Y (度) | -180.00-180.00 |
|ySD|tl\_ysd|Number(float)|傾き標準偏差Y (度) | 0-655.36 |
|pitchOnewayCount|hm\_po|Number(int)|頭部運動縦回数| 0-255 |
|pitchRoundCount|hm\_pr|Number(int)|ゆっくりな首の連続傾斜回数（前後）| 0-255 |
|yawOnewayCount|hm\_yo|Number(int)|頭部運動横回数| 0-255 |
|yawRoundCount|hm\_yr|Number(int)|ゆっくりな首の連続傾斜回数（左右）| 0-255 |
|xRightStepAmplitude`歩行指標`|sa\_xr|Number(float)|歩行振動X（cm,右足）| 0.00-16.00 |
|xLeftStepAmplitude`歩行指標`|sa\_xl|Number(float)|歩行振動X（cm,左足）| 0.00-16.00 |
|yRightStepAmplitude`歩行指標`|sa\_yr|Number(float)|歩行振動Y（cm,右足）| 0.00-16.00 |
|yLeftStepAmplitude`歩行指標`|sa\_yl|Number(float)|歩行振動Y（cm,左足）| 0.00-16.00 |
|zRightStepAmplitude`歩行指標`|sa\_zr|Number(float)|歩行振動Z（cm,右足）| 0.00-16.00 |
|zLeftStepAmplitude`歩行指標`|sa\_zl|Number(float)|歩行振動Z（cm,左足）| 0.00-16.00 |
|zLeftStepAmplitudeCal`歩行指標`|sa\_zrc|Number(float)|歩行振動Z補正有（cm,右足）| 0.00-20.00 |
|zLeftStepAmplitudeCal`歩行指標`|sa\_zlc|Number(float)|歩行振動Z補正有（cm,左足）| 0.00-20.00 |
|maxRightStepAcceleration`歩行指標`|st\_r|Number(float)|最大着地強度平均 (G, 右足)| 0.00-8.00 |
|maxLeftStepAcceleration`歩行指標`|st\_l|Number(float)|最大着地強度平均 (G, 左足)| 0.00-8.00 |
|sleepScoreStandard`静止指標`|sc\_slp\_std|Number(float)|低覚醒スコア(通常時)、まばたき強さ・速度と一部まばたき間隔から「目がトロンとなっている状態」を指標化したもの|有効時: 0(覚醒高い)-100(眠い)、無効: -1|
|sleepScore`静止指標`|sc\_slp|Number(float)|低覚醒スコア(運転時)、運転時の姿勢(まっすぐ前を向いている状態)でクレンジングし、精度を高めたもの|有効時: 0(覚醒高い)-100(眠い)、無効: -1|
|focusScore`静止指標`|sc\_fcs|Number(float)|没入スコア、まばたき間隔を利用し「ある一つのタスクへの注意が続いている状態」を指標化したもの|有効時: 0(没入度が低い)-100(没入度が高い)、無効: -1|
|tensionScore`静止指標`|sc\_tsn|Number(float)|テンションスコア、まばたき強さを利用し「目が見開いている状態」を指標化したもの|有効時: 0(緊張が弱い)-100(緊張が強い)、無効: -1|
|calmScore`静止指標`|sc\_clm|Number(float)|安定スコア、まばたき強さを利用し「外部・内部刺激を受けずに安定している状態」を指標化したもの|有効時: 0(落ち着いていない)-100(落ち着いている)、無効: -1|
|distance|distance|Number(float)|サブアプリ動作時 前回区間との移動距離(m)|0-5000|
|latitude|lat|Number(float)|サブアプリ動作時 緯度|-180 - 180|
|longitude|lng|Number(float)|サブアプリ動作時 経度|-90 - 90|
|appMeasurementStatus|app\_measurement\_status|Number(int)|サブアプリの動作状況フラグ|0: 非APP測定 2: Run測定中 3: Run一時停止中 8: Drive測定中 12: Drive一時停止中 32: Focus測定中 48: Focus一時停止中|
|nptMean`静止指標`|npt\_av|Number(float)|NPT（実効まばたき速度）平均| -0.999 - 0.999 |
|nptMedian`静止指標`|npt\_med|Number(float)|NPT（実効まばたき速度）中央値| -0.999 - 0.999 |
|nptSD`静止指標`|npt\_sd|Number(float)|NPT標準偏差| 0-0.999 |
|blinkWidthMean`静止指標`|bkw\_av|Number(float)|まばたき速度平均(mSec)| 0-300 |
|blinkStrengthTotal`静止指標`|bkh\_sum|Number(float)|まばたき強度合計(uV-equiv) | 0-10000.0 |
|blinkStrengthMax`静止指標`|bkh\_max|Number(float)|まばたき強度最大(uV-equiv) | 0-1000.0 |
|blinkStrengthSD`静止指標`|bkh\_sd|Number(float)|まばたき強度標準偏差(uV-equiv) | 0.00-1000.0 |
|blinkStrengthMean`静止指標`|bkh\_av|Number(float)|まばたき強度平均| 0-1000.0 |
|blinkIntervalTotal`静止指標`|bki\_sum|Number(float)|まばたき間隔合計(s)| 0-120.0|
|blinkIntervalCount`静止指標`|bki\_n|Number(int)|まばたき間隔数|0-120|
|blinkIntervalMean`静止指標`|bki\_av|Number(float)|まばたき間隔平均| 0.00-60.00 |
|blinkCount`静止指標`|bk\_n|Number(int)|まばたき回数|0-120|
|blinkCountRaw`静止指標`|rbk\_n|Number(int)|まばたき回数生値| 0-255 |
|eyeMoveUpCount`静止指標`|re\_u|Number(int)|視線移動上回数生値| 0-255 |
|eyeMoveDownCount`静止指標`|re\_d|Number(int)|視線移動下回数生値| 0-255 |
|eyeMoveRightCount`静止指標`|re\_r|Number(int)|視線移動右回数生値| 0-255 |
|eyeMoveLeftCount`静止指標`|re\_l|Number(int)|視線移動左回数生値| 0-255 |
|cummulativeTime|cum\_time|Number(int)|規格化累積時間(s)| 0-4294967296 |
|blinkIntervalMeanWA`静止指標`|bki\_av\_wa|Number(float)|まばたき間隔平均 規格化値| 0.00-60.00 |
|blinkStrengtnSDWA`静止指標`|bkh\_sd\_wa|Number(float)|まばたき強度標準偏差 規格化値| 0.00-1000.0 |
|blinkStrengthMeanWA`静止指標`|bkh\_av\_wa|Number(float)|まばたき強度平均 規格化値| 0-1000.0 |
|nptMeanWA`静止指標`|npt\_av\_wa|Number(float)|NPT（実効まばたき速度）平均 規格化値| -0.999 - 0.999 |
|nptSDWA`静止指標`|npt\_sd\_wa|Number(float)|NPT（実効まばたき速度）標準偏差 規格化値| 0-0.999 |
|blinkWidthMeanWA`静止指標`|bkw\_av\_wa|Number(float)|まばたき速度平均 規格化値| 0-300 |
|nptScore`静止指標`|sc\_npt|Number(float)|覚醒サブ指標 NPTスコア|有効時: 0-100、無効: -1|
|btsScore`静止指標`|sc\_bts|Number(float)|覚醒サブ指標 BTSスコア|有効時: 0-100、無効: -1|
|lbsScore`静止指標`|sc\_lbs|Number(float)|覚醒サブ指標 LBSスコア|有効時: 0-100、無効: -1|
|legacyZone`静止指標`|zone|Number(int)|RTアルゴリズム動作時 zone値|有効時: 0-100、無効: -1|
|legacyFocus`静止指標`|focus|Number(int)|RTアルゴリズム動作時 focus値|有効時: 0-100、無効: -1|
|legacyCalm`静止指標`|calm|Number(int)|RTアルゴリズム動作時 calm値|有効時: 0-100、無効: -1|
|legacyPosture`静止指標`|posture|Number(int)|RTアルゴリズム動作時 posture値|有効時: 0-100、無効: -1|
|cursor|cursor|String|次のレコードがある場合の取得開始位置|

## 60秒間隔データ(summaryData)

1分間に1回データを取得できる、長時間の状態変化をモニタリングするのに適したモードです。MEMEアプリではJINS MEMEとスマートフォンがBluetooth接続していない時でもJINS MEME内に保存させておき、再接続時に取り出すことが可能です(Loggerアプリでは保存データは取り出せません)。

| iOS/Android/Logger | API/Nodejs |型(API/CSV)| 説明 | 値の範囲 |
|:---|:---:|:---:|:---|:---:|
| date | <i>N/A</i> | String | 日付 | 1970-01-01T09:00:00 - 2106-02-07T06:28:16 |
| <i>N/A</i> | ut | Number(int)|UNIX TIME | 0-4294967296 |
| validDuration | val_s | Number(float)|測定秒数(s) | 0.00-60.00 |
| noiseDuration | nis_s | Number(float)|電極ノイズ秒数(s) | 0.00-60.00 |
| fitDuration | wea_s | Number(float)|装着秒数(s) | 0.00-60.00 |
| walkingDuration | stp_s | Number(float)|歩行秒数(s) | 0.00-60.00 |
| powerLeft | bl | Number(int)|バッテリーレベル | 0: 充電中<br />1:空-5:満充電|
| eyeMoveHorizontal `静止指標` | ems_rl | Number(int)|視線移動小回数(左右) | 0-255 |
| eyeMoveVertical `静止指標` | ems_ud | Number(int)|視線移動小回数(上下) | 0-255 |
| eyeMoveBigHorizontal `静止指標` | eml_rl | Number(int)|視線移動大回数(左右) | 0-255 |
| eyeMoveBigVertical `静止指標` | eml_ud | Number(int)|視線移動大回数(上下) | 0-255 |
| headMoveVerticalCount | hm_po |Number(int)| 頭部運動回数縦 | 0-255 |
| headMoveHorizontalCount | hm_yo | Number(int)| 頭部運動回数横 | 0-255 |
| walkingVibrationRightX `歩行指標` | sa_xr | Number(float)|歩行振動X (cm, 右足) | 0.00-16.00 |
| walkingVibrationLeftX `歩行指標` | sa_xl | Number(float)|歩行振動X (cm, 左足) | 0.00-16.00 |
| walkingVibrationRightY `歩行指標` | sa_yr | Number(float)|歩行振動Y (cm, 右足) | 0.00-16.00 |
| walkingVibrationLeftY `歩行指標` | sa_yl | Number(float)|歩行振動Y (cm, 左足) | 0.00-16.00 |
| walkingVibrationRightZ `歩行指標` | sa_zr | Number(float)|歩行振動Z (cm, 右足) | 0.00-16.00 |
| walkingVibrationLeftZ `歩行指標` | sa_zl | Number(float)|歩行振動Z (cm, 左足) | 0.00-16.00 |
| landingStrengthRightMaxAvg `歩行指標` | st_r | Number(float)|最大着地強度平均 (G, 右足) | 0.00-8.00 |
| landingStrengthLeftMaxAvg `歩行指標` | st_l | Number(float)|最大着地強度平均 (G, 左足) | 0.00-8.00 |
| slopeXAvg | tl_xav | Number(float)|傾き平均X (度) | -180.00-180.00 |
| slopeYAvg | tl_yav | Number(float)|傾き平均Y (度) | -180.00-180.00 |
| slopeXStd | tl_xsd | Number(float)|傾き標準偏差X (度) | 0-655.36 |
| slopeYStd | tl_ysd | Number(float)|傾き標準偏差Y (度) | 0-655.36 |
| highSpeedStepsNum `歩行指標` | stp_fst | Number(int)|歩行時歩数（高速 280-370ms） | 0-255 |
| middleSpeedStepsNum `歩行指標` | stp_mid | Number(int)|歩行時歩数（中速 380-440ms） | 0-255 |
| lowSpeedStepsNum `歩行指標` | stp_slw | Number(int)|歩行時歩数（低速 450-590ms） | 0-255 |
| ultraLowSpeedStepsNum `歩行指標` | stp_vsl | Number(int)|歩行時歩数（超低速 600-1000ms） | 0-255 |
| nptAvgWeak `静止指標` `クレンジング弱` | lc_npt_av | Number(float)|NPT（実効まばたき速度）平均 | -0.256 - 0.256 |
| weakBlinkSpeedAvg `静止指標` `クレンジング弱` | lc_bkw_av | Number(int)|まばたき速度平均(mSec) | 50-306 |
| weakBlinkSpeedStd `静止指標` `クレンジング弱` | lc_bkw_sd | Number(float)|まばたき速度標準偏差(mSec) | 0-51.2 |
| weakBlinkStrengthAvg `静止指標` `クレンジング弱` | lc_bkh_av | Number(int)|まばたき強度平均(uV-equiv) | 0-512 |
| weakBlinkStrengthStd `静止指標` `クレンジング弱` | lc_bkh_sd | Number(float)|まばたき強度標準偏差(uV-equiv) | 0-51.2 |
| weakBlinkCount `静止指標` `クレンジング弱` | lc_bk_n | Number(int)|まばたき回数 | 0-255 |
| weakBlinkSwarmCount `静止指標` `クレンジング弱` | lc_bkg_n | Number(int)|1s以内に複数回まばたきが発生した回数 | 0-255 |
| weakBlinkIntervalAvg `静止指標` `クレンジング弱` | lc_bki_av | Number(float)|まばたき間隔秒数平均(s) ※FW2.2.0からはRMS平均 | 0-51.2 |
| weakBlinkIntervalCount `静止指標` `クレンジング弱` | lc_bki_n | Number(int)|まばたき間隔回数 | 0-255 |
| nptAvgStrong `静止指標` `クレンジング強` | sc_npt_av | Number(float)|NPT（実効まばたき速度）平均 | -0.256 - 0.256 |
| strongBlinkSpeedAvg `静止指標` `クレンジング強` | sc_bkw_av | Number(int)|まばたき速度平均(mSec) | 50-306 |
| strongBlinkSpeedStd `静止指標` `クレンジング強` | sc_bkw_sd | Number(float)|まばたき速度標準偏差(mSec) | 0-51.2 |
| strongBlinkStrengthAvg `静止指標` `クレンジング強` | sc_bkh_av | Number(int)|まばたき強度平均(uV-equiv) | 0-512 |
| strongBlinkStrengthStd `静止指標` `クレンジング強` | sc_bkh_sd | Number(float)|まばたき強度標準偏差(uV-equiv) | 0-51.2 |
| strongBlinkCount `静止指標` `クレンジング強` | sc_bk_n | Number(int)|まばたき回数 | 0-255 |
| strongBlinkSwarmCount `静止指標` `クレンジング強` | sc_bkg_n | Number(int)|1s以内に複数回まばたきが発生した回数 | 0-255 |
| strongBlinkIntervalAvg `静止指標` `クレンジング強` | sc_bki_av | Number(float)|まばたき間隔秒数平均(s)  ※FW2.2.0からはRMS平均| 0-51.2 |
| strongBlinkIntervalCount `静止指標` `クレンジング強` | sc_bki_n | Number(int)|まばたき間隔回数 | 0-255 |
|cursor|cursor|String|次のレコードがある場合の取得開始位置| null / (string)|

## 高速頭部運動データ(fastHeadMotion)

0.2〜0.9秒程度の周期で頭を左右、上下に向けた時の最初の方向、回数カウントのイベントです。連続で往復すると回数がカウントアップされ、連続した動作が止まると最終値のみ返されます。**回転速度で判定するため、ジャイロセンサーをオンにする必要があります**。このデータはJINS MEMEとスマートフォンがBluetooth接続している時のみ生成されます。

| 名前 | 型 | 説明 | 値の範囲 |
|:---|:---:|:---|:---:|
| date | String | イベント発生日時 | 1970-01-01 09:00:00 - 2106-02-07 06:28:16 |
| type | String | 発生イベント種類 | fastHeadMotion(固定値) |
| subType | String | 向き | right, left, up, down |
| value | Number | 回数(片道で1) | 1-65535 |

## 低速頭部運動データ(傾き, slowHeadTilting)

頭を真っ直ぐな状態から左右か前後に45°以上傾けて1秒間弱維持した時のイベントです。このデータはJINS MEMEとスマートフォンがBluetooth接続している時のみ生成されます。

| 名前 | 型 | 説明 | 値の範囲 |
|:---|:---:|:---|:---:|
| date | String | イベント発生日時 | 1970-01-01 09:00:00 - 2106-02-07 06:28:16 |
| type | String | 発生イベント種類 | slowHeadTilting(固定値) |
| subType | String | 向き | right, left, forward, backward |
| value | Number | 開始・終了フラグ | 1(まっすぐから傾けた状態に遷移)<br /> -1(傾けている状態からまっすぐに遷移) |

## 低速頭部運動データ(回転, slowHeadRotation)

頭を45°以上傾けながら3-5秒に一周回した時のカウント数のイベントです（前方向の下向きから判定開始）。このデータはJINS MEMEとスマートフォンがBluetooth接続している時のみ生成されます。

| 名前 | 型 | 説明 | 値の範囲 |
|:---|:---:|:---|:---:|
| date | String | イベント発生日時 | 1970-01-01 09:00:00 - 2106-02-07 06:28:16 |
| type | String | 発生イベント種類 | slowHeadRotation(固定値) |
| subType | String | 向き | clockwise, anticlockwise |
| value | Number | 回転数 | 1 |
