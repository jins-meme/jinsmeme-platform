# Academic Logger Data definition<Badge type="danger" text="Academic" />

- Four types of data can be acquired: EOG potential signal, acceleration (Acc), angular velocity (Gyro), and quaternion.
- The data types available vary depending on the mode: Full, Standard, or Quaternion.
- The transfer frequency can be selected from 50/100Hz.
- Axis definitions are oriented as shown in the figure below.

| Mode type | Frequency | EOG | Acc | Gyro | Quaternion |
|:---:|:---:|:---:|:---:|:---:|:---:|
| Full Mode | 50/100Hz | o | o | o | - |
| Standard Mode | 50/100Hz | o | o | - | - |
| Quaternion | 50/100Hz | - | - | - | o |

![](/images/axisdef_esr.png)
<small>The Pitch axis is recorded as GYRO_X, the Roll axis as GYRO_Y, and the Yaw axis as GYRO_Z.</small>

## Full Mode

Full is the mode with the most data types and is the most versatile and easy to use. Please see [**Detail**](/pdf/sample_full.pdf).

| Name | Type | Description | Range |
|:---:|:---:|:---:|:---:|
| ARTIFACT | string |  Markers entered in software | X or the entered string |
| NUM | int | Sequential number | 0... |
| DATE | string | Received Date | (ex) 2016/08/09 05:22:35.88 |
| ACC_X | int |  Analog value of acceleration X (maximum value is set range) | -32768...32767 |
| ACC_Y | int |  Analog value of acceleration Y (maximum value is set range) | -32768...32767 |
| ACC_Z | int |  Analog value of acceleration Z (maximum value is set range) | -32768...32767 |
| GYRO_X | int |  Analog value of angular velocity X (maximum value is set range) | -32768...32767 |
| GYRO_Y | int |  Analog value of angular velocity Y (maximum value is set range) | -32768...32767 |
| GYRO_Z | int |  Analog value of angular velocity Z (maximum value is set range) | -32768...32767 |
| EOG_L | int | Value of left electrode | -32768...32767 |
| EOG_R | int | Value of right electrode | -32768...32767 |
| EOG_H | int | Value of horizontal potential | -65535...65535 |
| EOG_V | int | Value of vertical potential | -32768...32767 |

## Standard Mode

Standard mode is useful when you want to acquire detailed EOG data at twice the speed (two data per line), but it does not retain angular velocity data. Please see [**Detail**](/pdf/sample_standard.pdf).

| Name | Type | Description | Range |
|:---:|:---:|:---:|:---:|
| ARTIFACT | string | Markers entered in software | X or the entered string |
| NUM | int | Sequential number | 0... |
| DATE | string | Received Date | (ex) 2016/08/09 05:22:35.88 |
| ACC_X | int |  Analog value of acceleration X (maximum value is set range) | -32768...32767 |
| ACC_Y | int |  Analog value of acceleration Y (maximum value is set range) | -32768...32767 |
| ACC_Z | int |  Analog value of acceleration Z (maximum value is set range) | -32768...32767 |
| EOG_L1 | int | Value of left electrode 1 | -32768...32767 |
| EOG_R1 | int | Value of right electrode 1 | -32768...32767 |
| EOG_L2 | int | Value of left electrode 1 after 1/(frequency * 2) sec | -32768...32767 |
| EOG_R2 | int | Value of right electrode 1 after 1/(frequency * 2) sec | -32768...32767 |
| EOG_H1 | int | Value of horizontal potential 1 | -65535...65535 |
| EOG_V1 | int | Value of vertical potential 1 | -32768...32767 |
| EOG_H2 | int | Value of horizontal potential 1 after 1/(frequency * 2) sec | -65535...65535 |
| EOG_V2 | int | Value of vertical potential 1 after 1/(frequency * 2) sec | -32768...32767 |

## Quaternion Mode

Quaternion is a special mode for acquiring data used for attitude control, etc. Please see [**Detail**](/pdf/sample_quaternion.pdf).

| Name | Type | Description | Range |
|:---:|:---:|:---:|:---:|
| ARTIFACT | string | Markers entered in software | X or the entered string |
| NUM | int | Sequential number | 0... |
| DATE | string | Received Date | (ex) 2016/08/09 05:22:35.88 |
| QUATERNION_W | int | QUATERNION_W(maximum value is set range) | -32768...32767 |
| QUATERNION_X | int | QUATERNION_X(maximum value is set range) | -32768...32767 |
| QUATERNION_Y | int | QUATERNION_Y(maximum value is set range) | -32768...32767 |
| QUATERNION_Z | int | QUATERNION_Z(maximum value is set range) | -32768...32767 |

## Signal processing

JINS MEME Academic Pack outputs the acquired values of the sensor directly via Bluetooth.

![](/images/structure.png)

## Notes on measuring with macOS, Windows, and iOS

When measuring with macOS, Windows, or iOS, very small noise originating from the Bluetooth connection interval is mixed into the gyroscope (angular velocity) and EOG data. It appears at about 33 Hz and its side lines when measuring at 100 Hz, and at about 17 Hz and its side lines when measuring at 50 Hz. Acceleration data is not affected. In Quaternion mode, a line at the same frequency also appears in the orientation data, but its amplitude is only about 0.0003°, which is negligible. In addition, on macOS and iOS, some data may be lost.

This has no effect on detecting ordinary movements, but if you work with fine signals, such as frequency analysis during rest, we recommend measuring with Android.

![](/images/gyro_ble_interval_noise.webp)
<small>The same device placed on a desk and measured at 100 Hz, received by each OS: raw gyroscope X axis (left) and power spectral density (right). Dotted lines: 33.3 Hz and its side lines (19.4 / 26.4 / 40.3 / 47.2 Hz).</small>

## A sample of the EOG signal

The following is a sample of the EOG signal(blue:Vv, red:Vh) at 100 Hz during blinking and eye movement. Due to the effect of contact resistance, the eye movement shows a gently converging waveform as if a band pass filter is applied.

![](/images/vvvh_signal.png)

[CSV file (excerpts)](/data/eog_std_signal2.csv)