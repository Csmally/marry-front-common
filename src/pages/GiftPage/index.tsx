import { memo, useRef } from "react";
import * as styles from "./styles.module.css";
import LottiePlayer, { LottiePlayerPropsType } from "@/components/LottiePlayer";
import planeHeart from "@/assets/lottieJson/planeHeart.json";
import heartGift from "@/assets/lottieJson/heartGift.json";
import giftMachine from "@/assets/lottieJson/giftMachine.json";
import chatHeart from "@/assets/lottieJson/chatHeart.json";
import photoCamera from "@/assets/lottieJson/photoCamera.json";
import giftBox from "@/assets/lottieJson/giftBox.json";
import loveText from "@/assets/lottieJson/loveText.json";
import loveChat1 from "@/assets/lottieJson/loveChat1.json";

// 右上角桃心飞机
const planeHeartProps: LottiePlayerPropsType = {
  options: {
    animationData: planeHeart,
  },
  width: 150,
  height: 150,
};

// 左下角桃心礼盒
const heartGiftProps: LottiePlayerPropsType = {
  options: {
    animationData: heartGift,
  },
  width: 150,
  height: 150,
};

// 聊天桃心
const chatHeartProps: LottiePlayerPropsType = {
  className: styles.giftMachineInnerLBox,
  options: {
    animationData: chatHeart,
  },
  width: 100,
  height: 100,
};

// 相机拍照
const photoCameraProps: LottiePlayerPropsType = {
  className: styles.giftMachineInnerRBox,
  options: {
    animationData: photoCamera,
  },
  width: 100,
  height: 100,
};

// 右边-图片-抽奖机
const giftMachineRProps: LottiePlayerPropsType = {
  options: {
    animationData: giftMachine,
  },
  width: "70vh",
  height: "70vh",
};

const giftBoxProps: LottiePlayerPropsType = {
  options: {
    animationData: giftBox,
  },
  width: 150,
  height: 150,
};

const loveTextProps: LottiePlayerPropsType = {
  options: {
    animationData: loveText,
  },
  width: 150,
  height: 150,
};

const loveChat1Props: LottiePlayerPropsType = {
  options: {
    animationData: loveChat1,
  },
  width: 200,
  height: 200,
};

const GiftPage: React.FC = () => {
  const machnieRef = useRef(null);
  // 左边-弹幕-抽奖机
  const giftMachineLProps: LottiePlayerPropsType = {
    options: {
      animationData: giftMachine,
      autoplay: false,
    },
    width: "70vh",
    height: "70vh",
    eventListeners: [
      {
        eventName: 'loopComplete',
        callback: () => {
          machnieRef.current.stop();
        }
      }
    ]
  };
  const tt = () => {
    machnieRef.current.play();
  };
  return (
    <div className={styles.container}>
      <div className={styles.topAnimationBar}>
        <LottiePlayer {...loveTextProps} />
        <LottiePlayer {...loveChat1Props} />
        <LottiePlayer {...planeHeartProps} />
        <div style={{background: 'red'}} onClick={tt}>点击</div>
      </div>
      

      {/* 中间主图 */}
      <div className={styles.giftMachineContainer}>
        <LottiePlayer {...chatHeartProps} />
        <LottiePlayer {...giftMachineLProps} ref={machnieRef}/>
      </div>
      <div className={styles.giftMachineContainer}>
        <LottiePlayer {...photoCameraProps} />
        <LottiePlayer {...giftMachineRProps} />
      </div>
      
      <div className={styles.bottomAnimationBar}>
        <LottiePlayer {...heartGiftProps} />
        <LottiePlayer {...giftBoxProps} />
      </div>
    </div>
  );
};

export default memo(GiftPage);
