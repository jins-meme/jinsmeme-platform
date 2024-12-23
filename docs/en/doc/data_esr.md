# Academic Logger Data definition<Badge type="danger" text="Academic" />

- Four types of data can be acquired: EOG potential signal, acceleration (Acc), angular velocity (Gyro), and quaternion.
- The data types available vary depending on the mode: Full, Standard, or Quaternion.
- The transfer frequency can be selected from 50/100Hz.
- Axis definitions are oriented as shown in the figure below.

| Mode type | Frequency | EOG | Acc | Gyro | Quaternion |
|:---:|:---:|:---:|:---:|:---:|:---:|
| Full Mode | 50/100Hz | o | o | o | - |
| Standard Mode | 50/100hz | o | o | - | - |
| Quaternion | 50/100Hz | - | - | - | o |

![](/images/axisdef.png)

## Full Mode

Full is the mode with the most data types and is the most versatile and easy to use. Please see [**Detail**](/pdf/sample_full.pdf).

| Name | Type | Description | Range |
|:---:|:---:|:---:|:---:|
| ARTIFACT | int |  Markers entered in software | 0/1 |
| NUM | int | Sequential number | 0... |
| DATE | string | Received Date | (ex) 2016/08/09 05:22:35.88 |
| ACC_X | int |  Analog value of acceleration X (maximum value is set range) | -32768...32767 |
| ACC_Y | int |  Analog value of acceleration Y (maximum value is set range) | -32768...32767 |
| ACC_Z | int |  Analog value of acceleration Z (maximum value is set range) | -32768...32767 |
| GYRO_X | int |  Analog value of angular velocity X (maximum value is set range) | -32768...32767 |
| GYRO_Y | int |  Analog value of angular velocity X (maximum value is set range) | -32768...32767 |
| GYRO_Z | int |  Analog value of angular velocity X (maximum value is set range) | -32768...32767 |
| EOG_L | int | Value of left electrode | -32768...32767 |
| EOG_R | int | Value of right electrode | -32768...32767 |
| EOG_H | int | Value of horizontal potential | -65535...65535 |
| EOG_V | int | Value of vertical potential | -32768...32767 |

## Standard Mode

Standard mode is useful when you want to acquire detailed EOG data at twice the speed (two data per line), but it does not retain angular velocity data. Please see [**Detail**](/pdf/sample_standard.pdf).

| Name | Type | Description | Range |
|:---:|:---:|:---:|:---:|
| ARTIFACT | int | Markers entered in software | 0/1 |
| NUM | int | Sequential number | 0... |
| DATE | string | Received Date | (ex) 2016/08/09 05:22:35.88 |
| ACC_X | int |  Analog value of acceleration X (maximum value is set range) | -32768...32767 |
| ACC_Y | int |  Analog value of acceleration Y (maximum value is set range) | -32768...32767 |
| ACC_Z | int |  Analog value of acceleration Z (maximum value is set range) | -32768...32767 |
| EOG_L1 | int | Value of left electrode 1 | -32768...32767 |
| EOG_R1 | int | Value of right electrode 1 | -32768...32767 |
| EOG_L2 | int | Value1 of left electrode after 1/(freqency * 2) sec | -32768...32767 |
| EOG_R2 | int | Value1 of right electrode after 1/(freqency * 2) sec | -32768...32767 |
| EOG_H1 | int | Value of horizontal potential 1 | -65535...65535 |
| EOG_V1 | int | Value of vertical potential 1 | -32768...32767 |
| EOG_H2 | int | Value1 of horizontal potential after 1/(freqency * 2) sec | -65535...65535 |
| EOG_V2 | int | Value1 of vertical potential after 1/(freqency * 2) sec | -32768...32767 |

## Quaternion Mode

Quaternion is a special mode for acquiring data used for attitude control, etc. Please see [**Detail**](/pdf/sample_quaternion.pdf).

| Name | Type | Description | Range |
|:---:|:---:|:---:|:---:|
| ARTIFACT | int | Markers entered in software | 0/1 |
| NUM | int | Sequential number | 0... |
| DATE | string | Received Date | (ex) 2016/08/09 05:22:35.88 |
| QUATERNION_W | int | QUATERNION_W(maximum value is set range)） | -32768...32767 |
| QUATERNION_X | int | QUATERNION_X(maximum value is set range)） | -32768...32767 |
| QUATERNION_Y | int | QUATERNION_Y(maximum value is set range)） | -32768...32767 |
| QUATERNION_Z | int | QUATERNION_Z(maximum value is set range)） | -32768...32767 |

## Signal processing

JINS MEME Academic Pack outputs the acquired values of the sensor directly via Bluetooth.

![](/images/structure.png)

## A sample of the EOG signal

The following is a sample of the EOG signal(blue:Vv, red:Vh) at 100 Hz during blinking and eye movement. Due to the effect of contact resistance, the eye movement shows a gently converging waveform as if a band pass filter is applied.

![](/images/vvvh_signal.png)

[CSV file (excerpts)](/data/eog_std_signal2.csv)