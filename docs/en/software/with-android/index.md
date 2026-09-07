# ES_R DevKit 2 Operation Manual<Badge type="danger" text="Academic" />

This manual explains how to use "ES_R DevKit 2," an application for acquiring, visualizing, and recording data from JINS MEME ES_R devices.

> **Note:** This app (ES_R DevKit 2) requires **version 3 or later**. If you are using version 2 or earlier, see the [old version](./old_app.html).

## Downloading the Software

- Please download from [here](https://github.com/jins-meme/ES_R-Development-Kit/releases).
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

## 1. Connection Settings (Standard BLE Connection)

![App Screens (Left: Initial screen, Center: Settings dialog, Right: Measurement screen)](/images/android_devkit2_connect_flow.png)

When you launch the app, the screen for configuring the connection with the device is displayed.

### Steps

1. Tap the **Scan device** button to search for nearby JINS MEME devices.
2. Select the target device from the dropdown list on the right.
3. Tap the **Connect** button to start the connection.
4. Once the connection is successful, the status changes to "Connected," and the device's firmware version is displayed.

---

## 2. Device Settings

Tap the **gear icon (Settings)** in the upper right to configure detailed measurement settings.

- **Initialize**: Resets various internal parameters of the device to their default values.
- **Select mode**: Choose the type of data to be acquired (Standard, Full, Quaternion).
- **Transmission speed**: Sets the sampling rate.
- **Accelerometer range**: Sets the measurement range of the accelerometer.
- **Gyroscope range**: Sets the measurement range of the gyroscope.
- **Reconnect and restart...**: Enables automatic reconnection when the BLE connection is lost.
- **Compress saved data (.csv.gz)**: Saves measurement data compressed with gzip (**enabled by default**).

---

## 3. Measurement and Graph Display

Once the connection with the device is complete, operate the app from the "Measure" section at the bottom of the screen.

### Starting and Stopping Measurement

- **Start Measurement**: **Long-press** the button (until the bar reaches the right edge) to start measurement and recording.
- **Stop Measurement**: **Long-press** the button during measurement to stop recording.
- **Free Marking**: Tap this button during measurement to add a marker to the data at that specific moment.

### Data Visualization

During measurement, EOG (electrooculography), acceleration, and gyroscope data are displayed in real-time graphs.
Each graph can also be minimized by tapping the "−" button in its upper right corner.

---

## 4. Data Storage

When measurement is stopped, the data is saved as a **gzip-compressed CSV (`.csv.gz`)**. The contents are exactly the same as the previous CSV format; compression simply makes the file smaller (about 1/3 in our measurements).

### Storage Location

Inside the **Download / ESR Logger** folder of the device's internal storage.

### File Name Format

`[DeviceAddress]_[DateTime].csv.gz`

To save uncompressed `.csv` files as before, clear the **Compress saved data (.csv.gz)** checkbox in the settings. The file name then becomes `[DeviceAddress]_[DateTime].csv`.

### Opening Compressed Files

`.csv.gz` is a standard gzip file, so no special tool is required.

| Purpose | How |
|---|---|
| Extract on a computer | Archivers such as 7-Zip or The Unarchiver. On macOS, double-clicking also works |
| Command line | `gzip -d [FileName].csv.gz` |
| Python (pandas) | `pd.read_csv("data.csv.gz")` — decompressed automatically based on the extension |

The app's [playback mode](#_5-playback-mode) reads both `.csv.gz` and `.csv` as-is.

---

## 5. Playback Mode

A mode for selecting previously saved CSV data and reproducing (replaying) the measurement state within the app. Use this when the device is not on hand, or to review acquired data.

### Steps

1. Tap the **playback icon (▶︎)** in the upper right of the screen.
2. The file selection screen opens; select the file you want to play back. Either `.csv.gz` (compressed) or `.csv` (uncompressed) works.
3. The connection status becomes "Connected(ver.CAFE-...)", simulating a connected state.
4. **Start Measurement**: **Long-press** the button (until the bar reaches the right edge) to start playback.

![App Screens (Left: Location of the playback button, Center: File selection, Right: Connected in playback mode)](/images/android_devkit2_playback_flow.png)
