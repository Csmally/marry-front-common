import { memo, useCallback, useMemo, useRef, useState } from "react";
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
import { fetchRandomGiftUser } from "@/services";
import GiftModal from "./GiftModal";

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
  const machnieLRef = useRef(null);
  const machnieRRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const giftUserRef = useRef(null);
  // 左边-弹幕-抽奖机
  const giftMachineLProps: LottiePlayerPropsType = useMemo(() => ({
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
          machnieLRef.current.stop?.();
          if (giftUserRef.current) {
            setShowModal(true);
          }
        }
      }
    ]
  }), []);
  // 右边-图片-抽奖机
  const giftMachineRProps: LottiePlayerPropsType = useMemo(() => ({
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
          machnieRRef.current.stop?.();
        }
      }
    ]
  }), []);
  // 请求抽奖接口
  const getRandomGiftUser = useCallback(async (type: number) => {
    const { success, data } = await fetchRandomGiftUser(type);
    if (success) {
      giftUserRef.current = data;
    }
  }, []);
  const getGiftByChat = useCallback(() => {
    machnieLRef.current.play?.();
    getRandomGiftUser(1);
  }, [getRandomGiftUser]);
  
  const getGiftByPhoto = useCallback(() => {
    machnieRRef.current.play?.();
    getRandomGiftUser(2);
  }, [getRandomGiftUser]);
  const closeModal = useCallback(() => {
    setShowModal(false);
    giftUserRef.current = null;
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.topAnimationBar}>
        <LottiePlayer {...loveTextProps} />
        <LottiePlayer {...loveChat1Props} />
        <LottiePlayer {...planeHeartProps} />
      </div>
      

      {/* 中间主图 */}
      <div className={styles.giftMachineContainer} onClick={getGiftByChat}>
        <LottiePlayer {...chatHeartProps} />
        <LottiePlayer {...giftMachineLProps} ref={machnieLRef}/>
      </div>
      <div className={styles.giftMachineContainer} onClick={getGiftByPhoto}>
        <LottiePlayer {...photoCameraProps} />
        <LottiePlayer {...giftMachineRProps} ref={machnieRRef}/>
      </div>
      
      <div className={styles.bottomAnimationBar}>
        <LottiePlayer {...heartGiftProps} />
        <LottiePlayer {...giftBoxProps} />
      </div>
      
      {showModal && <GiftModal closeModal={closeModal} userRef={giftUserRef} />}
    </div>
  );
};

export default memo(GiftPage);
