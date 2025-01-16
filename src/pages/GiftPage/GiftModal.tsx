import { memo, useMemo, useState } from "react";
import * as styles from "./styles.module.css";
import LottiePlayer, { LottiePlayerPropsType } from "@/components/LottiePlayer";
import giftBoomJson from "@/assets/lottieJson/giftBoom.json";
import congratulationJson from "@/assets/lottieJson/congratulation.json";
import closeIcon from "@/assets/imgs/close.png";

interface GiftModalPropsType {
  closeModal: () => void;
  userRef: any;
}

const congratulateProps: LottiePlayerPropsType = {
  options: {
    animationData: congratulationJson,
  },
  width: "60vh",
  height: "60vh",
};

const GiftModal: React.FC<GiftModalPropsType> = (props) => {
  const { closeModal, userRef } = props;
  const user = userRef.current || {};
  const [showBoom, setShowBoom] = useState(true);
  const giftBoomProps: LottiePlayerPropsType = useMemo(
    () => ({
      options: {
        animationData: giftBoomJson,
        loop: false,
      },
      width: "60vh",
      height: "60vh",
      eventListeners: [
        {
          eventName: "complete",
          callback: () => {
            setShowBoom(false);
          },
        },
      ],
    }),
    []
  );
  return (
    <div className={styles.modalContainer}>
      <img src={closeIcon} className={styles.closeIcon} onClick={closeModal} />
      {showBoom ? (
        <LottiePlayer {...giftBoomProps} />
      ) : (
        <>
          <div className={styles.userBox}>
            <img src={user.avatar} className={styles.avatarImg} />
            <div className={styles.userName}>{user.nickname}</div>
          </div>
          <LottiePlayer {...congratulateProps} />
        </>
      )}
    </div>
  );
};

export default memo(GiftModal);
