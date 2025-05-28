# Standard Logger Data definition<Badge type="tip" text="Standard" />

## Axis Definition of Motion Indicators

![](/images/axisdef.png)

Regarding the angle, drift (value changes at a constant rate) and hump (small bumps in the value) occur due to the characteristics of the sensor.

## Static and Gait indicators

- Among the data that can be measured by JINS MEME, the `Static` indicator is an indicator that is valid only when there is no walking, touching the glasses with the hands, chewing, etc. When data is measured under conditions other than those mentioned above, it may be detected as a noise flag, output inaccurate values, or not detected. Please note that when measurement is made under conditions other than those mentioned above, it may be detected as a noise flag, output inaccurate values, or not be detected. summaryData is cleansed to remove any suspicious signals.
- The `Gait` indicator in the data that can be measured by JINS MEME is the data that can be obtained while walking. Please note that JINS MEME cannot accurately measure vibration and movement patterns other than walking.

## 20Hz data(currentData)

Data can be acquired at approximately 20 Hz. This mode is suitable for immediate acquisition and analysis of precise data such as controller. This data is generated only when JINS MEME and a smartphone are connected via Bluetooth.

| iOS/Android/Nodejs/Logger | Type(iOS/Android) | Type(Nodejs) | Description | Value Range |
|:---|:---:|:---:|:---|:---:|
| blinkSpeed `Static` | Int | Number | Blink speed, eye closing time(mSec) | 0-400(ordinary 90−180) |
| blinkStrength `Static` | Int | Number | Blink strength(uV-equiv) | 0-1000(ordinary30−150) |
| eyeMoveUp `Static` | Int | Number | Event when the eye moves up. | 0: none<br/>1: min-7: max |
| eyeMoveDown `Static` | Int | Number | Event when the eye moves down. | 0: none<br/>1: min-7: max |
| eyeMoveLeft `Static` | Int | Number | Event when the eye moves left. | 0: none<br/>1: min-7: max |
| eyeMoveRight `Static` | Int | Number | Event when the eye moves right. | 0: none<br/>1: min-7: max |
| roll | Float | Number | Degrees indicating the roll component (left-right tilt) of the attitude angle | -180.00 - 180.00 |
| pitch | Float | Number | Degrees indicating the pitch component (fore-back tilt) of the attitude angle | -180.00 - 180.00 |
| yaw | Float | Number | Degrees indicating the yaw component (horizontal rotation) of the attitude angle | 0.00 - 360.00 |
| accX | Float | Number | X-axis component of acceleration (left/right)、1G=16 | -128(-8G) - 127(7.9375G) |
| accY | Float | Number | Y-axis component of acceleration (fore/back)、1G=16 | -128(-8G) - 127(7.9375G) |
| accZ | Float | Number | Z-axis component of acceleration (up/down)、1G=16 | -128(-8G) - 127(7.9375G) |
| walking(isWalking) `Gait` | boolean | Number | Detection of one step when heel touches the ground (flagged 0.15~0.25s after detection) | 0/false: no step<br/>1/true: step |
| noiseStatus | boolean | Number | Integer value representing the noise condition of the electrode | 0/false: low noise<br/>1/true: high noise |
| fitError | Int | Number | JINS MEME is actually worn or not, determined once every 5 seconds by movement | 0: worn<br />1: not worn |
| powerLeft | Int | Number | Integer value representing remaining battery capacity | 0: In charging<br />1: Empty-5: Full |
| sequenceNumber(seqNo) | Int | Number | Circulant sequential integer from 0-255 | 0-255 |

※Nodejs will be nodejs-sdk Type (in nodejs, boolean is an integer value due to internal structure issues).

## 15-second interval data (logicIndexData)

The 15-second interval data is the most granular data that outputs biometric indicators. This data is generated only when JINS MEME and a smartphone are connected via Bluetooth.
※"When running sub-applications", "Normalized", "sub-index" and "RT algorithm in operation" may not be recorded.

