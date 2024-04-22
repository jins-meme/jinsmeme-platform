# Academic版 Logger データ定義<Badge type="danger" text="アカデミック版" />

- JINS MEME アカデミックパックで取得可能なデータ種としては、EOG電位シグナル、加速度(Acc)、角速度(Gyro)、Quaternionの4つです
- Full / Standard / Quaternion の3つのモードによって取得できるデータ種が異なります
- 転送周波数は 50/100Hz の2つから選びます
- 軸定義は以下の図の向きになります

| Mode type | Frequency | EOG | Acc | Gyro | Quaternion |
|:---:|:---:|:---:|:---:|:---:|:---:|
| Full Mode | 50/100Hz | o | o | o | - |
| Standard Mode | 50/100hz | o | o | - | - |
| Quaternion | 50/100Hz | - | - | - | o |

![](/images/axisdef.png)

## Full Mode

Fullはデータ種が一番多いモードで、最も汎用的に使いやすいモードです。[**詳細な解説**](/pdf/sample_full.pdf)をご覧ください。

| Name | Type | 説明 | 値の範囲 |
|:---:|:---:|:---:|:---:|
| ARTIFACT | int | ソフトウェアで入力した目印 | 0/1 |
| NUM | int | データID連番 | 0... |
| DATE | string | 受信日時 | (ex) 2016/08/09 05:22:35.88 |
| ACC_X | int | 加速度Xのアナログ値（最大値が設定したレンジ） | -32768...32767 |
| ACC_Y | int | 加速度Yのアナログ値（最大値が設定したレンジ） | -32768...32767 |
| ACC_Z | int | 加速度Zのアナログ値（最大値が設定したレンジ） | -32768...32767 |
| GYRO_X | int | 角速度Xのアナログ値（最大値が設定したレンジ） | -32768...32767 |
| GYRO_Y | int | 角速度Yのアナログ値（最大値が設定したレンジ） | -32768...32767 |
| GYRO_Z | int | 角速度Zのアナログ値（最大値が設定したレンジ） | -32768...32767 |
| EOG_L | int | 電極左の値 | -32768...32767 |
| EOG_R | int | 電極右の値 | -32768...32767 |
| EOG_H | int | 視線ヨコ移動 | -65535...65535 |
| EOG_V | int | 視線タテ移動 | -32768...32767 |

## Standard Mode

StandardはEOGが倍速(1行に2データ)で取得できEOGを詳細に取りたい時に便利ですが、角速度のデータが残りません。[**詳細な解説**](/assets/pdf/sample_standard.pdf)をご覧ください。

| Name | Type | 説明 | 値の範囲 |
|:---:|:---:|:---:|:---:|
| ARTIFACT | int | ソフトウェアで入力した目印 | 0/1 |
| NUM | int | データID連番 | 0... |
| DATE | string | 受信日時 | (ex) 2016/08/09 05:22:35.88 |
| ACC_X | int | 加速度Xのアナログ値（最大値が設定したレンジ） | -32768...32767 |
| ACC_Y | int | 加速度Yのアナログ値（最大値が設定したレンジ） | -32768...32767 |
| ACC_Z | int | 加速度Zのアナログ値（最大値が設定したレンジ） | -32768...32767 |
| EOG_L1 | int | 電極左の値1 | -32768...32767 |
| EOG_R1 | int | 電極右の値1 | -32768...32767 |
| EOG_L2 | int | 電極左の値1 の 1/(周波数 * 2)秒後の値 | -32768...32767 |
| EOG_R2 | int | 電極右の値1 の 1/(周波数 * 2)秒後の値 | -32768...32767 |
| EOG_H1 | int | 視線ヨコ移動1 | -65535...65535 |
| EOG_V1 | int | 視線タテ移動1 | -32768...32767 |
| EOG_H2 | int | 視線ヨコ移動1 の 1/(周波数 * 2)秒後の値 | -65535...65535 |
| EOG_V2 | int | 視線タテ移動1 の 1/(周波数 * 2)秒後の値 | -32768...32767 |

## Quaternion Mode

Quaternionは姿勢制御などで使用するデータを取得するための特殊モードです。[**詳細な解説](/assets/pdf/sample_quaternion.pdf)をご覧ください。

| Name | Type | 説明 | 値の範囲 |
|:---:|:---:|:---:|:---:|
| ARTIFACT | int | ソフトウェアで入力した目印 | 0/1 |
| NUM | int | データID連番 | 0... |
| DATE | string | 受信日時 | (ex) 2016/08/09 05:22:35.88 |
| QUATERNION_W | int | QUATERNION_W（最大値が設定したレンジ） | -32768...32767 |
| QUATERNION_X | int | QUATERNION_X（最大値が設定したレンジ） | -32768...32767 |
| QUATERNION_Y | int | QUATERNION_Y（最大値が設定したレンジ） | -32768...32767 |
| QUATERNION_Z | int | QUATERNION_Z（最大値が設定したレンジ） | -32768...32767 |

## シグナル処理

JINS MEME アカデミックパックでは、センサーの取得値をそのままBluetoothで出力します。

![](/images/structure.png)

## EOGデータのサンプル

まばたきや視線移動を行っている時の100Hzの眼電位シグナルのサンプル(青:Vv, 赤:Vh)を以下に示します。接触抵抗の影響により、視線移動はband pass filter がかかったようななだらかに収束する波形を示します。

![](/images/vvvh_signal.png)

[CSVファイル（抜粋）](/data/eog_std_signal2.csv)