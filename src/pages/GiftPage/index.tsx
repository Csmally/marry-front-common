import { memo } from "react";
import * as styles from "./styles.module.css";
import LottiePlayer, { LottiePlayerPropsType } from "@/components/LottiePlayer";
import planeHeart from "@/assets/lottieJson/planeHeart.json";
// import moreHeart from "@/assets/lottieJson/moreHeart.json";
import heartGift from "@/assets/lottieJson/heartGift.json";
import giftMachine from "@/assets/lottieJson/giftMachine.json";
import chatHeart from "@/assets/lottieJson/chatHeart.json";
import photoCamera from "@/assets/lottieJson/photoCamera.json";
import giftBox from "@/assets/lottieJson/giftBox.json";

// 右上角桃心飞机
const planeHeartProps: LottiePlayerPropsType = {
  className: styles.planeHeartBox,
  options: {
    animationData: planeHeart,
  },
  width: 150,
  height: 150,
};

// 右下角桃心礼盒
const heartGiftProps: LottiePlayerPropsType = {
  className: styles.heartGiftBox,
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

// 左边-弹幕-抽奖机
const giftMachineLProps: LottiePlayerPropsType = {
  options: {
    animationData: giftMachine,
  },
  width: "70vh",
  height: "70vh",
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
  className: styles.giftBoxBox,
  options: {
    animationData: giftBox,
  },
  width: 300,
  height: 300,
};

const GiftPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <LottiePlayer {...planeHeartProps} />
      <LottiePlayer {...heartGiftProps} />
      <LottiePlayer {...giftBoxProps} />

      {/* 中间主图 */}
      <div className={styles.giftMachineContainer}>
        <LottiePlayer {...chatHeartProps} />
        <LottiePlayer {...giftMachineLProps} />
      </div>
      <div className={styles.giftMachineContainer}>
        <LottiePlayer {...photoCameraProps} />
        <LottiePlayer {...giftMachineRProps} />
      </div>
    </div>
  );
};

export default memo(GiftPage);