|Logger|API|Type(API/CSV)|Description|Value Range|
|:---|:---|:---|:---|:---:|
|date|date|String|measurement date|2000-01-01T00:00:00 - 2099-12-31T23:59:59|
|stepCount `Gait`|stp|Number(int)|Step count|0-255|
|stepCadence `Gait`|cad|Number(float)|Cadence(pitch)| 0-255 |
|isStill|isl|Boolean / Number(int)|Still (not wearing) judgment| true: not wearing (still) false: wearing (not still)|
|noiseTime|nis\_time|Number(float)|noise time|0.00 - 15.00|
|isValid|vld|Boolean / Number(int)|Data validity at rest (noise less than 3 seconds and steps less than 5)| true: valid false: invalid|
|xMean|tl\_xav|Number(float)|Mean tilt X (degree) | -180.00-180.00 |
|xSD|tl\_xsd|Number(float)|Standard deviation of tilt X (degree) | 0-655.36 |
|YMean|tl\_yav|Number(float)|Mean tilt Y (degree) | -180.00-180.00 |
|ySD|tl\_ysd|Number(float)|Standard deviation of tilt Y (degree) | 0-655.36 |
|pitchOnewayCount|hm\_po|Number(int)|Number of neck flips (back-forth)| 0-255 |
|pitchRoundCount|hm\_pr|Number(int)|Number of slow neck flips (back-forth)| 0-255 |
|yawOnewayCount|hm\_yo|Number(int)|Number of neck flips (right-left)| 0-255 |
|yawRoundCount|hm\_yr|Number(int)|Number of slow neck flips (right-left)| 0-255 |
|xRightStepAmplitude `Gait`|sa\_xr|Number(float)|Walking vibration X(cm,right foot)| 0.00-16.00 |
|xLeftStepAmplitude `Gait`|sa\_xl|Number(float)|Walking vibration X(cm,left foot)| 0.00-16.00 |
|yRightStepAmplitude `Gait`|sa\_yr|Number(float)|Walking vibration Y(cm,right foot)| 0.00-16.00 |
|yLeftStepAmplitude `Gait`|sa\_yl|Number(float)|Walking vibration Y(cm,left foot)| 0.00-16.00 |
|zRightStepAmplitude `Gait`|sa\_zr|Number(float)|Walking vibration Z(cm,right foot)| 0.00-16.00 |
|zLeftStepAmplitude `Gait`|sa\_zl|Number(float)|Walking vibration Z(cm,left foot)| 0.00-16.00 |
|zLeftStepAmplitudeCal `Gait`|sa\_zrc|Number(float)|Walking vibration Z corrected (cm,right foot)| 0.00-20.00 |
|zLeftStepAmplitudeCal `Gait`|sa\_zlc|Number(float)|Walking vibration Z corrected (cm,left foot)| 0.00-20.00 |
|maxRightStepAcceleration `Gait`|st\_r|Number(float)|Maximum landing strength average (G, right foot)| 0.00-8.00 |
|maxLeftStepAcceleration `Gait`|st\_l|Number(float)|Maximum landing strength average (G, left foot)| 0.00-8.00 |
|sleepScoreStandard `Static`|sc\_slp\_std|Number(float)|Low wakefulness score (normal), index of "eye trance" based on blink strength/rate and partial blink interval| 0(high wakefulness)-100(sleepy), invalid: -1|
|sleepScore `Static`|sc\_slp|Number(float)|Corrected for low alertness score (when driving) and driving posture (looking straight ahead)| 0 (high wakefulness) -100 (sleepy), Invalid: -1|
|focusScore `Static`|sc\_fcs|Number(float)|Indicates "sustained attention to a task" using immersion score and blink interval| 0(low immersion)-100(high immersion), Inactive: -1|
|tensionScore `Static`|sc\_tsn|Number(float)|Tension score, an index of "eyes wide open" using blink strength| 0(low tension)-100(high tension), Invalid: -1|
|stabilityScore `Static`|sc\_clm|Number(float)|Stability score, an index of "stable state without external or internal stimuli" using blink strength| 0(not calm)-100(calm), Invalid: -1|
|distance|distance|Number(float)|When running sub-applications: distance traveled since last section (m)|0-5000|
|latitude|lat|Number(float)|When running sub-applications: latitude|-180 - 180|
|longitude|lng|Number(float)|When running sub-applications: longitude|-90 - 90|
|appMeasurementStatus|app\_measurement\_status|Number(int)|sub-app operation status flag|0: Non-APP measurement 2: Run measurement in progress 3: Run paused 8: Drive measurement in progress 12: Drive paused 32: Focus measurement 48: Focus paused|
|nptMean `Static`|npt\_av|Number(float)|NPT (effective blink rate) average| -0.999 - 0.999 |
|nptMedian`Static`|npt\_med|Number(float)|NPT(Effective blink rate) median| -0.999 - 0.999 |
|nptSD `Static`|npt\_sd|Number(float)|NPT standard deviation| 0-0.999 |
|blinkWidthMean `Static`|bkw\_av|Number(float)|Blink speed mean(mSec)| 0-300 |
|blinkStrengthTotal `Static`|bkh\_sum|Number(float)|Blink strength sum(uV-equiv) | 0-10000.0 |
|blinkStrengthMax `Static`|bkh\_max|Number(float)|Blink strength max(uV-equiv) | 0-1000.0 |
|blinkStrengthSD `Static`|bkh\_sd|Number(float)|Blink strength sd(uV-equiv) | 0.00-1000.0 |
|blinkStrengthMean `Static`|bkh\_av|Number(float)|Blink strength mean| 0-1000.0 |
|blinkIntervalTotal `Static`|bki\_sum|Number(float)|Blink interval sum(s)| 0-120.0|
|blinkIntervalCount `Static`|bki\_n|Number(int)|Number of blink interval |0-120|
|blinkIntervalMean `Static`|bki\_av|Number(float)|Blink interval mean | 0.00-60.00 |
|blinkCount `Static`|bk\_n|Number(int)|Number of blink(filtered with 35<=Strength<=250、90<=Speed<=250)|0-120|
|blinkCountRaw `Static`|rbk\_n|Number(int)|Number of blink(Raw, no filter)| 0-255 |
|eyeMoveUpCount `Static`|re\_u|Number(int)|Eye movement count(up, Raw)| 0-255 |
|eyeMoveDownCount `Static`|re\_d|Number(int)|Eye movement count(down, Raw)| 0-255 |
|eyeMoveRightCount `Static`|re\_r|Number(int)|Eye movement count(right, Raw)| 0-255 |
|eyeMoveLeftCount `Static`|re\_l|Number(int)|Eye movement count(Left, Raw)| 0-255 |
|cummulativeTime|cum\_time|Number(int)|Cumulative normalizing time(s)| 0-4294967296 |
|blinkIntervalMeanWA `Static`|bki\_av\_wa|Number(float)|Normalized blink interval mean| 0.00-60.00 |
|blinkStrengtnSDWA `Static`|bkh\_sd\_wa|Number(float)|Normalized blink strength sd| 0.00-1000.0 |
|blinkStrengthMeanWA `Static`|bkh\_av\_wa|Number(float)|Normalized blink strength mean| 0-1000.0 |
|nptMeanWA `Static`|npt\_av\_wa|Number(float)|Normalized NPT mean| -0.999 - 0.999 |
|nptSDWA `Static`|npt\_sd\_wa|Number(float)|Normalized NPT sd| 0-0.999 |
|blinkWidthMeanWA `Static`|bkw\_av\_wa|Number(float)|Normalized blink speed mean| 0-300 |
|nptScore `Static`|sc\_npt|Number(float)|Sleepiness sub-index: NPT score|0-100, Invalid: -1|
|btsScore `Static`|sc\_bts|Number(float)|Sleepiness sub-index: BTS score|0-100, Invalid: -1|
|lbsScore `Static`|sc\_lbs|Number(float)|Sleepiness sub-index: LBS score|0-100, Invalid: -1|
|legacyZone `Static`|zone|Number(int)|RT algorithm in operation: zone value|0-100, Invalid: -1|
|legacyFocus `Static`|focus|Number(int)|RT algorithm in operation: focus value|0-100, Invalid: -1|
|legacyCalm `Static`|calm|Number(int)|RT algorithm in operation: calm value|0-100, Invalid: -1|
|legacyPosture `Static`|posture|Number(int)|RT algorithm in operation: posture value|0-100, Invalid: -1|
|cursor|cursor|String|Starting position to retrieve the next record if any.|

