# TCP Socket Communication<Badge type="danger" text="Academic" />

The socket communication log file consists of two parts: the header containing the measurement information and the body containing the sensing data. The header contains the measurement information "Data mode, Transmission speed, Accelerometer sensor's range, Gyroscope sensor's range, and data rank" respectively.

>
 For Select mode "Full", Transmission speed "100Hz", Measurement range of Accelerometer "±4g", and Measurement range of Gyroscope "1000dps"

```
//Data mode  : Full
//Transmission speed  : 100Hz
//Acceleration sensor's range  : 4g
//Gyroscope sensor's range  : 1000dps
//ARTIFACT,NUM,DATE,ACC_X,ACC_Y,ACC_Z,GYRO_X,GYRO_Y,GYRO_Z,EOG_L,EOG_R,EOG_H,EOG_V
```



## ■Data Rank in each Measurement Mode


### 1) When Measurement mode is "Standard"

```
//ARTIFACT,NUM,DATE,ACC_X,ACC_Y,ACC_Z,EOG_L1,EOG_R1,EOG_L2,EOG_R2,EOG_H1,EOG_H2,EOG_V1,EOG_V2
```

> 
Description  
Artifact, Total count, Measurement date/time, Acceleration sensor value (X-axis), Acceleration sensor value (Y-axis), Acceleration sensor value (Z-axis), EOG sensor value 1 (left), EOG sensor value 1 (right), EOG sensor value 2 (left), EOG sensor value 2 (right), EOG sensor value 1 (horizontal difference), EOG sensor value 2 (horizontal difference), EOG sensor value 1 (vertical difference), EOG sensor value 2 (vertical difference)

```
// Data mode  : Standard
// Transmission speed  : 50Hz
// Acceleration sensor's range  : 2g
// Gyroscope sensor's range  : 250dps
//
//ARTIFACT,NUM,DATE,ACC_X,ACC_Y,ACC_Z,EOG_L1,EOG_R1,EOG_L2,EOG_R2,EOG_H1,EOG_H2,EOG_V1,EOG_V2
,1,2016/03/15 01:25:10.85,790,329,16523,-59,-189,-21,-165,130,144,124,93
,2,2016/03/15 01:25:10.87,746,369,16503,-42,-158,-7,-153,116,146,100,80
,3,2016/03/15 01:25:10.89,801,302,16553,-48,-161,-16,-152,113,136,104,84
```


### 2) When Measurement mode is "Full"

```
//ARTIFACT,NUM,DATE,ACC_X,ACC_Y,ACC_Z,GYRO_X,GYRO_Y,GYRO_Z,EOG_L,EOG_R,EOG_H,EOG_V
```

> 
Description  
Artifact, Total count, Measurement date/time, Acceleration sensor value (X-axis), Acceleration sensor value (Y-axis), Acceleration sensor value (Z-axis), Angular velocity sensor value (X-axis), Angular velocity sensor value (Y-axis), Angular velocity sensor value (Z-axis), EOG sensor value (left), EOG sensor value (right), EOG sensor value (horizontal difference), EOG sensor value (vertical difference)

```
// Data mode  : Full
// Transmission speed  : 100Hz
// Acceleration sensor's range  : 2g
// Gyroscope sensor's range  : 250dps
//
//ARTIFACT,NUM,DATE,ACC_X,ACC_Y,ACC_Z,GYRO_X,GYRO_Y,GYRO_Z,EOG_L,EOG_R,EOG_H,EOG_V
,1,2016/03/15 01:26:07.23,780,254,16542,0,33,-66,4,-171,175,83
,2,2016/03/15 01:26:07.24,737,293,16559,-7,11,-79,12,-150,162,69
,3,2016/03/15 01:26:07.25,896,249,16539,15,34,-58,-9,-196,187,102
```


### 3) When measurement mode is "Quaternion"

```
// Data mode  : Quaternion
// Transmission speed  : Standard
// Acceleration sensor's range  : 2g
// Gyroscope sensor's range  : 2000dps
//
//ARTIFACT,NUM,DATE,QUATERNION_W,QUATERNION_X,QUATERNION_Y,QUATERNION_Z
```

> 
Description
Artifact, Total count, Measurement date/time, Quaternion (W) Quaternion (X) Quaternion (Y) Quaternion (Z)

```
// Data mode  : Quaternion
// Transmission speed  : 50Hz
// Acceleration sensor's range  : 2g
// Gyroscope sensor's range  : 2000dps
//
//ARTIFACT,NUM,DATE,QUATERNION_W,QUATERNION_X,QUATERNION_Y,QUATERNION_Z
,1,2016/3/21 15:51:53.32,13931501,1065299619,133555066,-5213924
,2,2016/3/21 15:51:53.34,13930073,1065376001,132938877,-5356280
,3,2016/3/21 15:51:53.36,13922096,1065454235,132305442,-549757
```

## Socket client sample

Below is a sample of data reception in Python.

```
import socket
target_ip = "127.0.0.1" //Change here
target_port = 60000 //Change here
buffer_size = 4096

# 1.Creating a Socket Object
tcp_client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
print("tcp_client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)")

# 2.Connect to Server
tcp_client.connect((target_ip,target_port))
print("tcp_client.connect((target_ip,target_port))")

is_end = False
while not is_end:
    # 3.Receive response from server
    response = tcp_client.recv(buffer_size)
    if response == b"":
        is_end = True
    print("[*]Received a response : {}".format(response))

# 4.Terminate the connection
tcp_client.close()
```