import { memo, useCallback } from "react";
import * as styles from "./styles.module.css";

interface CustomerPhotoPropsType {
  photoInfo: {
    url: string;
    isBaseImg: boolean;
  };
}

const CustomerPhoto: React.FC<CustomerPhotoPropsType> = (props) => {
  const { photoInfo } = props;
  const { url, isBaseImg } = photoInfo;
  const getRandomRotate = useCallback(() => {
    return `rotate(${Math.floor(Math.random() * 61) - 30}deg)`;
  }, []);
  const getRandomLeft = useCallback(() => {
    return `${(Math.random() * 55).toFixed(2)}vh`;
  }, []);
  const getRandomTop = useCallback(() => {
    return `${(Math.random() * 45).toFixed(2)}vh`;
  }, []);
  if (url && !isBaseImg) {
    return (
      <img
        src={url}
        className={styles.customerPhotoImg}
        style={{
          transform: getRandomRotate(),
          left: getRandomLeft(),
          top: getRandomTop(),
        }}
      />
    );
  }
  return null;
};

export default memo(CustomerPhoto);