## 60-second interval data (summaryData)

This mode is suitable for monitoring status changes over a long period of time, allowing data to be acquired once per minute.

| iOS/Android/Logger | API/Nodejs |Type(API/CSV)| Description | Value Range |
|:---|:---:|:---:|:---|:---:|
| date | <i>N/A</i> | String | 日付 | 1970-01-01T09:00:00 - 2106-02-07T06:28:16 |
| <i>N/A</i> | ut | Number(int)|UNIX TIME | 0-4294967296 |
| validDuration | val_s | Number(float)|Measuring seconds(s) | 0.00-60.00 |
| noiseDuration | nis_s | Number(float)|Electrode nsoise seconds(s) | 0.00-60.00 |
| fitDuration | wea_s | Number(float)|Wearing seconds(s) | 0.00-60.00 |
| walkingDuration | stp_s | Number(float)|Walking seconds(s) | 0.00-60.00 |
| powerLeft | bl | Number(int)|Battery level | 0: In charging<br />1:Empty-5:Full|
| eyeMoveHorizontal `Static` | ems_rl | Number(int)|Small eye movement count(right, left) | 0-255 |
| eyeMoveVertical `Static` | ems_ud | Number(int)|Small eye movement count(up, down) | 0-255 |
| eyeMoveBigHorizontal `Static` | eml_rl | Number(int)|Large eye movement count(right, left) | 0-255 |
| eyeMoveBigVertical `Static` | eml_ud | Number(int)|Large eye movement count(up, down) | 0-255 |
| headMoveVerticalCount | hm_po |Number(int)| Number of neck flips (vertical) | 0-255 |
| headMoveHorizontalCount | hm_yo | Number(int)|Number of neck flips (horizontal)| 0-255 |
| walkingVibrationRightX `Gait` | sa_xr | Number(float)|Walking vibration X(cm,right foot)| 0.00-16.00 |
| walkingVibrationLeftX `Gait` | sa_xl | Number(float)|Walking vibration X(cm,left foot)| 0.00-16.00 |
| walkingVibrationRightY `Gait` | sa_yr | Number(float)|Walking vibration Y(cm,right foot)| 0.00-16.00 |
| walkingVibrationLeftY `Gait` | sa_yl | Number(float)|Walking vibration Y(cm,left foot)| 0.00-16.00 |
| walkingVibrationRightZ `Gait` | sa_zr | Number(float)|Walking vibration Z(cm,right foot)| 0.00-16.00 |
| walkingVibrationLeftZ `Gait` | sa_zl | Number(float)|Walking vibration Z(cm,left foot)| 0.00-16.00 |
| landingStrengthRightMaxAvg `Gait` | st_r | Number(float)|Maximum landing strength average (G, right foot)| 0.00-8.00 |
| landingStrengthLeftMaxAvg `Gait` | st_l | Number(float)|Maximum landing strength average (G, left foot)| 0.00-8.00 |
| slopeXAvg | tl_xav | Number(float)|Mean tilt X (degree)| -180.00-180.00 |
| slopeYAvg | tl_yav | Number(float)|Mean tilt Y (degree)| -180.00-180.00 |
| slopeXStd | tl_xsd | Number(float)|Standard deviation of tilt X (degree)| 0-655.36 |
| slopeYStd | tl_ysd | Number(float)|Standard deviation of tilt Y (degree)| 0-655.36 |
| highSpeedStepsNum `Gait` | stp_fst | Number(int)|Step count(High 280-370ms)| 0-255 |
| middleSpeedStepsNum `Gait` | stp_mid | Number(int)|Step count(Mid 380-440ms)| 0-255 |
| lowSpeedStepsNum `Gait` | stp_slw | Number(int)|Step count(Low 450-590ms)| 0-255 |
| ultraLowSpeedStepsNum `Gait` | stp_vsl | Number(int)|Step count(Extra-low 600-1000ms)| 0-255 |
| nptAvgWeak `Static` `weak cleansing` | lc_npt_av | Number(float)|NPT (effective blink rate) average| -0.256 - 0.256 |
| weakBlinkSpeedAvg `Static` `weak cleansing` | lc_bkw_av | Number(int)|Blink speed mean(mSec) | 50-306 |
| weakBlinkSpeedStd `Static` `weak cleansing` | lc_bkw_sd | Number(float)|Blink speed sd(mSec) | 0-51.2 |
| weakBlinkStrengthAvg `Static` `weak cleansing` | lc_bkh_av | Number(int)|Blink strength mean(uV-equiv) | 0-512 |
| weakBlinkStrengthStd `Static` `weak cleansing` | lc_bkh_sd | Number(float)|Blink strength sd(uV-equiv) | 0-51.2 |
| weakBlinkCount `Static` `weak cleansing` | lc_bk_n | Number(int)|Number of blink | 0-255 |
| weakBlinkSwarmCount `Static` `weak cleansing` | lc_bkg_n | Number(int)|Number of times multiple blinks occurred within 1s | 0-255 |
| weakBlinkIntervalAvg `Static` `weak cleansing` | lc_bki_av | Number(float)|Blink interval mean(s)  *RMS average from FW2.2.0 | 0-51.2 |
| weakBlinkIntervalCount `Static` `weak cleansing` | lc_bki_n | Number(int)|Number of blink interval | 0-255 |
| nptAvgStrong `Static` `strong cleansing` | sc_npt_av | Number(float)|NPT (effective blink rate) average | -0.256 - 0.256 |
| strongBlinkSpeedAvg `Static` `strong cleansing` | sc_bkw_av | Number(int)|Blink speed mean(mSec) | 50-306 |
| strongBlinkSpeedStd `Static` `strong cleansing` | sc_bkw_sd | Number(float)|Blink speed sd(mSec) | 0-51.2 |
| strongBlinkStrengthAvg `Static` `strong cleansing` | sc_bkh_av | Number(int)|Blink strength mean(uV-equiv) | 0-512 |
| strongBlinkStrengthStd `Static` `strong cleansing` | sc_bkh_sd | Number(float)|Blink strength sd(uV-equiv) | 0-51.2 |
| strongBlinkCount `Static` `strong cleansing` | sc_bk_n | Number(int)|Number of blink | 0-255 |
| strongBlinkSwarmCount `Static` `strong cleansing` | sc_bkg_n | Number(int)|Number of times multiple blinks occurred within 1s | 0-255 |
| strongBlinkIntervalAvg `Static` `strong cleansing` | sc_bki_av | Number(float)|Blink interval mean(s) *RMS average from FW2.2.0 | 0-51.2 |
| strongBlinkIntervalCount `Static` `strong cleansing` | sc_bki_n | Number(int)|Number of blink interval | 0-255 |
|cursor|cursor|String|Starting position to retrieve the next record if any.| null / (string)|

