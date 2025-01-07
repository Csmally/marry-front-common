import { memo, useRef, useState } from "react";
import * as styles from "./styles.module.css";
import LottiePlayer, { LottiePlayerPropsType } from "@/components/LottiePlayer";
import countDownJson from "@/assets/lottieJson/countDown.json";
import MovieWidget from "@/components/MovieWidget";
import { MoviePageCtx } from "@/utils/ctxs";

const MoviePage: React.FC = () => {
  const [showLottiePlayer, setShowLottiePlayer] = useState(true);
  const bgVoiceRef = useRef(null);
  const CountDownProps: LottiePlayerPropsType = {
    options: {
      animationData: countDownJson,
      loop: false,
    },
    width: 800,
    height: 500,
    eventListeners: [
      {
        eventName: "complete",
        callback: () => {
          setShowLottiePlayer(false);
        },
      },
    ],
  };
  const ctxValue = { bgVoiceRef };
  return (
    <MoviePageCtx.Provider value={ctxValue}>
      <div className={styles.container}>
        <div className={styles.borderLT}></div>
        <div className={styles.borderRB}></div>
        {!showLottiePlayer && <MovieWidget />}
        {showLottiePlayer && <LottiePlayer {...CountDownProps} />}
        <audio
          ref={bgVoiceRef}
          src="https://www.onelight.ink/assets/songs/loveMovie.flac"
        />
      </div>
    </MoviePageCtx.Provider>
  );
};

export default memo(MoviePage);
