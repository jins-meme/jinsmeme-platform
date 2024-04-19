# モーショントラッキング前処理例

このページではJINS MEMEデータをモーショントラッキングとして活用するための注意事項や推奨前処理を記載しています。

## 既知の課題

モーショントラッキングとして使用する際にJINS MEMEデータそのままでは課題がありますが、ある程度前処理を加えることで回避できるものもありますので、そのような用途でご利用される方のためのサンプルコード(JavaScript)を以下に一部提示してあります。

1. 角度データがドリフトする（じわじわ動く）→静止時補正を入れることで回避可能
2. 角度データに段差が出ることがある（カクっと動く）→2フレーム(0.1s)遅らせることで回避可能
3. 20Hzだと解像度が足りない→補完フレームを入れることで対処可能
4. 視線移動の精度が低い（どこを向いている、までの精度が無い）→次善ロジックを検討
5. まばたきの検出が遅い→2022年に対応ファームウェアを公開する方向で検討中

## 基本の前処理

後段の処理がしやすいよう、角度を角速度に変換します。単純に差分を取ると、一周した時に段差になってしまうので分岐をかけます。

```
//変数定義
let roll_m1 = 0;
let pitch_m1 = 0;
let yaw_m1 = 0;
//*_driftはドリフト補正を実施する時に利用しますので、不要な場合は削ってください

//current data callback
const callback = data => {
  //rollは一周しない
  roll_moment = data.roll - roll_m1 - roll_drift;

  //yaw/pitchは一周するので差分が大きい時はマイナスからプラスに飛んだものとみなす
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
  
  //前回値の記録
  yaw_m1 = data.yaw;
  pitch_m1 = data.pitch;
  roll_m1 = data.roll;
}
```

角速度は都度足していけば角度に戻ります。

## 角度データがドリフトする

シンプルに **1秒毎に角速度をバッファし、5秒(5回分)たってほぼ同じ値を出し続けている時にそれらをベースラインとして補正** します。通常の装着時に5秒間同じ角速度を出すシーンはほぼ無いため、このロジックを入れることでメガネを静かなところに5-10秒待つとドリフトが抑えられます。

```
//変数定義

//ドリフト制御
let roll_moment_drift_calib_ary = new Array(5).fill(0);
let pitch_moment_drift_calib_ary = new Array(5).fill(0);
let yaw_moment_drift_calib_ary = new Array(5).fill(0);
let roll_drift = 0;
let pitch_drift = 0;
let yaw_drift = 0;
let dcnt = 0;//カウンタ

//配列の最大値を算出する関数
const maxArray = arr => {
  return arr.reduce( (prev, current) => {return prev < current ? current : prev});
};

//配列の最小値を算出する関数
const minArray = arr => {
  return arr.reduce( (prev, current) => {return prev > current ? current : prev});
};

//配列の単純合計
const sumArray = arr => {
  return arr.reduce( (prev, current, i, arr) => {return prev+current});
};

//配列の単純平均
const aveArray = arr => {
  return sumArray(arr) / (arr.length);
};

//current data callback
const callback = data => {
  //1秒おき
  if (dcnt % 20 == 0) {
    roll_moment_drift_calib_ary.push(roll_moment);
    roll_moment_drift_calib_ary.shift();
    pitch_moment_drift_calib_ary.push(pitch_moment);
    pitch_moment_drift_calib_ary.shift();
    yaw_moment_drift_calib_ary.push(yaw_moment);
    yaw_moment_drift_calib_ary.shift();

    //5秒おき
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

この演算でドリフト成分が計算され、前記角速度(*_moment)の計算の際にセットされます。

## 角度データに段差が出ることがある（カクっと動く）

角度データ上、静止しているにも関わらず階段状になる現象です。角速度で見ると前後の角速度に比べて1フレームだけ飛び出るシグナルになるので、前後の角速度と比較することで補正が可能ですが、デメリットとして2フレーム(0.1s)遅れる、ということがあります。

```
//変数定義
let roll_moment_ary = new Array(3).fill(0);
let pitch_moment_ary = new Array(3).fill(0);
let yaw_moment_ary = new Array(3).fill(0);

//current data callback
const callback = data => {
  //角速度バッファに格納
  roll_moment_ary.push(roll_moment);
  roll_moment_ary.shift();
  pitch_moment_ary.push(pitch_moment);
  pitch_moment_ary.shift();
  yaw_moment_ary.push(yaw_moment);
  yaw_moment_ary.shift();

  //hump発生の検知 角速度が1フレームだけピークを出すことは通常装着ではありえないので、そのような時は段差が出ていないフレームで代替する
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

*_moment_no_hump は段差のない角速度になります。

## 20Hzだと解像度が足りない

JINS MEMEからは20Hz(50msに一回)でデータを送信するので、例えば受信時+0msと受信時+25msで角速度を2分割で出力すれば補完フレームを作成することができます。

## 視線移動の精度が低い（どこを向いている、までの精度が無い）

これに関しては本質的な改善が難しいので **不自然にならないようにする** 次善策をとります。考えられる推奨方法は以下です。

- 縦視線移動は利用しない（まばたきと同チャネルのデータのため本質的に精度が低いです）
- 横視線移動を累積して視線位置を動かし、2−3秒間正面を向いていなかったら強制的に累積値を0に戻す
- 視線移動は誤差関数(error function)のような形状の関数を使って中間フレームを補完する

## まばたきの検出が遅い

まばたきの検出は前世代では0.3s、現世代では0.5sのディレイがあります。これは「ライフログで一番精度が上がる」ように誤判定の原因になりそうな前後のシグナル推移のウィンドウを確保しているのが理由です。こちらは2022年以降に対応ファームウェアを公開する方向で検討しております。

## センサ上違うところを向いているが、まっすぐに補正したい

スマホと一緒に回転した時、センサとしては回転を検出しますが、見ているスマホは同じなので向きがずれるから直したい、ということはあるかと思います。こちらに関しても次善策しかありませんので、視線移動と同じようなロジックを組むしかないかと考えれます。

- 角速度を累積し、2−3秒間正面を向いていなかったら強制的に累積値を0に戻す
- 移動は誤差関数(error function)のような形状の関数を使って中間フレームを補完する

## 結び

JINS MEMEのデータを、大まかなモーションの把握以上の用途で使用する場合、上記のような補正ロジックはどうしても必要になってしまいます。もしそのような用途で検討されている方の参考になりましたら幸いです。