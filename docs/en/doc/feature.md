# Data processing details<Badge type="tip" text="Standard" />

## Generation of 20Hz data in JINS MEME

This section explains the process from data acquisition by sensors to conversion to 20 Hz data.

JINS MEME is equipped with EOG sensors to detect blinking and eye movement, and acceleration and angular rate sensors to detect movement. Each sensor acquires data at 100hz and performs the following primary detection

### Blink and eye movement detection

When blinking, the EOG signal has a sharp peak and overshoot as shown below. After the signal is detected by the electrode, (1) impedance stabilization, (2) amplification by a differential amplifier circuit by a factor of approximately 1000, and (3) a 10 Hz low pass filter for power supply noise suppression are performed by a fixed analog circuit (not configurable), so the eye movement shows a gently converging waveform instead of a step.
The peak height from the baseline is called the blink strength, and the peak width (time) from the point where it exceeds the threshold line until it falls below it is called the blink speed. The strength increases when the eyes are wide open or when the eyelids are opening and closing at a high speed, and is correlated with the margin reflex distance. The velocity represents the approximate time the eyes are closed (eye closure time). In the case of eye movement, the signal is a slowly decaying signal with no overshoot.

![](/images/blink_signal.png)

The blink detection rate of JINS MEME is more than 95% when it is stationary and there is no noise, but the rate decreases when it is not stationary or in environments where the glasses are likely to shift.

### Detection of walking

When walking or running, the following pattern occurs in the acceleration signal. The walk flag is set 0.15-0.25 seconds after the feet touch the ground.

![](/images/walking_flag.png)

### Detection of noise condition

EOG signals are measured with dry electrodes between the eyebrows and on the nosepiece. Therefore, the following EOG signals are generated when the user exercises, frowns, eats, touches or reapplies the spectacles, etc. In this state, a noise condition flag is set. The noise condition flag will remain up for about 1 second after the signal exceeds a specific signal range. It is recommended not to use the data in the noise state because the data of blinking and eye movement are buried and unreliable.

![](/images/noise_flag.png)

### Detection of wearing condition

When there is movement in the acceleration signal, the system judges the glasses as worn, and when there is almost no movement, the system judges them as un-worn.

- When the glasses are placed on a stable desk, they are judged as not worn more than 90% of the time.
- When you are in a deskwork, the glasses are judged as worn, but if you do not move your head at all, there is a 30% chance that the glasses will be judged as not worn.
- Even if you are not wearing the glasses, you will be judged as wearing them when you are on a train, in a car, or walking, because the glasses are in continuous motion.

### Summarization to 20Hz data

The above blink and eye movement events (0 output when not occurred), acceleration and angle are thinned out from 100Hz to 20Hz and the data is output.

### Sleep state

When the glasses are turned upside down (about ±45°), the Bluetooth connection is disconnected and data acquisition by the sensor stops. Please note that data cannot be completely acquired in this state.

![](/images/sleep_state.png)

### Angle Calculation

The MEME app calculates from acceleration data, and the Logger app calculates from gyro sensor data as reference SDK values.

#### Angle based on acceleration sensor data

