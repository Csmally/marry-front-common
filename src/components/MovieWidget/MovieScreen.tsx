import { memo, useCallback, useEffect, useRef, useState } from "react";
import { ENUM_MediaType, MovieScreenDataType } from "./movieData";
import * as styles from "./styles.module.css";

interface MovieScreenPropsType {
  selfIndex: number;
  screenData: MovieScreenDataType;
  currentScreenIndex: number;
  setCurrentScreen: (index: number) => void;
}

const MovieScreen: React.FC<MovieScreenPropsType> = (props) => {
  const { selfIndex, currentScreenIndex, screenData, setCurrentScreen } = props;
  const {
    cnContent,
    enContent,
    hasMedia,
    timer,
    mediaType,
    mediaUrl,
    isEnd,
    musicText,
    speakText,
    mediaHorizontal,
    rotate,
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
          <div>{musicText}</div>
          <div>{speakText}</div>
        </div>
      </div>
    );
  }
};

export default memo(MovieScreen);
