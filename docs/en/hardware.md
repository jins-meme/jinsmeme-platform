---
outline: deep
---

![](/images/title.png)

## Model Type

- <Badge type="tip" text="Standard" />can acquire data with semantics within JINS MEME or within the application, and is suitable for general experimental use.
- <Badge type="danger" text="Academic" />(ES-R) can capture raw data from EOG and 6-axis sensors with fine granularity. It supports acquisition of all data types at a maximum of 100 Hz and EOG at 200 Hz.
- We do not provide a tool to convert Academic Edition data to Standard Edition data.

![](/images/schematics.png)

## Supported software and obtainable data 

| Model | Frequency | Software and OS |
| :---: | :---: | :--- |
| <Badge type="tip" text="Standard" /> | 20Hz<br/>Once per 60s | <ul><li>[Standard Logger<br/> (iOS / Android)](/software/es/logger_app)</li><li>SDK (iOS / Android / Nodejs)<br/>※Inquiry support, 20Hz and 60 second interval data only</li></ul> |
| <Badge type="danger" text="Academic" /><br/>(ES-R) | 50/100Hz | <ul><li>Academic(ES-R) Logger<br/>([Windows / MacOS](/software/with-pc/) / [Android](/software/with-android/))</li><li>[SDK](https://github.com/jins-meme/ES_R-Development-Kit)</li></ul>  |

### Data types<Badge type="tip" text="Standard" />

For more information, please [click here](/doc/data_es).

| Data type | Name | Examples of indices |
|:---:|:---:|:---|
| 20Hz data | realtime data, currentData | Blink event, eye movement, acceleration, angle |
| 15s-interval data | logicIndexData | Concentration, calm, tension, awakeness, number of steps,, posture angle (forward/backward, left/right), gait vibration (X/Y/Z), blink statistical indices (H/W, Mean/Sd) |
| 60s-interval data | standard data, summaryData | Number of steps, posture angle (forward/backward, left/right), gait vibration (X/Y/Z), blink statistical index (H/W, Mean/Sd) | 
| 15s-interval trigger | triggerEvent | Threshold for 15-second interval data<br/>（Ex: Concentrated data, >60 pt at 50% weighted average, minimum notification interval 120s） |
| High-speed head movement data | fastHeadMotion | Events when the face is turned vertically or horizontally |
| Low-speed head movement data | slowHeadRotation, slowHeadTilting | Slow head turning or tilt events |

### Data types<Badge type="danger" text="Academic" /> 

For more information, please [click here](/doc/data_esr).

| Data type | Indices |
|:---|:---|
| Standard Mode data | EOG potential, accelerations（2data / line） |
| Full Mode data | EOG potential, accelerations, angular velocity |
| Quaternion data | Quaternion |


## Specifications

<Badge type="tip" text="Standard" />

| Item | Specification |
|:---|:---|
| Battery | Built-in rechargeable Lithium ion battery |
| Charging Time | Approx. 2.5h |
| Usage Time | - Active mode(w/o Gyro): Max 24h<br>- Active mode(w/ Gyro): Max 12h<br>- Sleep mode: Approx. 2 weeks |
| Weight | Approx. 32g (UV cut lens without power) |
| Material |  Plastic(core/crip)、SUS316L(core)、TR-90(frame) |
| Sensor | · 3-point electrooculography sensor(Resolusion: 12bit, Ideal: 2.5mV)<br>· 3-axis accelerometer sensor<br>· 3-axis gyro (angular) sensor |
| Data communication | · Wireless communication via Bluetooth Low Energy |
| Charging terminal | Micro  USB端 |
| Use environmental conditions | · Temperature: 0 to 40°C<br>· Humidity: 10 to 90% RH (non-condensing) |

<Badge type="danger" text="Academic" />

| Item | Specification |
|:---|:---|
| Battery | Built-in rechargeable Lithium ion battery |
| Charging Time | Approx. 2.5h |
| Usage Time | - Quartanion mode: Approx. 9h<br>- Full mode: Approx. 11h<br>- Standard mode: Approx. 15h |
| Weight | Approx. 32g (UV cut lens without power) |
| Material |  Plastic(core/crip)、SUS316L(core)、TR-90(frame) |
| Sensor | · 3-point electrooculography sensor(Resolusion: 12bit, Ideal: 2.5mV)<br>· 3-axis accelerometer sensor<br>· 3-axis gyro (angular) sensor |
| Data communication | · Wireless communication via Bluetooth Low Energy |
| Charging terminal | Micro  USB端 |
| Use environmental conditions | · Temperature: 0 to 40°C<br>· Humidity: 10 to 90% RH (non-condensing) |

## Contact for purchase, warranty and after-sales service

- Please contact your dealer or [JINS MEME Customer Support Center](https://jinsmeme.com/support) (The JINS store does not support this service).
- Warranty and after-sales service is one year from purchase.
