# TCP ソケット通信<Badge type="danger" text="アカデミック版" />

ソケット通信によるログファイルは「計測情報を記載したヘッダ部」と「センシングデータを記載したボディ部」の2段構成となっています。ヘッダ部には「Data mode、Transmission speed、Accelerometer sensor's range、Gyroscope sensor's range、データ序列」の順に計測情報が記載されています。

>
Select mode「Full」、Transmission speed「100Hz」、Measurement range of Accelerometer「±4g」、Measurement range of Gyroscope「1000dps」の場合

```
//Data mode  : Full
//Transmission speed  : 100Hz
//Acceleration sensor's range  : 4g
//Gyroscope sensor's range  : 1000dps
//ARTIFACT,NUM,DATE,ACC_X,ACC_Y,ACC_Z,GYRO_X,GYRO_Y,GYRO_Z,EOG_L,EOG_R,EOG_H,EOG_V
```



## ■各計測モードのデータ序列について


### ①計測モードが「Standard」の場合

```
//ARTIFACT,NUM,DATE,ACC_X,ACC_Y,ACC_Z,EOG_L1,EOG_R1,EOG_L2,EOG_R2,EOG_H1,EOG_H2,EOG_V1,EOG_V2
```

> 
【説明】  
アーチファクト、総カウント、計測日時、加速度センサー値（X軸）、加速度センサー値（Y軸）、加速度センサー値（Z軸）、EOGセンサー値1（左）、EOGセンサー値1（右）、EOGセンサー値2（左）、EOGセンサー値2（右）、EOGセンサー値1（水平差分）、EOGセンサー値2（水平差分）、EOGセンサー値1（垂直差分）、EOGセンサー値2（垂直差分）

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


### ②計測モードが「Full」の場合

```
//ARTIFACT,NUM,DATE,ACC_X,ACC_Y,ACC_Z,GYRO_X,GYRO_Y,GYRO_Z,EOG_L,EOG_R,EOG_H,EOG_V
```

> 
【説明】
アーチファクト、総カウント、計測日時、加速度センサー値（X軸）、加速度センサー値（Y軸）、加速度センサー値（Z軸）、角速度センサー値（X軸）、角速度センサー値（Y軸）、角速度センサー値（Z軸）、EOGセンサー値（左）、EOGセンサー値（右）、EOGセンサー値（水平差分）、EOGセンサー値（垂直差分）

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


### ③計測モードが「Quaternion」の場合

```
// Data mode  : Quaternion
// Transmission speed  : Standard
// Acceleration sensor's range  : 2g
// Gyroscope sensor's range  : 2000dps
//
//ARTIFACT,NUM,DATE,QUATERNION_W,QUATERNION_X,QUATERNION_Y,QUATERNION_Z
```

> 
【説明】
アーチファクト、総カウント、計測日時、クォータニオン(W)、クォータニオン(X)、クォータニオン(Y)、クォータニオン(Z)

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

## Socket クライアントサンプル

以下がPythonでのデータ受信サンプルです。

```
import socket
target_ip = "127.0.0.1" //Change here
target_port = 60000 //Change here
buffer_size = 4096

# 1.ソケットオブジェクトの作成
tcp_client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
print("tcp_client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)")

# 2.サーバに接続
tcp_client.connect((target_ip,target_port))
print("tcp_client.connect((target_ip,target_port))")

is_end = False
while not is_end:
    # 3.サーバからのレスポンスを受信
    response = tcp_client.recv(buffer_size)
    if response == b"":
        is_end = True
    print("[*]Received a response : {}".format(response))

# 4.接続を終了させる
tcp_client.close()
```
