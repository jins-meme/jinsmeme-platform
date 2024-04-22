---
outline: deep
---

# External share <Badge type="tip" text="Standard" />


Data can be shared externally using Google Drive or Websocket.

## Google Drive integration

### How to set up

- Tap the Settings button at the bottom of the screen, then tap the button switch for Google Drive share.
- (iOS only) Tap **Continue** when asked for permission to access external sites.
- **Select Google Account** or **Add Account** and select the account you wish to link.
- Logger will create a folder directly under My Drive and write CSV to it. The Logger creates a folder directly under the My Drive and writes CSV to it, and no other folders can be accessed.
- When settings are turned on, CSV files are automatically linked to the following folders when they are created.
    - iOS: My Drive/JINS_MEME_LOGGER
    - Android: My Drive/JINS_MEME_LOGGER_ANDROID
- If the network is disconnected at the time of saving, the files will not be linked.

![gdrive_settings](/images/gdrive_settings.png)

## WebSocket integration

By receiving data with WebSocket Server, data integration is possible in real time from Logger (WebSocket Client).

### Manual configuration

Enter a configuration name, IP address, and port in the entry fields, and select the data type you wish to receive.

![wss_settings](/images/wss_settings.png)

### Reading settings information from QR code

Settings can be easily configured from a QR code. When a QR code representing a character string in the format of wss://{IP address}:{port}, such as **wss://192.168.0.1:5000**, is read, the IP address and port can be set automatically. Please set the setting name and the data type you want to receive.

### Receiving data

- Start WebSocket Server
- Add from the Logger settings screen or tap an existing setting, and if the connection is successful, the switch will turn on
- As long as you are connected, the data type you specified will continue to be messaged as a JSON string, one line at a time.
 
#### Exclude Heartbeat messages

Due to the specification of the library used in the application, Heartbeat messages (messages for alive monitoring) may be sent, and since the server side will receive unexpected messages, please add a process to exclude the corresponding string ("heartbeat") as follows to avoid errors If you find such a string ("heartbeat"), please add a process to exclude it as follows.

```
if(message.indexOf("heartbeat") === -1){
  //Here is the actual processing
  //const obj = JSON.parse(messeage);
}
```

#### WebSocket Server Sample with Node.js

The following is a sample script that uses the ws package in Node.js to receive data from Logger. The script connects to port 5000 of the IP address of the machine running this script from Logger.

```
const server = require("ws").Server;
const ws_server = new server({ port: 5000 });

ws_server.on("connection", ws => {
  console.log("connected from client");
  ws.on('message',function(message){
    if(message.indexOf("heartbeat") === -1){
      // output message
      console.log(message);

      //In case of actual processing, parse and process
      //const obj = JSON.parse(messeage);
    }
  });
});
```
