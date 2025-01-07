import {
  memo,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { ENUM_MediaType, MovieScreenDataType } from "./movieData";
import * as styles from "./styles.module.css";
import { MoviePageCtx } from "@/utils/ctxs";

interface MovieScreenPropsType {
  selfIndex: number;
  screenData: MovieScreenDataType;
  currentScreenIndex: number;
  setCurrentScreen: (index: number) => void;
}

const MovieScreen: React.FC<MovieScreenPropsType> = (props) => {
  const { selfIndex, currentScreenIndex, screenData, setCurrentScreen } = props;
  const { bgVoiceRef } = useContext(MoviePageCtx);
  const {
    cnContent,
    enContent,
    hasMedia,
    timer,
    mediaType,
    mediaUrl,
    isEnd,
    musicText1,
    musicText2,
    speakText1,
    speakText2,
    mediaHorizontal,
    rotate,
    startBgMusic,
  } = screenData;
  const [show, setShow] = useState(true);
  const timerRef = useRef(null);
  const changeScreenRef = useRef(false);
  const onAnimationEnd = useCallback(() => {
    if (changeScreenRef.current && !isEnd) {
      setCurrentScreen(selfIndex + 1);
      return;
    }
    if (!isEnd) {
      timerRef.current = setTimeout(() => {
        changeScreenRef.current = true;
        setShow(false);
      }, timer * 1000);
    }
  }, [isEnd, selfIndex, setCurrentScreen, timer]);
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);
  useEffect(() => {
    if (startBgMusic && selfIndex === currentScreenIndex) {
      bgVoiceRef.current?.play();
    }
  }, [bgVoiceRef, currentScreenIndex, selfIndex, startBgMusic]);
  if (selfIndex !== currentScreenIndex) return null;
  if (!hasMedia) {
    return (
      <div
        className={show ? styles.textContainerIn : styles.textContainerOut}
        onAnimationEnd={onAnimationEnd}
      >
        <div className={styles.textCnText}>{cnContent}</div>
        <div className={styles.textEnText}>{enContent}</div>
      </div>
    );
  } else {
    return (
      <div
        className={show ? styles.mediaContainerIn : styles.mediaContainerOut}
        onAnimationEnd={onAnimationEnd}
      >
        <div className={styles.mediaContainerL}>
          {mediaType === ENUM_MediaType.IMAGE && (
            <img
              className={
                mediaHorizontal
                  ? styles.mediaImgHorizontal
                  : styles.mediaImgVertical
              }
              style={
                rotate
                  ? {
                      transform: `rotate(${rotate}deg)`,
                    }
                  : {}
              }
              src={mediaUrl}
            />
          )}
          {mediaType === ENUM_MediaType.VIDEO && <div>视频</div>}
        </div>
        <div className={styles.mediaContainerR}>
          <div className={styles.musicTextContainer}>
            <div className={styles.musicText1}>{musicText1}</div>
            <div className={styles.musicText2}>{musicText2}</div>
          </div>
          <div className={styles.speakTextContainer}>
            <div className={styles.speakText1}>{speakText1}</div>
            <div>{speakText2}</div>
          </div>
        </div>
      </div>
    );
  }
};

export default memo(MovieScreen);
