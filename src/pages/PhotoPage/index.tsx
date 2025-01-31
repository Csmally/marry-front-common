import { PhotoCtx } from "@/utils/ctxs";
import { memo, useCallback, useContext } from "react";
import * as styles from "./styles.module.css";
import LottiePlayer, { LottiePlayerPropsType } from "@/components/LottiePlayer";
import photo1Json from "@/assets/lottieJson/photo1.json";
import photo2Json from "@/assets/lottieJson/photo2.json";
import photo3Json from "@/assets/lottieJson/photo3.json";
import photo4Json from "@/assets/lottieJson/photo4.json";
import photo5Json from "@/assets/lottieJson/photo5.json";
import photo6Json from "@/assets/lottieJson/photo6.json";
import photo7Json from "@/assets/lottieJson/photo7.json";

const photo1Props: LottiePlayerPropsType = {
  options: {
    animationData: photo1Json,
  },
  width: 100,
  height: 100,
};
const photo2Props: LottiePlayerPropsType = {
  options: {
    animationData: photo2Json,
  },
  width: 100,
  height: 100,
};
const photo3Props: LottiePlayerPropsType = {
  options: {
    animationData: photo3Json,
  },
  width: 150,
  height: 150,
};
const photo4Props: LottiePlayerPropsType = {
  options: {
    animationData: photo4Json,
  },
  width: 100,
  height: 100,
};
const photo5Props: LottiePlayerPropsType = {
  options: {
    animationData: photo5Json,
  },
  width: 150,
  height: 150,
};
const photo6Props: LottiePlayerPropsType = {
  options: {
    animationData: photo6Json,
  },
  width: 100,
  height: 100,
};

const photo7Props: LottiePlayerPropsType = {
  options: {
    animationData: photo7Json,
  },
  width: 100,
  height: 100,
};

const PhotoPage: React.FC = () => {
  const { photos } = useContext(PhotoCtx);
  const getRandomRotate = useCallback(() => {
    return `rotate(${Math.floor(Math.random() * 61) - 30}deg)`;
  }, []);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.topAnimationBar}>
          <LottiePlayer {...photo1Props} />
          <LottiePlayer {...photo2Props} />
          <LottiePlayer {...photo2Props} />
          <LottiePlayer {...photo2Props} />
          <LottiePlayer {...photo5Props} />
        </div>

        <div className={styles.midAnimationBar}>
          <LottiePlayer {...photo7Props} />
          <LottiePlayer {...photo7Props} />
        </div>
        <div className={styles.bottomAnimationBar}>
          <LottiePlayer {...photo3Props} />
          <LottiePlayer {...photo6Props} />
          <LottiePlayer {...photo4Props} />
        </div>
      </div>
      <div className={styles.photoContainer}>
        <div className={styles.photoBox}>
          {photos.map((i, index) => (
            <img
              key={index}
              src={i}
              className={styles.photoImg}
              style={{ transform: getRandomRotate() }}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default memo(PhotoPage);
