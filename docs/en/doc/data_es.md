# Standard Logger Data definition<Badge type="tip" text="Standard" />

## Axis Definition of Motion Indicators

![axes definition](/images/axisdef.png)

Regarding the angle, drift (value changes at a constant rate) and hump (small bumps in the value) occur due to the characteristics of the sensor.

## Static and Gait indicators

- Among the data that can be measured by JINS MEME, the `Static` indicator is an indicator that is valid only when there is no walking, touching the glasses with the hands, chewing, etc. When data is measured under conditions other than those mentioned above, it may be detected as a noise flag, output inaccurate values, or not detected. Please note that when measurement is made under conditions other than those mentioned above, it may be detected as a noise flag, output inaccurate values, or not be detected. summaryData is cleansed to remove any suspicious signals.
- The `Gait` indicator in the data that can be measured by JINS MEME is the data that can be obtained while walking. Please note that JINS MEME cannot accurately measure vibration and movement patterns other than walking.

## Timestamp Format

- Timestamps are provided in RFC3339 format.
- If the string ends with Z, it is in UTC (Coordinated Universal Time, Japan Standard Time -9 hours).
- If the string ends with +0900, it is in JST (Japan Standard Time, UTC+9 hours).

## 20Hz data(currentData)

Data can be acquired at approximately 20 Hz. This mode is suitable for immediate acquisition and analysis of precise data such as controller. This data is generated only when JINS MEME and a smartphone are connected via Bluetooth.

| item name | Type(iOS/Android) | Type(Nodejs) | Description | Value Range |
|:---|:---:|:---:|:---|:---:|
|date / date|String|String|This is a timestamp assigned by the receiving device.|1970-01-01T00:00:00Z - 2099-12-31T23:59:59|
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

