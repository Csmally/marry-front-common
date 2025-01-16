import { memo, useCallback, useContext, useRef, useState } from "react";
import * as styles from "./styles.module.css";
import couple from "@/assets/imgs/couple.png";
import LottiePlayer, { LottiePlayerPropsType } from "@/components/LottiePlayer";
import elecLottieJson from "@/assets/lottieJson/electrocardiogram.json";
import loveChatJson from "@/assets/lottieJson/loveChat.json";
import { PageCtx } from "@/utils/ctxs";
import { PAGE_PATH } from "@/types/main";
import lbxx from "@/assets/imgs/lbxx.gif";

const ElectrocardiogramProps: LottiePlayerPropsType = {
  className: styles.elecContainer,
  options: {
    animationData: elecLottieJson,
  },
  width: 200,
  height: 200,
};

const LoveChatProps: LottiePlayerPropsType = {
  className: styles.loveChatContainer,
  options: {
    animationData: loveChatJson,
  },
  width: 90,
  height: 468,
  speed: 0.6,
};

const HomePage: React.FC = () => {
  const { setCurrentPage } = useContext(PageCtx);
  const lbxxRef = useRef(null);
  const lbxxVoiceRef = useRef(null);
  const [labxxEndFlag, setLabxxEndFlag] = useState(false);
  const playLbxxVoice = useCallback(() => {
    lbxxVoiceRef.current?.play();
  }, []);
  const toMoviePage = useCallback(() => {
    setTimeout(() => {
      setCurrentPage(PAGE_PATH.MOVIE);
    }, 5000);
  }, [setCurrentPage]);
  const laxxAnimationCb = useCallback(() => {
    setLabxxEndFlag(!labxxEndFlag);
  }, [labxxEndFlag]);
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
          <LottiePlayer {...LoveChatProps} />
        </div>
        <div className={styles.mainText}>啦</div>
        <div className={styles.mainText}>！</div>
        {/* 心电图动画 */}
        <LottiePlayer {...ElectrocardiogramProps} />
      </div>
      <img
        ref={lbxxRef}
        src={lbxx}
        className={styles.lbxx}
        onClick={playLbxxVoice}
        onAnimationIteration={laxxAnimationCb}
        style={{ transform: `scaleX(${labxxEndFlag ? -1 : 1})` }}
      />
      <audio
        ref={lbxxVoiceRef}
        src="https://www.onelight.ink/assets/songs/lbxxStart.flac"
        onEnded={toMoviePage}
      />
    </div>
  );
};

export default memo(HomePage);
