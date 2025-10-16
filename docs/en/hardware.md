---
outline: deep
---
# Hardware

![JINS MEME title](/images/title.png)

## Product comparison


| Item | ES <Badge type="tip" text="Standard" /> | ES-R <Badge type="danger" text="Academic" /> |
|:---|:---|:---|
| Overview | JINS MEME Standard edition. Acquires data with semantics provided by the device or app. Suitable for general experimental use. | Academic edition. Captures fine-grained raw EOG and 6-axis sensor data. Intended for algorithm development. |
| Frequency | 20Hz, once per 60s | 50/100Hz |
| Supported software | Logger ([iOS/Android](/en/software/es/logger_app))<br />SDK (iOS/Android/Nodejs) — Inquiry support; only 20Hz / 60s interval data | Logger ([Windows/macOS](/en/software/with-pc/) / [Android](/en/software/with-android/))<br />[SDK](https://github.com/jins-meme/ES_R-Development-Kit) |
| Main data types | - R3: 20Hz realtime data (currentData) blink, eye movement, acceleration, angle<br />- R5: 15s-interval logic indicators (logicIndexData) concentration, calm, etc.<br />-  R4: 60s-interval summary (summaryData). <br /><br />[See details](/en/doc/data_es). | R1: Select one mode before measurement <br />- Full Mode: EOG, acceleration, angular velocity<br />- Standard Mode: EOG (2 values per line), acceleration<br />- Quaternion mode: Quaternion (orientation representation). <br /><br />[See details](/en/doc/data_esr). |
| Continuous usage time | - Active (no gyro): up to approx. 24h<br />- Active (with gyro): up to approx. 12h<br />- Sleep mode: approx. 2 weeks | - Full mode: approx. 11h<br />- Standard mode: approx. 15h<br />- Quaternion mode: approx. 9h |

![Schematics](/images/schematics.png)

You can pseudo-convert R1 data (Full / Standard) to R2/R3/R5 using the [conversion app](https://jinsmeme.streamlit.app/). If the app is in sleep mode, press the Up button to wake it.


## Common specifications

| Item | Specification |
|:---|:---|
| Battery | Built-in rechargeable lithium-ion battery |
| Charging clip interface | Micro USB connector |
| Charging time | Approx. 2.5h |
| Weight | Approx. 32g (without prescription, with UV-cut lens) |
| Material | Plastic (core/crip), SUS316L (core), TR-90 (frame) |
| Sensors | 3-point electrooculography sensor (Resolution: 12bit, Ideal: 2.5mV); 3-axis accelerometer; 3-axis gyro (angular velocity) sensor |
| Data communication | · Wireless communication via Bluetooth Low Energy |
| Operating conditions | Temperature: 0–40°C; Humidity: 10–90% RH (non-condensing) |

## Frame types

| Wellington Black | Wellington Brown |
|:---|:---|
|![Wellington Black](/images/type_wellington_black.png) | ![Wellington Brown](/images/type_wellington_brown.png) |
| Square Black | Square Navy |
| ![Square Black](/images/type_square_black.png) | ![Square Navy](/images/type_square_navy.png) |
| Oval Brown | Oval Red |
| ![Oval Brown](/images/type_oval_brown.png) | ![Oval Red](/images/type_oval_red.png) |
| Boston Black| Boston Brown |
| ![Boston Black](/images/type_boston_black.png) | ![Boston Brown](/images/type_boston_brown.png) |

## Contact for purchase, warranty and after-sales service

- Please contact your dealer or [JINS MEME Support](https://krs.bz/jins/m/aboutmeme) (The JINS store does not support this service).
- Warranty and after-sales service is 6 months from purchase.