|Logger/API item name|Type(API/CSV)|Description|Value Range|
|:---|:---|:---|:---:|
|date / date|String|The measurement date and time indicate the period summarized from 15 seconds before up to this timestamp. The 15-second intervals are not based on when the measurement button is pressed, but are counted in 15-second increments from when the connection starts. Data is recorded at each point where summarization occurs from the start to the end of measurement.|1970-01-01T00:00:00Z - 2099-12-31T23:59:59|
|stepCount / stp `Gait`|Number(int)|Step count|0-255|
|stepCadence / cad `Gait`|Number(float)|Cadence(pitch)| 0-255 |
|isStill / isl|Boolean / Number(int)|Still (not wearing) judgment| true: not wearing (still) false: wearing (not still)|
|noiseTime / nis_time|Number(float)|noise time|0.00 - 15.00|
|isValid / vld|Boolean / Number(int)|Data validity at rest (noise less than 3 seconds and steps less than 5)| true: valid false: invalid|
|xMean / tl_xav|Number(float)|Mean tilt X (degree) | -180.00-180.00 |
|xSD / tl_xsd|Number(float)|Standard deviation of tilt X (degree) | 0-655.36 |
|YMean / tl_yav|Number(float)|Mean tilt Y (degree) | -180.00-180.00 |
|ySD / tl_ysd|Number(float)|Standard deviation of tilt Y (degree) | 0-655.36 |
|pitchOnewayCount / hm_po|Number(int)|Number of neck flips (back-forth)| 0-255 |
|pitchRoundCount / hm_pr|Number(int)|Number of slow neck flips (back-forth)| 0-255 |
|yawOnewayCount / hm_yo|Number(int)|Number of neck flips (right-left)| 0-255 |
|yawRoundCount / hm_yr|Number(int)|Number of slow neck flips (right-left)| 0-255 |
|xRightStepAmplitude / sa_xr `Gait`|Number(float)|Walking vibration X(cm,right foot)| 0.00-16.00 |
|xLeftStepAmplitude / sa_xl `Gait`|Number(float)|Walking vibration X(cm,left foot)| 0.00-16.00 |
|yRightStepAmplitude / sa_yr `Gait`|Number(float)|Walking vibration Y(cm,right foot)| 0.00-16.00 |
|yLeftStepAmplitude / sa_yl `Gait`|Number(float)|Walking vibration Y(cm,left foot)| 0.00-16.00 |
|zRightStepAmplitude / sa_zr `Gait`|Number(float)|Walking vibration Z(cm,right foot)| 0.00-16.00 |
|zLeftStepAmplitude / sa_zl `Gait`|Number(float)|Walking vibration Z(cm,left foot)| 0.00-16.00 |
|zLeftStepAmplitudeCal / sa_zrc `Gait`|Number(float)|Walking vibration Z corrected (cm,right foot)| 0.00-20.00 |
|zLeftStepAmplitudeCal / sa_zlc `Gait`|Number(float)|Walking vibration Z corrected (cm,left foot)| 0.00-20.00 |
|maxRightStepAcceleration / st_r `Gait`|Number(float)|Maximum landing strength average (G, right foot)| 0.00-8.00 |
|maxLeftStepAcceleration / st_l `Gait`|Number(float)|Maximum landing strength average (G, left foot)| 0.00-8.00 |
|sleepScoreStandard / sc_slp_std `Static`|Number(float)|Low wakefulness score (normal), index of "eye trance" based on blink strength/rate and partial blink interval| 0(high wakefulness)-100(sleepy), invalid: -1|
|sleepScore / sc_slp `Static`|Number(float)|Corrected for low alertness score (when driving) and driving posture (looking straight ahead)| 0 (high wakefulness) -100 (sleepy), Invalid: -1|
|focusScore / sc_fcs `Static`|Number(float)|Indicates "sustained attention to a task" using immersion score and blink interval| 0(low immersion)-100(high immersion), Inactive: -1|
|tensionScore / sc_tsn `Static`|Number(float)|Tension score, an index of "eyes wide open" using blink strength| 0(low tension)-100(high tension), Invalid: -1|
|stabilityScore / sc_clm `Static`|Number(float)|Stability score, an index of "stable state without external or internal stimuli" using blink strength| 0(not calm)-100(calm), Invalid: -1|
|distance / distance|Number(float)|When running sub-applications: distance traveled since last section (m)|0-5000|
|latitude / lat|Number(float)|When running sub-applications: latitude|-180 - 180|
|longitude / lng|Number(float)|When running sub-applications: longitude|-90 - 90|
|appMeasurementStatus / app_measurement_status|Number(int)|sub-app operation status flag|0: Non-APP measurement 2: Run measurement in progress 3: Run paused 8: Drive measurement in progress 12: Drive paused 32: Focus measurement 48: Focus paused|
|nptMean / npt_av `Static`|Number(float)|NPT (effective blink rate) average| -0.999 - 0.999 |
|nptMedian / npt_med `Static`|Number(float)|NPT(Effective blink rate) median| -0.999 - 0.999 |
|nptSD / npt_sd `Static`|Number(float)|NPT standard deviation| 0-0.999 |
|blinkWidthMean / bkw_av `Static`|Number(float)|Blink speed mean(mSec)| 0-300 |
|blinkStrengthTotal / bkh_sum `Static`|Number(float)|Blink strength sum(uV-equiv) | 0-10000.0 |
|blinkStrengthMax / bkh_max `Static`|Number(float)|Blink strength max(uV-equiv) | 0-1000.0 |
|blinkStrengthSD / bkh_sd `Static`|Number(float)|Blink strength sd(uV-equiv) | 0.00-1000.0 |
|blinkStrengthMean / bkh_av `Static`|Number(float)|Blink strength mean| 0-1000.0 |
|blinkIntervalTotal / bki_sum `Static`|Number(float)|Blink interval sum(s)| 0-120.0|
|blinkIntervalCount / bki_n `Static`|Number(int)|Number of blink interval |0-120|
|blinkIntervalMean / bki_av `Static`|Number(float)|Blink interval mean | 0.00-60.00 |
|blinkCount / bk_n `Static`|Number(int)|Number of blink(filtered with 35<=Strength<=250、90<=Speed<=250)|0-120|
|blinkCountRaw / rbk_n `Static`|Number(int)|Number of blink(Raw, no filter)| 0-255 |
|eyeMoveUpCount / re_u `Static`|Number(int)|Eye movement count(up, Raw)| 0-255 |
|eyeMoveDownCount / re_d `Static`|Number(int)|Eye movement count(down, Raw)| 0-255 |
|eyeMoveRightCount / re_r `Static`|Number(int)|Eye movement count(right, Raw)| 0-255 |
|eyeMoveLeftCount / re_l `Static`|Number(int)|Eye movement count(Left, Raw)| 0-255 |
|cummulativeTime / cum_time|Number(int)|Cumulative normalizing time(s)| 0-4294967296 |
|blinkIntervalMeanWA / bki_av_wa `Static`|Number(float)|Normalized blink interval mean| 0.00-60.00 |
|blinkStrengtnSDWA / bkh_sd_wa `Static`|Number(float)|Normalized blink strength sd| 0.00-1000.0 |
|blinkStrengthMeanWA / bkh_av_wa `Static`|Number(float)|Normalized blink strength mean| 0-1000.0 |
|nptMeanWA / npt_av_wa `Static`|Number(float)|Normalized NPT mean| -0.999 - 0.999 |
|nptSDWA / npt_sd_wa `Static`|Number(float)|Normalized NPT sd| 0-0.999 |
|blinkWidthMeanWA / bkw_av_wa `Static`|Number(float)|Normalized blink speed mean| 0-300 |
|nptScore / sc_npt `Static`|Number(float)|Sleepiness sub-index: NPT score|0-100, Invalid: -1|
|btsScore / sc_bts `Static`|Number(float)|Sleepiness sub-index: BTS score|0-100, Invalid: -1|
|lbsScore / sc_lbs `Static`|Number(float)|Sleepiness sub-index: LBS score|0-100, Invalid: -1|
|legacyZone / zone `Static`|Number(int)|RT algorithm in operation: zone value|0-100, Invalid: -1|
|legacyFocus / focus `Static`|Number(int)|RT algorithm in operation: focus value|0-100, Invalid: -1|
|legacyCalm / calm `Static`|Number(int)|RT algorithm in operation: calm value|0-100, Invalid: -1|
|legacyPosture / posture `Static`|Number(int)|RT algorithm in operation: posture value|0-100, Invalid: -1|
|cursor / cursor|String|Starting position to retrieve the next record if any.| random string |

