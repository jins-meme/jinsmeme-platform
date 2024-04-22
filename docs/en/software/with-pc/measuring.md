# Measurement flow<Badge type="danger" text="Academic" />

In order to use the functions of the JINS MEME ES_R, communication must be established between PC and the JINS MEME ES_R.

## Connection

### Connecting the Dongle (Windows only)

- Insert the dongle in any USB port on the PC.
    - `Important` If the dongle driver is not found, try the CP210x USB - UART bridge VCP driver provided by Silicon labs.

### ① Launch the app

1. Click the JINS MEME ACADEMIC icon and start the software.
    - The Acquire Data window appears.

### ② Dongle and port settings (Windows only)

-  Click the `Scan port` button to search the dongle. 
    - The combo box shows the port number of the USB.
- Select the destination port number from the list and click the Open button.
    - The `Open` button changes to the `Close` button and dongle communication is established.

### ③ Connecting with the JINS MEME ES_R

1. When a connectable JINS MEME ES_R is nearby, click the `Scan` device button will start scanning for a connectable JINS MEME ES_R.
1. The combo box shows the ID of the connectable JINS MEME ES_R.  
1. Select the JINS MEME ES_R to connect to and click the `Connect` button.
1. The status text changes to the `Connected` and communication is established.  
    - Connection may fail depending on the compatibility with the PC. If the connection fails, please try to connect again.

![Connection](/images/pc_setting1.png)


## Measurement

1. Start measurement
    - Specify the Select mode, Transmission speed, Measurement range of Accelerometer, and Measurement range of Gyroscope, and click the `Start Measurement` button to send measurement values from the JINS MEME ES_R and start drawing graphs.
    - `Tip` Refer to "Review Data window" for the details of each item.  
    - `Important` No graph is drawn when Quaternion is selected for Select mode.
1. Stopping Measurement
    - Click the `Stop Measurement` button while measuring to stop measurement.

![Measurement](/images/pc_setting2.png)


## Disconnection

1. Disconnecting Communication of the JINS MEME ES_R
    1. Click the `Disconnect` button while measurement with the JINS MEME ES_R is stopped.
    1. The `Disconnect` button changes to the `Connect` button and communication is disconnected.
1. Disconnecting Communication with the Dongle (Windows only)
    1. While dongle communication is established from any USB port, click the `Close` button.
    1. The `Close` button changes to the `Open` button and dongle communication is disconnected.

![Disconnection](/images/pc_setting3.png)
