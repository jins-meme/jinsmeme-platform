# ES_R DevKit 2 Operation Manual<Badge type="danger" text="Academic" />

This manual explains how to use "ES_R DevKit 2," an application for acquiring, visualizing, and recording data from JINS MEME ES_R devices.

> **Note:** This app (ES_R DevKit 2) requires **version 3 or later**. If you are using version 2 or earlier, see the [old version](./old_app.html).

## Downloading the Software

- Please download from [here](https://github.com/jins-meme/ES_R-DataLogger/releases).
  - Android 12 or later, devices with BLE4.2 or later
  - Be sure to download **version 3 or later**.

## Installation

1. Open the downloaded apk file (if installation of apps from an unknown source is not allowed, please allow it).
2. Tap `Install` when the dialog box appears.
3. Tap `Open` after installation is complete.
4. Tap `Only when using apps` when the location grant dialog is displayed.
5. Tap `Allow` when the dialog for authorization of file access in the device is displayed.
6. Startup is complete.

---

![App Screens (Left: Initial, Center: Settings, Right: Measurement)](/images/android_devkit2_screens.png)

---

## 1. Connection Settings

When you launch the app, the screen for configuring the connection with the device is displayed.

### Steps

1. Tap the **Scan device** button to search for nearby JINS MEME devices.
2. Select the target device from the dropdown list on the right.
3. Tap the **Connect** button to start the connection.
4. Once the connection is successful, the status changes to "Connected," and the device's firmware version is displayed.

---

## 2. Device Settings

Tap the gear icon (Settings) in the upper right to configure detailed measurement settings.

### Setting Items

- **Initialize**: Resets various internal parameters (such as offsets) of the device to their default values.
- **Select mode**: Choose the type of data to be acquired (Standard, Full, Quaternion).
- **Transmission speed**: Sets the data sampling rate (e.g., 100Hz, 50Hz).
- **Accelerometer range**: Sets the measurement range of the accelerometer.
- **Gyroscope range**: Sets the measurement range of the gyroscope.
- **Reconnect and restart...**: Enables a feature that automatically attempts to reconnect and resume measurement if the Bluetooth connection is lost.
- **Replay mode**: A mode for debugging and verification that allows you to select a previously saved CSV file and replay its data within the app.

---

## 3. Measurement and Graph Display

Once the connection with the device is complete, the "Measure" section is displayed at the bottom of the screen.

### Starting and Stopping Measurement

- **Start Measurement**: Long-press the button (until the progress bar is full) to apply the current settings to the device and begin recording and saving data.
- **Stop Measurement**: Long-press the button during measurement to stop recording.
- **Free Marking**: Tap this button during measurement to add a marker to the data at that specific moment.

### Data Visualization

During measurement, the following data is displayed in real-time graphs:

- **EOG data**: Electrooculography (Vertical and Horizontal directions)
- **Accel data**: Acceleration (X, Y, Z axes)
- **Gyro data**: Gyroscope (X, Y, Z axes *in Full mode)

You can also minimize the graphs by tapping the "-" button in the upper right of each graph to save screen space.

---

## 4. Data Storage

When measurement is stopped, the acquired data is saved in CSV format. The storage location is as follows:

### Storage Location

Inside the **Download / ESR Logger** folder of the device's internal storage.

### File Name Format

`[DeviceAddress]_[DateTime].csv`
(Example: `A1B2C3D4E5F6_20231027123456.csv`)

The saved data can be transferred to a PC and used with spreadsheet software or analysis scripts.