## 60-second interval data (summaryData)

This mode is suitable for monitoring status changes over a long period of time, allowing data to be acquired once per minute.

| Logger/API item name|Type(API/CSV)|Description|Value Range|
|:---|:---|:---|:---:|
|date|String|Timestamp, CSV only. The timing of the intervals is based on the minute set in the JINS MEME RTC. The data for the previous 1 minute is summarized, and data is recorded at each point where summarization occurs from the start to the end of measurement.|1970-01-01T00:00:00Z - 2099-12-31T23:59:59|
|ut|Number(int)|UNIX TIME, API only|0-4294967296|
|validDuration / val_s|Number(float)|Measuring seconds(s)|0.00-60.00|
|noiseDuration / nis_s|Number(float)|Electrode nsoise seconds(s)|0.00-60.00|
|fitDuration / wea_s|Number(float)|Wearing seconds(s)|0.00-60.00|
|walkingDuration / stp_s|Number(float)|Walking seconds(s)|0.00-60.00|
|powerLeft / bl|Number(int)|Battery level|0: In charging<br />1:Empty-5:Full|
|eyeMoveHorizontal / ems_rl `Static`|Number(int)|Small eye movement count(right, left)|0-255|
|eyeMoveVertical / ems_ud `Static`|Number(int)|Small eye movement count(up, down)|0-255|
|eyeMoveBigHorizontal / eml_rl `Static`|Number(int)|Large eye movement count(right, left)|0-255|
|eyeMoveBigVertical / eml_ud `Static`|Number(int)|Large eye movement count(up, down)|0-255|
|headMoveVerticalCount / hm_po|Number(int)|Number of neck flips (vertical)|0-255|
|headMoveHorizontalCount / hm_yo|Number(int)|Number of neck flips (horizontal)|0-255|
|walkingVibrationRightX / sa_xr `Gait`|Number(float)|Walking vibration X(cm,right foot)|0.00-16.00|
|walkingVibrationLeftX / sa_xl `Gait`|Number(float)|Walking vibration X(cm,left foot)|0.00-16.00|
|walkingVibrationRightY / sa_yr `Gait`|Number(float)|Walking vibration Y(cm,right foot)|0.00-16.00|
|walkingVibrationLeftY / sa_yl `Gait`|Number(float)|Walking vibration Y(cm,left foot)|0.00-16.00|
|walkingVibrationRightZ / sa_zr `Gait`|Number(float)|Walking vibration Z(cm,right foot)|0.00-16.00|
|walkingVibrationLeftZ / sa_zl `Gait`|Number(float)|Walking vibration Z(cm,left foot)|0.00-16.00|
|landingStrengthRightMaxAvg / st_r `Gait`|Number(float)|Maximum landing strength average (G, right foot)|0.00-8.00|
|landingStrengthLeftMaxAvg / st_l `Gait`|Number(float)|Maximum landing strength average (G, left foot)|0.00-8.00|
|slopeXAvg / tl_xav|Number(float)|Mean tilt X (degree)|-180.00-180.00|
|slopeYAvg / tl_yav|Number(float)|Mean tilt Y (degree)|-180.00-180.00|
|slopeXStd / tl_xsd|Number(float)|Standard deviation of tilt X (degree)|0-655.36|
|slopeYStd / tl_ysd|Number(float)|Standard deviation of tilt Y (degree)|0-655.36|
|highSpeedStepsNum / stp_fst `Gait`|Number(int)|Step count(High 280-370ms)|0-255|
|middleSpeedStepsNum / stp_mid `Gait`|Number(int)|Step count(Mid 380-440ms)|0-255|
|lowSpeedStepsNum / stp_slw `Gait`|Number(int)|Step count(Low 450-590ms)|0-255|
|ultraLowSpeedStepsNum / stp_vsl `Gait`|Number(int)|Step count(Extra-low 600-1000ms)|0-255|
|nptAvgWeak / lc_npt_av `Static` `weak cleansing`|Number(float)|NPT (effective blink rate) average|-0.256 - 0.256|
|weakBlinkSpeedAvg / lc_bkw_av `Static` `weak cleansing`|Number(int)|Blink speed mean(mSec)|50-306|
|weakBlinkSpeedStd / lc_bkw_sd `Static` `weak cleansing`|Number(float)|Blink speed sd(mSec)|0-51.2|
|weakBlinkStrengthAvg / lc_bkh_av `Static` `weak cleansing`|Number(int)|Blink strength mean(uV-equiv)|0-512|
|weakBlinkStrengthStd / lc_bkh_sd `Static` `weak cleansing`|Number(float)|Blink strength sd(uV-equiv)|0-51.2|
|weakBlinkCount / lc_bk_n `Static` `weak cleansing`|Number(int)|Number of blink|0-255|
|weakBlinkSwarmCount / lc_bkg_n `Static` `weak cleansing`|Number(int)|Number of times multiple blinks occurred within 1s|0-255|
|weakBlinkIntervalAvg / lc_bki_av `Static` `weak cleansing`|Number(float)|Blink interval mean(s)  *RMS average from FW2.2.0|0-51.2|
|weakBlinkIntervalCount / lc_bki_n `Static` `weak cleansing`|Number(int)|Number of blink interval|0-255|
|nptAvgStrong / sc_npt_av `Static` `strong cleansing`|Number(float)|NPT (effective blink rate) average|-0.256 - 0.256|
|strongBlinkSpeedAvg / sc_bkw_av `Static` `strong cleansing`|Number(int)|Blink speed mean(mSec)|50-306|
|strongBlinkSpeedStd / sc_bkw_sd `Static` `strong cleansing`|Number(float)|Blink speed sd(mSec)|0-51.2|
|strongBlinkStrengthAvg / sc_bkh_av `Static` `strong cleansing`|Number(int)|Blink strength mean(uV-equiv)|0-512|
|strongBlinkStrengthStd / sc_bkh_sd `Static` `strong cleansing`|Number(float)|Blink strength sd(uV-equiv)|0-51.2|
|strongBlinkCount / sc_bk_n `Static` `strong cleansing`|Number(int)|Number of blink|0-255|
|strongBlinkSwarmCount / sc_bkg_n `Static` `strong cleansing`|Number(int)|Number of times multiple blinks occurred within 1s|0-255|
|strongBlinkIntervalAvg / sc_bki_av `Static` `strong cleansing`|Number(float)|Blink interval mean(s) *RMS average from FW2.2.0|0-51.2|
|strongBlinkIntervalCount / sc_bki_n `Static` `strong cleansing`|Number(int)|Number of blink interval|0-255|
|cursor / cursor|String|Starting position to retrieve the next record if any.| random string |

