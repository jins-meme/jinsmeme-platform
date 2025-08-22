---
outline: deep
---

# Data Acquisition Procedure<Badge type="tip" text="Standard" />

- The logger application is a smartphone application specialized for data acquisition with JINS MEME. The Application Terms of Use will apply.

## Install

Search for **jins meme logger** or click on the link below to go to the store and install.

- [iPhone/iPad (App Store)](https://apps.apple.com/jp/app/jins-meme-logger/id1537937129), iOS/iPadOS 13.0 or later, devices with BLE4.2
- [Android 12 or later (Play Store)](https://play.google.com/store/apps/details?id=com.jins_meme.logger4internal), devices with BLE4.2
- [Android 8-11 (install via APK)](https://jins-assist-ui-binary.s3.ap-northeast-1.amazonaws.com/logger/android/jinsmeme-logger-2.0.3.76.apk) 

※Android < 8  is not supported.

## Precautions for measurements

- When the application is launched for the first time, you will be asked to allow location information (Bluetooth) and motion activity information acquisition (iOS only).
- Data other than when worn normally cannot be measured correctly, so please wear your glasses correctly. 
- The Android application automatically drops the last unused application (about 5 to 30 minutes) in the background, which interrupts the measurement. When measuring for long periods of time, please keep the screen on and keep the app in the foreground.

## Measurement & save manually

1. Charge JINS MEME sufficiently.
1. Search for JINS MEME on the connection screen*.
1. Tap the JINS MEME you wish to connect and once the connection is complete (activated and displayed in red text), tap the **Logger** tab at the bottom of the screen to display the current data.
1. if you wish to use the gyro sensor (optional), tap the settings tab at the bottom of the screen, move the screen, and turn on the gyro acquisition option.
1. When it is time to start measurement, tap the "Record" label at the bottom of the logger tab (data will be saved in CSV from the time of the tap) *Not necessary for automatic saving.
1. When it is time to end the measurement, tap the "End Recording" button (data up to the point of tapping will be saved in CSV) *Not necessary for automatic saving.
1. After retrieving the file, disconnect from JINS MEME (tap the connected JINS MEME on the connection screen, then tap Disconnect in the modal), drop the app, or turn the JINS MEME upside down to sleep to end the measurement.

## Measurement & save automatically

- If you turn on "Settings Tab→Auto Save", files will be separated and saved automatically at specified time intervals (no need to **tap the record button** to **tap the end record button** above).
- You can specify the interval at which to save the file by going to the Settings tab -> Save Cycle. The file name extension will be prefixed with "_m5 (number is the save interval)".

## File type and extraction

- **(file_id)_currentData.csv**: 20Hz data (currentData)
- **(file_id)_logicIndexData.csv**: 15-second interval data (logicIndexData)
- **(file_id)_summaryData.csv**: 60 seconds interval data (summaryData)
- **(file_id)_fastHeadMotion.csv**: Fast head motion data (fastHeadMotion)
- **(file_id)_slowHeadMotion.csv**: Slow head motion data (slowHeadTilting, slowHeadRotation)
- **(file_id)_motionActivity.csv**: (iOS only) motion activity classification obtained by smartphone. For details on data contents, please refer to [official document](https://developer.apple.com/documentation/coremotion/cmmotionactivity)
- **(file_id)_location.csv**: (iOS only) Latitude and longitude data acquired by smartphones.

The file_id is as follows for iOS/Android. JINS MEME's UDID, which was displayed at the time of scanning on iOS, is shown in parentheses.

- iOS
    - `{Date 8 characters}-{Time 6 characters}_{Unique Device ID 12 characters}({UDID first 8 characters})`
    - Example: 20210719-081859_CDC007922D4F(00DF874C)_currentData.csv
- Android
    - `{Date 8 characters}-{Time 6 characters}_{Unique Aircraft ID 12 characters}`
    - Example: 20210719-081859_CDC007922D4F_currentData.csv

Even if the same JINS MEME device is used, a different ID will be displayed if the smartphone device to which the JINS MEME is connected is different. This is due to the OS specification that "for privacy-conscious tracking measures, different UDIDs will be displayed for each device.

### Retrieving iOS files

- Share from the app
    - Tap **CSV** at the bottom of the screen to display a list of files.
    - Tap **Open in other apps** to select the destination of the file.
- Retrieving on Windows
    - connect to the iPhone via itunes and access the Logger app storage area (Logger app → JINS MEME DEVELOPERS) from `File Share` to extract the data.
- Retrieving on Mac
    - You can access the storage area of the Logger app (Logger app → JINS MEME DEVELOPERS) by connecting your iPhone to the finder app.

![itunes_download](/images/itunes_download.png)

### Retrieving Android files

Folders are saved for each file type under (Internal Storage ->) Download. Please use a filer app (an app to manipulate files in your phone, such as Google files or ES File Explorer) to retrieve the measured file.
