# Motion tracking preprocessing example<Badge type="tip" text="Standard" />

This page describes notes and recommended preprocessing for using JINS MEME data as motion tracking.

## Known issues

Some of issues can be avoided by adding some pre-processing, so we have provided some sample code (JavaScript) below for those who use the data for such purposes.

1. Angle data drifts (moves slowly) → Can be avoided by adding correction.
2. Angle data may have humps (jerky movement) → Can be avoided by delaying 2 frames (0.1s).
3. Insufficient resolution at 20Hz → Can be solved by adding supplemental frames.
4. Low accuracy of eye movement (no accuracy up to where the eye is looking) → Consider better logic.
5. Slow blink detection → Considering releasing firmware by 2022

## Basic pre-processing

Convert angles to angular velocity. If we simply take the difference, it will be a step in a roundabout way, so we apply a condition.

```
//variable definition
let roll_m1 = 0;
let pitch_m1 = 0;
let yaw_m1 = 0;
//*_drift is used when performing drift correction.

//current data callback
const callback = data => {
  //roll does not go around
  roll_moment = data.roll - roll_m1 - roll_drift;

  //yaw/pitch goes around, so if the difference is large, it is assumed to jump from minus to plus.
  if(Math.abs(data.pitch - pitch_m1) > 300){
    pitch_moment = (data.pitch + 360 * Math.sign(pitch_m1 - data.pitch)) - pitch_m1 - pitch_drift;
  } else {
    pitch_moment = data.pitch - pitch_m1;
  }

  if(Math.abs(data.yaw - yaw_m1) > 300){
    yaw_moment = (data.yaw + 360 * Math.sign(yaw_m1 - data.yaw)) - yaw_m1 - yaw_drift;
  } else {
    yaw_moment = data.yaw - yaw_m1 - yaw_drift;
  }
  
  // record previous value
  yaw_m1 = data.yaw;
  pitch_m1 = data.pitch;
  roll_m1 = data.roll;
}
```
Angular velocity can be added back to the angle each time.

## Angular data drifts

Simply **buffer angular velocities every second and correct them as a baseline** when the angular velocities have been almost the same for 5 seconds (5 times). Since there are almost no scenes where the glasses produce the same angular velocity for 5 seconds during normal wearing, this logic will suppress the drift if you wait 5-10 seconds for the glasses to be in a quiet place.

```
//variable definition

//Drift control
let roll_moment_drift_calib_ary = new Array(5).fill(0);
let pitch_moment_drift_calib_ary = new Array(5).fill(0);
let yaw_moment_drift_calib_ary = new Array(5).fill(0);
let roll_drift = 0;
let pitch_drift = 0;
let yaw_drift = 0;
let dcnt = 0;//counter

//function to calculate the maximum value of an array
const maxArray = arr => {
  return arr.reduce( (prev, current) => {return prev < current ? current : prev}));
};

// function to calculate the minimum value of an array
const minArray = arr => {
  return arr.reduce( (prev, current) => {return prev > current ? current : prev}));
};

// simple sum of arrays
const sumArray = arr => {
  return arr.reduce( (prev, current, i, arr) => {return prev+current})
};

// simple average of arrays
const aveArray = arr => {
  return sumArray(arr) / (arr.length);
};

//current data callback
const callback = data => {
  //every second
  if (dcnt % 20 == 0) {
    roll_moment_drift_calib_ary.push(roll_moment);
    roll_moment_drift_calib_ary.shift();
    pitch_moment_drift_calib_ary.push(pitch_moment);
    pitch_moment_drift_calib_ary.shift();
    yaw_moment_drift_calib_ary.push(yaw_moment);
    yaw_moment_drift_calib_ary.shift();

    // every 5 seconds
    if (dcnt % 100 == 0) {
      //
      const roll_moment_max = maxArray(roll_moment_drift_calib_ary);
      const roll_moment_min = minArray(roll_moment_drift_calib_ary);

      if(roll_moment_max/roll_moment_min > 0.5 && roll_moment_max/roll_moment_min < 2){
        roll_drift = aveArray(roll_moment_drift_calib_ary);
      }

      const pitch_moment_max = maxArray(pitch_moment_drift_calib_ary);
      const pitch_moment_min = minArray(pitch_moment_drift_calib_ary);

      if(pitch_moment_max/pitch_moment_min > 0.5 && pitch_moment_max/pitch_moment_min < 2){
        pitch_drift = aveArray(pitch_moment_drift_calib_ary);
      }

      const yaw_moment_max = maxArray(yaw_moment_drift_calib_ary);
      const yaw_moment_min = minArray(yaw_moment_drift_calib_ary);

      if(yaw_moment_max/yaw_moment_min > 0.5 && yaw_moment_max/yaw_moment_min < 2){
        yaw_drift = aveArray(yaw_moment_drift_calib_ary);
      }
    }
  }

  dcnt++;
}
```