## Fast-speed head movement data(fastHeadMotion)

This event counts the first direction and number of times when the head is turned left, right, up or down in a cycle of about 0.2 to 0.9 seconds. The number of times is counted up when the head moves back and forth in succession, and only the final value is returned when the continuous motion stops. **The gyro sensor must be turned on to determine by rotation speed**. This data is only generated when JINS MEME and a smartphone are connected via Bluetooth.

| Name | Type | Description | Value Range |
|:---|:---:|:---|:---:|
| date | String | Event occurrence datetime | 1970-01-01T00:00:00Z - 2099-12-31T23:59:59|
| type | String | Event Type| fastHeadMotion(fixed value) |
| subType | String | direction | right, left, up, down |
| value | Number | Number of times (1 for one way) | 1-65535 |

## Slow-speed head movement data(Tilt, slowHeadTilting)

This event occurs when the head is tilted from a straight position to the left or right or back and forth at least 45° and maintained for less than 1 second. This data is only generated when JINS MEME and a smartphone are connected via Bluetooth.

| Name | Type | Description | Value Range |
|:---|:---:|:---|:---:|
| date | String | Event occurrence datetime | 1970-01-01T00:00:00Z - 2099-12-31T23:59:59|
| type | String | Event Type| slowHeadTilting(fixed value) |
| subType | String | direction | right, left, forward, backward |
| value | Number | Start/end flag | 1(Transition from straight to tilted)<br /> -1(Transition from tilted to straight) |

## Slow-speed head movement data(Rotation, slowHeadRotation)

This event is the count of the number of times you make one round every 3-5 seconds while tilting your head at least 45° (start judging from the downward direction in the forward direction). This data is only generated when JINS MEME and a smartphone are connected via Bluetooth.

| Name | Type | Description | Value Range |
|:---|:---:|:---|:---:|
| date | String | Event occurrence datetime | 1970-01-01T00:00:00Z - 2099-12-31T23:59:59|
| type | String | Event Type| slowHeadRotation(fixed value) |
| subType | String | direction | clockwise, anticlockwise |
| value | Number | number of rotations | 1 |