- This type of angle is only displayed on the screen of the MEME application, so if you need an equivalent value using a logger, etc., please perform your own calculations.
- The roll (left/right tilt)/pitch (forward/backward tilt) is calculated using averaged acceleration (accX/accY/accZ) by using gravity acceleration.
- Zero point correction and drift correction are not required.
- It is not correct for rapid rotation, lateral G-force (sudden acceleration or deceleration in a car), or rapid running.
- Yaw angle (rotation angle around the neck bone) cannot be calculated.
- Acceleration averaging is calculated with a moving average of about 0.5s-1.0s or a weighted average with a recent coefficient of about 0.05-0.1, depending on the application.
- The [calcTilt section of another article](https://qiita.com/komde/items/bd682da3d3e11aab325a) describes a sample logic

#### Angle based on gyro sensor data

- Requires 0-point and drift compensation to suit the application (using the sensor's reference SDK values as-is)
- Suitable for use with rapid rotation angles

## Calculation of 15/60 second interval data

### Calculation of blink interval

Blink intervals that do not include noise intervals in the middle of the blink interval will be counted.

![](/images/blink_interval.png)

### Computation of Blink Statistics

- The summarization of blink strength, speed, and interval into 15/60 second interval data is not a grouping of events that occurred during the interval, but rather a processing on a buffer of the most recent events. The buffer length is set to approximately the average number of events in an interval + α. Although some events before the interval may remain and not all of the interval data may remain, this processing is done because the emphasis is on not missing data.
- In order to avoid being dragged down by abnormal values, peaks that exceed a specified threshold may be excluded when adding buffers, and data near the maximum and minimum values in a buffer may be omitted when tabulating.

![](/images/buffering.png)

The characteristics of each indicator are as follows

- Blink Strength Average: 
    - This is the average of the blink strength within the interval.
    - It is used as a source of tension/arousal index, as blinks are more intense when eyes are wide open or energetic.
- Blink strength standard deviation
    - This is the standard deviation of blink strength within an interval.
    - It is used as a stability index because the change of blink strength is strongly dependent on external stimuli and mental flutter.
- Blink Speed Average
    - Average of blink speed in the interval
    - It is used as a wakefulness index because it is affected by the phenomenon that the eyes become drowsy due to fatigue or drowsiness.
- Blink interval average
    - The average of the number of seconds between blinks in a noise-free interval.
    - Used as a source of immersion index as it is known that immersion in a task reduces blinking
- Blink frequency
    - The number of blinks used in the calculation.
    - Since blinks occurring within the noise time cannot be captured, it is recommended to use the blink interval for applications such as time variation of blink frequency

The total value and the number of data may be left as the basis for each indicator and calculation.

### Calculation of Body Indicator

The following operations are performed when **Summarize** is applied to 15/60 second interval data.

- Forward and Lateral Tilt Angle
    - The absolute value (deg) of the head tilt is calculated from the gravitational acceleration in the forward and lateral directions, respectively.
    - The moving average of each axis is taken to reduce the vibration component of less than 0.5 seconds, and then the angle is calculated using the atan() function.
- Posture stability
    - The standard deviation (deg) of the forward and lateral tilt angles at 20 Hz is calculated after reducing the above vibration components.
- Vibration
    - Average of all steps in a section of the vibration width (cm) per step when walking/running, calculated on the X/Y/Z axes, respectively.
    - The vibration width is estimated from the vibration pattern, not from first-principles calculations based on acceleration, so it may not be calculated correctly if the waveform is different from that of walking and running.
- Pitch and number of steps
    - Pitch and number of steps per minute and pitch (spm) are calculated. 
    - Takes the sum of the walking flags detected in the previous step
- Landing Strength
    - The maximum landing impact (G) for each step during walking and running is calculated as the average of all steps in the section
- Head movement
    - Counts the number of times the head is moved horizontally and vertically
    - When the acceleration peak of 0.07-0.3G is detected, it is counted as one time, and the number of counts in the interval is recorded.
    - It is easily influenced by the "state of attention to multiple objects at the same time" and is strongly linked to the level of attention and communication.

Indicators used in the JINS MEME app is not disclosed.

- Toral Good Time(Body)
  - When stationary, this is an integrated index of forward and lateral tilt angles. The score increases if the body is not leaning.
  - When walking, it is an integrated index of forward tilt, lateral tilt angle, and vibration width (X/Z). Score increases when walking without leaning and with less vibration.

### Calculations of Mind Indicator 

The following operations are performed when processing **indexation** to 15-second interval data in the MEME app/Logger app.

- Concentration/Immersion (sc_fcs)
    - Principle measures (n=10-20) + field measures (n=50-100) are performed and crosschecked against the Kraepelin test.
    - The blink interval average is used to index the "state of sustained attention to a task".
    - A blink interval average value that is longer than the average value is judged to indicate a high level of immersion.
    - Score guidelines
        - 35: Average of blink interval is about 1/3 of normal (low)
        - 45: Average of blink interval is equal to normal
        - 80: Average of blink interval is about 4 times higher than normal (high)
        **Normal** is determined by taking into account the general user average and the average around the average within a few hours.
- Stability (sc_clm)
    - Only principle measurements (n=10-20) are performed
    - The average blink strength is used to index "stability without external or internal stimuli".
    - The standard deviation of blink strength is normalized by the average value of the most recent blink strength, and the score is calculated as a negative linear expression of the square of the standard deviation of blink strength.
    - Score (adjusted to take values between 30 and 100 under normal conditions)
        - 0: Blink strength standard deviation is about 50% of the blink strength mean (low)
        - 50: Blink strength standard deviation is about 35% of the average blink strength.
        - 100: standard deviation of blink strength is about 15% of the average blink strength (high)
- Tension (tension, sc_tsn)
    - Only principle measurements (n=10-20) are performed
    - Blink strength average is used to index the strength of "eyes wide open (intense communication, high tension)
    - The score is calculated using a linear formula based on the average value of the most recent blink strength normalized by the average blink strength within a few hours.
    - Score guidelines (adjusted to obtain a value between 30 and 100 under normal conditions)
        - 25: Blink strength is about half of the average value within a few hours (low)
        - 50: Blink strength is around the average value within a few hours
        - 100: blink strength is about twice the average value in a few hours (high)
- Low arousal / Sleepiness (sc_slp, sc_slp_std)
    - Principle measurements (n=10-20) + field measurements (n=50-100) were performed, and were cross-checked with objective values obtained by videotaping during actual operation.
    - The average value of blink strength and blink speed are used to index the state of "eye twitching".
    - Blink interval is also used in some cases to match actual data.
    - The value fluctuates in a longer period (5-10 minutes) than the Tension.
    - The average value of blink strength and blink rate is relatively lower and slower than the normal state (the last 2-3 hours), respectively, and the condition is judged as weak arousal.
    - If the electrode between the eyebrows is floating, the normalization process that calculates the normal state is not updated, so high values may continue to appear.
    - The accuracy of arousal during driving is ensured by adding strict error processing so that it is not calculated in postures other than the driving posture (face down).
    - The normal arousal is calculated without the aforementioned filter processing so that it can be measured even during desk work. (When the eyes are downward looking and **sleepy eyes**, the arousal may be judged as low.)
    - Score guidelines
        - 0: Around -0.6σ (high arousal)
        - 30: average value within a few hours
        - 70: Around +0.8σ (low arousal)

The detailed calculation logic for the following indicators used in the JINS MEME app is not disclosed.

- Vitality
  - A composite index of tension, low arousal, and head movement
- Toral Good Time (Mind)
  - A composite index of concentration, stability, and vitality, with higher values when two or more of these are in balance.

### Notes

- Data at 15-second intervals is calculated using the smartphone application, while data at 60-second intervals is calculated within JINS MEME. Since there is a large difference in processor and memory capacity, not only the data collection interval but also the calculation itself is different, simple comparisons may be difficult. Please compare with the same data species.

## Calculation of head movement events

The processing of **headMotion** in the Logger application is as follows. The head motion event data is intended to be used to trigger a linked system via WebSocket or other means (e.g., turn on the TV when the head is shaken vertically more than 2 times, etc.). If you need time series data of tilt and movement, we recommend using 15/60 second interval data.

### Fast-speed head movement data

An event is issued when the angular velocity exceeds a threshold value. Only this high-speed head movement uses gyro sensor data, so be sure to turn on "Gyro Acquisition" in the settings before use.

![](/images/fast_head_motion.png)

Specific codes are presented below.
https://qiita.com/komde/items/bd682da3d3e11aab325a

### Slow-speed head movement data(Tilt)

An event is issued when the angle exceeds a threshold value. This angle is less sensitive to fast vibrations within 0.5 seconds due to the weighted average.

![](/images/slow_head_motion.png)

### Slow-speed head movement data(Rotation)

Based on the tilt, issue subType="clockwise", value: 1 if value == 1 for forward, right, backward, left occurs consecutively within a certain period of time. If value == 1 for forward, left, backward, right occurs consecutively, subType="anticlockwise", value: 1 is issued.
