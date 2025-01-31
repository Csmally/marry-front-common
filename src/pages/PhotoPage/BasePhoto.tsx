import { memo, useCallback } from "react";
import * as styles from "./styles.module.css";

interface BasePhotoPropsType {
  photoInfo: {
    url: string;
    isBaseImg: boolean;
  };
}

const BasePhoto: React.FC<BasePhotoPropsType> = (props) => {
  const { photoInfo } = props;
  const { url, isBaseImg } = photoInfo;
  const getRandomRotate = useCallback(() => {
    return `rotate(${Math.floor(Math.random() * 61) - 30}deg)`;
  }, []);
  if (url && isBaseImg) {
    return (
      <img
        src={url}
        className={styles.photoImg}
        style={{ transform: getRandomRotate() }}
      />
    );
  }
  return null;
};

export default memo(BasePhoto);