This operation calculates the drift component, which is set when calculating the angular velocity (*_moment) described above.

## Angle data may have humps (jerky movement)

This is a phenomenon in which the angular data shows a staircase shape even though it is stationary. The signal jumps out by one frame compared to the front and rear angular velocities, so it can be corrected by comparing with the front and rear angular velocities, but the disadvantage is that it is delayed by 2 frames (0.1s).

```
//variable definition
let roll_moment_ary = new Array(3).fill(0);
let pitch_moment_ary = new Array(3).fill(0);
fill(0); let yaw_moment_ary = new Array(3).fill(0);

//current data callback
const callback = data => {
  //store in angular velocity buffer
  roll_moment_ary.push(roll_moment);
  roll_moment_ary.shift();
  pitch_moment_ary.push(pitch_moment);
  pitch_moment_ary.shift();
  yaw_moment_ary.push(yaw_moment);
  yaw_moment_ary.shift();

  //Detecting the occurrence of a hump Since it is impossible for angular velocity to peak for only one frame in normal mounting, in such cases, a frame in which no bumps occur is substituted
  const roll_hump_flag = (roll_moment_ary[0] > -0.35 && roll_moment_ary[1] < -0.4 && roll_moment_ary[2] > -0.35) ||
    (roll_moment_ary[0] < 0.35 && roll_moment_ary[1] > 0.4 && roll_moment_ary[2] < 0.35);
  const roll_moment_no_hump = roll_hump_flag ? roll_moment_ary[2] : roll_moment_ary[1];
  
  const pitch_hump_flag = (pitch_moment_ary[0] > -0.35 && pitch_moment_ary[1] < -0.4 && pitch_moment_ary[2] > -0.35) ||
    (pitch_moment_ary[0] < 0.35 && pitch_moment_ary[1] > 0.4 && pitch_moment_ary[2] < 0.35);
  const pitch_moment_no_hump = pitch_hump_flag ? pitch_moment_ary[2] : pitch_moment_ary[1];
  
  const yaw_hump_flag = (yaw_moment_ary[0] > -0.35 && yaw_moment_ary[1] < -0.4 && yaw_moment_ary[2] > -0.35) ||
    (yaw_moment_ary[0] < 0.35 && yaw_moment_ary[1] > 0.4 && yaw_moment_ary[2] < 0.35);
  const yaw_moment_no_hump = yaw_hump_flag ? yaw_moment_ary[2] : yaw_moment_ary[1];
}
```

*_moment_no_hump will be angular velocity without steps.

## 20Hz is not enough resolution.

JINS MEME sends data at 20Hz (once every 50ms), so for example, if you output the angular velocity at +0ms on reception and +25ms on reception in two parts, you can create a completion frame.

## Accuracy of eye movement is low (no accuracy up to where the eye is looking).

Since it is difficult to improve this, we will take the next best measure to make it **not unnatural**. Possible recommendations are as follows

- Do not use vertical eye movement (the data is essentially inaccurate because it is from the same channel as blink data).
- Accumulate horizontal gaze shifts to move the gaze position, and force the accumulated value back to 0 if the subject has not looked straight ahead for 2-3 seconds.
- Gaze shifts are complemented at intermediate frames using a function shaped like an error function.

## Blink detection is slow.

Blink detection has a delay of 0.3s in the previous generation and 0.5s in the current generation. The reason for this is to ensure a window of signal transition before and after that may cause false positives so that "the lifelog will be the most accurate". We are considering to release firmware to support this one after 2022.

## I'm looking at a different point on the sensor, but I want to correct it straight.

When you rotate with your smartphone, the sensor detects the rotation, but the smartphone you are looking at is the same, so you may want to correct the misorientation. There is only a next best solution for this as well, so the only way to fix it is to use the same logic as for eye movement.

- Accumulate angular velocity and force the accumulated value back to 0 after 2-3 seconds of not looking straight ahead.
- The movement is complemented in the middle frame by a function shaped like an error function.