## Fast-speed head movement data(fastHeadMotion)

This event counts the first direction and number of times when the head is turned left, right, up or down in a cycle of about 0.2 to 0.9 seconds. The number of times is counted up when the head moves back and forth in succession, and only the final value is returned when the continuous motion stops. **The gyro sensor must be turned on to determine by rotation speed**. This data is only generated when JINS MEME and a smartphone are connected via Bluetooth.

| Name | Type | Description | Value Range |
|:---|:---:|:---|:---:|
| date | String | Event occurrence datetime | 1970-01-01 09:00:00 - 2106-02-07 06:28:16 |
| type | String | Event Type| fastHeadMotion(fixed value) |
| subType | String | direction | right, left, up, down |
| value | Number | Number of times (1 for one way) | 1-65535 |

## Slow-speed head movement data(Tilt, slowHeadTilting)

This event occurs when the head is tilted from a straight position to the left or right or back and forth at least 45° and maintained for less than 1 second. This data is only generated when JINS MEME and a smartphone are connected via Bluetooth.

| Name | Type | Description | Value Range |
|:---|:---:|:---|:---:|
| date | String | Event occurrence datetime | 1970-01-01 09:00:00 - 2106-02-07 06:28:16 |
| type | String | Event Type| slowHeadTilting(fixed value) |
| subType | String | direction | right, left, forward, backward |
| value | Number | Start/end flag | 1(Transition from straight to tilted)<br /> -1(Transition from tilted to straight) |

## Slow-speed head movement data(Rotation, slowHeadRotation)

This event is the count of the number of times you make one round every 3-5 seconds while tilting your head at least 45° (start judging from the downward direction in the forward direction). This data is only generated when JINS MEME and a smartphone are connected via Bluetooth.

| Name | Type | Description | Value Range |
|:---|:---:|:---|:---:|
| date | String | Event occurrence datetime | 1970-01-01 09:00:00 - 2106-02-07 06:28:16 |
| type | String | Event Type| slowHeadRotation(fixed value) |
| subType | String | direction | clockwise, anticlockwise |
| value | Number | number of rotations | 1 |