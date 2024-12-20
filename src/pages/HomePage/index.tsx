import { memo } from "react";
import * as styles from "./styles.module.css";
import couple from "@/assets/imgs/couple.png";
import LottiePlayer, { LottiePlayerPropsType } from "@/components/LottiePlayer";
import elecLottieJson from '@/assets/lottieJson/electrocardiogram.json';
import loveChatJson from '@/assets/lottieJson/loveChat.json';

const ElectrocardiogramProps: LottiePlayerPropsType = {
  className: styles.elecContainer,
  options: {
    animationData: elecLottieJson,
  },
  width: 200,
  height: 200,
}

const LoveChatProps: LottiePlayerPropsType = {
  className: styles.loveChatContainer,
  options: {
    animationData: loveChatJson,
  },
  width: 90,
  height: 468,
  speed: 0.6,
}

const HomePage: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.mainText}>我</div>
        <div className={styles.mainText}>们</div>
        <div className={styles.mainText}>订</div>
        <div className={styles.mainText}>
          婚
          <img src={couple} className={styles.coupleImg} />
          {/* 相爱对话 */}
          <LottiePlayer {...LoveChatProps}/>
        </div>
        <div className={styles.mainText}>啦</div>
        <div className={styles.mainText}>！</div>
        <div className={styles.mainText}>！</div>
        <div className={styles.mainText}>！</div>
        {/* 心电图动画 */}
        <LottiePlayer {...ElectrocardiogramProps}/>
      </div>
    </div>
  );
};

export default memo(HomePage);
