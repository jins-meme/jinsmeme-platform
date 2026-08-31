# Using with a PC<Badge type="danger" text="Academic" />

This page explains how to use the PC logger, which acquires data from the JINS MEME ES_R, visualizes it in real time, and records it to CSV.

**No USB dongle is required.** The app connects to the ES_R directly through the Bluetooth LE radio built into your PC.

> **Note:** If you are using the older app that requires a USB dongle, see the [manual for the old version](./old_app.html). The screen layout is very different.

## Operating environment

| Item | Requirement |
|---|---|
| Supported OS (Windows) | Microsoft Windows 11 or later 64bit<br>Memory: 4GB or more (8GB recommended) |
| Supported OS (macOS) | macOS 14 or later<br>Memory: 4GB or more (8GB recommended) |
| Hardware | **A Bluetooth adapter with BLE support** (the one built into your PC is fine) |
| Dongle | **Not required** |

## Download

Please download from [here](https://github.com/jins-meme/ES_R-DataLogger/releases).

| OS | File |
|---|---|
| Windows | `JINS_MEME_DataLogger_Setup.exe` (installer) |
| macOS | A dmg packed into a zip |

## Installation

### Windows

1. Double-click the downloaded `JINS_MEME_DataLogger_Setup.exe`.
    - `Important` Installation requires administrator privileges. Click [Yes] when the [User Account Control] window appears. If you are logged in with a non-administrator account, ask your administrator to perform the installation.
1. Choose the language (Japanese / English) and follow the wizard.
1. Specify the installation destination (`C:\Program Files\JINS MEME DataLogger` by default), the Start menu folder name, and whether to create a desktop icon.
1. Click [Install].
    - `Tip` If the **.NET 10 Desktop Runtime** is not present on your PC, the installer downloads and installs it automatically. This runs after you finish the wizard pages, so it can take a few minutes. **An internet connection is required.**
1. Click [Finish] on the completion screen.

To uninstall, select `JINS MEME DataLogger` from the Windows [Apps] list and remove it.

::: tip Updating
Automatic updates are not supported. Simply run the installer for the new version and it will install over the existing one.
:::

### macOS

1. Extract the downloaded zip and open the dmg inside it.
1. Drag the app onto the [Applications] folder.
1. Launch it from the [Applications] folder.
1. Allow Bluetooth access when prompted on first launch.

To uninstall, delete the app from the [Applications] folder.

## Screen layout

![Main window](/images/pc_logger_main.png)

The left column holds the connection and measurement controls, and three real-time charts are stacked on the right.

| Location | Description |
|---|---|
| Menu bar `Setting (S)` | Opens the settings window (save location, TCP output, and so on) |
| Menu bar `Version (V)` | Shows the application version |
| Top of the left column | The application version and the firmware version of the connected ES_R |
| `Scan` / `File Replay` / `Connect` | Scan for and connect to a device, or replay a recorded CSV |
| `State :` | Connection state (`Disconnected` / `Connected`, or the file name while replaying) |
| `Select Mode` and below | Measurement settings |
| `Start Measurement` / `Free Marking` | Start and stop measurement, add an artifact |
| `Success rate` / `Communication` | Data acquisition rate, cumulative and recent |
| `IP address` / `Port` / `Status` | TCP output status |
| Chart 1 to 3 | Real-time waveforms |

## Connecting

1. Charge the ES_R and put it into pairing mode with the glasses held the right way up.
1. Click `Scan`. Devices that are found are listed in the combo box as `ESRG2_0 (mac_address)`.
    - The device is not always found on the first try. Click `Scan` again if nothing appears.
1. Select the device you want and click `Connect`.
1. Once connected, `State :` changes to `Connected` and the firmware version of the ES_R is shown.

Click `Disconnect` when you are finished.

::: warning The ES_R can only be connected to one host at a time
If a smartphone app or similar is connected, disconnect it first.
:::

## Measuring

### Setting the measurement conditions

When you connect, the current values are read from the ES_R and reflected in each field. Change them as needed before you start measuring.

| Item | Description |
|---|---|
| `Select Mode` | Data mode. `Standard` / `Full` / `Quaternion` |
| `Trans Speed` | Sampling frequency. `100Hz` / `50Hz` |
| `Accel Range` | Accelerometer measurement range. ±2 / ±4 / ±8 / ±16 G |
| `Gyro Range` | Gyroscope measurement range. ±250 / ±500 / ±1000 / ±2000 dps |

**Operating sensors per mode**

| Mode | Operating sensors | Charts |
|---|---|---|
| `Standard` | Electrooculography sensor, accelerometer | Yes (the first EOG pair is drawn) |
| `Full` | Electrooculography sensor, accelerometer, gyroscope | Yes |
| `Quaternion` | Quaternion output | **No** (there is no waveform to plot, so the charts stay empty) |

### Starting and stopping measurement

- Click `Start Measurement` to begin measuring and recording to CSV.
- The button changes to `Stop Measurement` while measuring. Click it again to stop and finalize the CSV.
- `Select Mode` and the other settings cannot be changed during measurement.

### Adding an artifact

You can mark positions in the data — a movement by the subject, an external event — so that you can find them later. There are two ways to do it.

**The `Free Marking` button** — clicking it puts `x` in the `ARTIFACT` column of the next row. It works **only during measurement** (on Windows the button is disabled outside measurement; on macOS it only appears while measuring).

**Clicking a chart** — lets you put any text on the row you clicked. An input dialog opens; leave it empty and click OK to enter `X`. This works **both during measurement and during replay**.

![Artifact input dialog](/images/pc_logger_artifact.png)

Marks appear on the chart immediately as a vertical line with a label, and are written back to the CSV together at the following times.

| Situation | Written back when | Written back to |
|---|---|---|
| Measuring | `Stop Measurement` or disconnection | The CSV saved for that measurement |
| Replaying | `Record` or `Disconnect` | The CSV being replayed |

- Commas and line breaks are replaced with spaces so that the columns do not break.
- Clicking the same row repeatedly overwrites it with the last value you entered.
- The write-back goes to a temporary file which then replaces the original, so the CSV is not corrupted if it fails partway.

### Checking the communication status

| Indicator | Description |
|---|---|
| `Success rate` | Cumulative data acquisition rate since the measurement started |
| `Communication` | Data acquisition rate over the last second |

If the numbers drop significantly, try moving the PC closer to the ES_R or lowering `Trans Speed` to 50Hz.

## Working with the charts

![Replay in progress](/images/pc_logger_replay.png)

There are three charts, and each one can show something different. Waveforms are drawn from **every sample, with no thinning**.

| Control | Description |
|---|---|
| Category combo box + `Apply` | Switches the sensor type shown on that chart (`Electrooculography` / `Gyroscope` / `Accelerometer`) |
| Check boxes on the left | Show or hide each series |
| `↕＋` / `↕－` | Zoom the vertical (amplitude) axis in and out |
| `＋` / `－` (left column) | Switches the horizontal (time) range between **3 / 7 / 15 / 30 seconds**. This applies to all three charts at once |

::: tip Default EOG chart series
`Left` and `Right` are raw potentials and swing widely, which makes `ΔH` / `ΔV` hard to read, so they are hidden by default. Tick them if you need them.
:::

## The recorded CSV

### Save location and file name

| OS | Default save location |
|---|---|
| Windows | `Documents\JINS\MEME_Academic` |
| macOS | `~/Documents/JINS/MEME_Academic` |

The location can be changed with `Save File Path` in `Setting`. On both platforms the file name is `<MAC address>_<UTC datetime>.csv`.

If you enable `Save Dialog` in `Setting`, a dialog to choose the save location again appears after the measurement ends.

### Columns

The format is shared with the Mac and Android versions. The columns depend on the mode.

| Mode | Columns |
|---|---|
| Standard | `ARTIFACT,NUM,DATE,ACC_X,ACC_Y,ACC_Z,EOG_L1,EOG_R1,EOG_L2,EOG_R2,EOG_H1,EOG_H2,EOG_V1,EOG_V2` |
| Full | `ARTIFACT,NUM,DATE,ACC_X,ACC_Y,ACC_Z,GYRO_X,GYRO_Y,GYRO_Z,EOG_L,EOG_R,EOG_H,EOG_V` |
| Quaternion | `ARTIFACT,NUM,DATE,QUATERNION_W,QUATERNION_X,QUATERNION_Y,QUATERNION_Z` |

A header describing the measurement conditions is written at the top of the file.

```
// Data mode  : Full
// Transmission speed  : 100Hz
// Acceleration sensor's range  : 2g
// Gyroscope sensor's range  : 250dps
//
//ARTIFACT,NUM,DATE,ACC_X,ACC_Y,ACC_Z,GYRO_X,GYRO_Y,GYRO_Z,EOG_L,EOG_R,EOG_H,EOG_V
,1,2026/08/27 04:27:10.21,-200,-3415,-2284,178,-343,763,2007,2001,6,-2004
```

- `DATE` is recorded in **UTC**. To show local time on the charts only, use `Time Display` in `Setting` (the recorded values always stay in UTC).
- `NUM` is a monotonically increasing value accumulated from the difference of the device-side counter. Numbers are skipped when packets are dropped.
- `ARTIFACT` holds the marks added with `Free Marking` or by clicking a chart.
- Rows are flushed every 100 rows at 100Hz, or every 50 rows at 50Hz, because opening and closing the file for each row would drop data. The remainder is flushed when the measurement stops.

## File Replay

You can load a recorded CSV and review it on the same screen you use while measuring, even without a device at hand.

### Starting a replay

1. Click `File Replay`.
1. Choose a CSV in the file dialog.
1. **Playback starts as soon as you choose the file** (there is no Start button).
    - `Select Mode` and the other fields switch to the conditions recorded in the file, and `State :` shows the file name.

Only CSVs in this app's format (shared with the Mac and Android versions) can be loaded. CSVs written by the old Windows app — with the `// Accelerometer sensor's range` wording or a `BattLv` column — can also be read.

### Controls during replay

| Control | Description |
|---|---|
| Slider | Changes the playback position. It seeks when you release it |
| `<<` / `>>` | Moves back or forward by the horizontal range minus 2 seconds, so consecutive windows overlap by 2 seconds |
| `x1` | Cycles the playback speed x1 → x2 → x4 → x8 → x16 → x32 → x1 |
| `Pause` / `Resume` | Pauses and resumes |
| `Record` | Stops the playback. The graphs stay as they are |
| `Disconnect` | Ends the replay session and discards the loaded data |

- The horizontal axis is drawn from the `DATE` column (UTC) of the CSV, so the recorded times are shown as they are.
- After a seek or a range change, playback resumes with a full window pre-filled rather than refilling gradually from the right edge.
- Rows with a value in the `ARTIFACT` column are overlaid on the chart as a vertical line with a label.
- **Raising the playback speed does not thin the data.** It only increases how many rows are pushed per second, so fine detail in the waveform survives even at x32.

You can also click a chart during replay to add an artifact (see [Adding an artifact](#adding-an-artifact)).

### Cutting out a range by dragging

![Range cut-out dialog](/images/pc_logger_cut.png)

Dragging horizontally across a chart during replay highlights the selected range. When you release the mouse, a file name dialog appears and you can write just that range to a CSV in the same folder as the source file.

- The header is copied as is, so the extracted CSV can be opened with `File Replay` too.
- If a file with the same name already exists, an error is shown and the dialog stays open.

## Setting

Open it from `Setting (S)` on the menu bar.

![Settings window](/images/pc_logger_setting.png)

| Item | Description |
|---|---|
| `Save File Path` | Where CSVs are saved. `Documents\JINS\MEME_Academic` by default |
| `Acc Offset X / Y / Z` | An offset added to the chart display only. **The values recorded in the CSV do not change** |
| `Save Dialog` | Shows a dialog to choose the save location again after the measurement ends |
| `Time Display` | Shows the horizontal axis in local time (recording is always in UTC) |
| `TCP Output` | Streams the measurement data to an external client over TCP |
| `Local Port` | The listening port. `88` by default |

The settings are restored the next time the app starts. They are stored in `%APPDATA%\JINS\MEME_Academic\settings.json` on Windows, and in the app preferences (`UserDefaults`) on macOS.

## TCP output

When `TCP Output` is enabled, the app starts listening on the specified port (`Status :` in the left column shows `Listen`). Once a client connects it changes to `Accepted`, and the header and rows are streamed in exactly the same format as the CSV.

- If the client connected before the measurement started, the header is sent when the measurement starts.
- Only **one client** is accepted at a time.

```
$ ncat 127.0.0.1 88
// Data mode  : Full
// Transmission speed  : 100Hz
// Acceleration sensor's range  : 2g
// Gyroscope sensor's range  : 250dps
//
//ARTIFACT,NUM,DATE,ACC_X,ACC_Y,ACC_Z,GYRO_X,GYRO_Y,GYRO_Z,EOG_L,EOG_R,EOG_H,EOG_V
,1,2026/08/27 04:27:10.21,-200,-3415,-2284,178,-343,763,2007,2001,6,-2004
```

### Socket client sample in Python

```python [tcp_client.py]
import socket

target_ip = "127.0.0.1"   # IP address of the PC running the logger
target_port = 88          # Match Local Port in Setting
buffer_size = 4096

tcp_client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
tcp_client.connect((target_ip, target_port))

is_end = False
while not is_end:
    response = tcp_client.recv(buffer_size)
    if response == b"":
        is_end = True
    print("[*]Received a response : {}".format(response))

tcp_client.close()
```

## Checking the version

Open `Version (V)` on the menu bar. Please include this version when you contact us.

![Version information](/images/pc_logger_version.png)

## Troubleshooting

| Symptom | What to try |
|---|---|
| `Scan` finds nothing | Check that the ES_R is charged and in pairing mode, and that Bluetooth is turned on for your PC |
| Another app has the device | The ES_R can only be connected to one host at a time. Disconnect any smartphone app that is connected |
| It connects but no data arrives | Remove the ES_R once from [Settings > Bluetooth & devices] on Windows and scan again. This can clear a stale GATT cache |
| The acquisition rate stays low | Move the PC closer to the ES_R, lower `Trans Speed` to 50Hz, or avoid congestion in the 2.4GHz band |
| Runtime installation fails during setup | The automatic install cannot run without an internet connection. Install the [.NET 10 Desktop Runtime](https://dotnet.microsoft.com/download/dotnet/10.0) manually and run the installer again |
