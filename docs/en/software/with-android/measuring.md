# Measurement flow<Badge type="danger" text="Academic" />

## Connection

The following two types of communication with JINS MEME ES_R can be selected. If the connection was not stable with BLE, try a connection via USB dongle.

| Type | Outline | Notes |
|:---:|:---:|:---:|
| BLE | Receive data directly via Bluetooth on the android device | Communication may not be stable depending on the android device.|
| USB | Receive data via dongle | USB must be plugged in and unplugged at a specific timing.|

### Prepare for direct connection (BLE)

To use Bluetooth on the device, tap `USE BLE` to complete the process.

### Prepare for dongle connection (USB)

1. Tap USE USB
2. Display the main screen and insert the dongle in the USB connector of the Android device.  
    - A dialog to check the dongle connection appears(①).
    - `Tip`	Since the chip is supported by the Android standard, no driver installation is required.
3.  Tap **OK**.
4.  Tap **OPEN**  
    - Communication with the dongle is established. When the inserted dongle becomes available, a screen indicating that the dongle is connected appears(②).

![Connection](/images/android_setting1.png)

### Connecting with the JINS MEME ES_R

1. Check that the screen indicates that scanning is ready and tap **Scan Device**.  
    - A scan for JINS MEME ES_R will be started, which will continue for approximately 6 seconds.  
    - If one or more JINS MEME ES_Rs are found, the ID of the found JINS MEME ES_R is displayed in the device list.  
    - If no JINS MEME ES_R is found, the screen will return to the upper right.
    - It may not be found at the first time, so please retry at that time.
2. Select the JINS MEME ES_R to connect and tap **Connect**.  
    - Tap while the screen is showing the image at right.
    - The screen at right appears when connection is completed.

![Connection](/images/android_setting2.png)


## Measurement

### Start measurement

1. Specify the select mode, Transmission speed, Measurement range of Accelerometer, and Measurement range of Gyroscope, and tap **START MEASUREMENT**. The Confirm Start of Measurement screen appears.
    - `Tip` Refer to [Using from a PC > Windows > Acquire Data window](../with-pc/windows.html) for the detaill of each item.
2. Tap **OK**, then measurement data is sent from the JINS MEME ES_R and saved.
3. Tap each `(TYPE) GRAPH DISABLED` to see the data in a grap, then the display changes to `(TYPE) GRAPH ENABLED`. The graphs that can be displayed depend on the mode.
    - Standard: EOG, ACC
    - Full: EOG, ACC, GYRO
    - Quartanion: None

![Start measurement](/images/android_setting3.png)

## Stop Measurement

- Tap **STOP MEASUREMENT** during measurement.
    - The confirm stop Measurement screen appears.
- Tap **OK**.
    - Measurement values from the JINS MEME ES_R are saved.
    - Data save destination: /$TOP/JINS/MEME_academic (Depending on the device, $TOP is expressed differently, such as Downloads, internal storage, sdcard, etc.)

![Stop Measurement](/images/android_setting4.png)


## Disconnection

1. Tap **Disconnect** while measurement with the JINS MEME ES_R is stopped.  
    - Tap **Disconnect** while the screen is showing the image at right (JINS MEME ES_R connection status is [Connected]).
2. The screen at below appears when communication is disconnected.
3. (Only when using a dongle) When the software is terminated, the connected dongle is disconnected. Unplug the dongle from the USB connector.

![Disconnection](/images/android_setting5.png)
