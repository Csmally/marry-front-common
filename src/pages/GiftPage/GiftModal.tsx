import { memo, useMemo, useState } from "react";
import * as styles from "./styles.module.css";
import LottiePlayer, { LottiePlayerPropsType } from "@/components/LottiePlayer";
import giftBoomJson from "@/assets/lottieJson/giftBoom.json";

interface GiftModalPropsType {
    closeModal: () => void;
    userRef: any;
}

const congratulateProps: LottiePlayerPropsType = {
    className: styles.congratulateBox,
    options: {
        animationData: giftBoomJson,
      },
      width: '60vh',
      height: '60vh',
}

const GiftModal: React.FC<GiftModalPropsType> = (props) => {
    const { userRef } = props;
    const user = userRef.current || {};
    console.log('9898-user', user);
    const [showBoom, setShowBoom] = useState(true);
    const giftBoomProps: LottiePlayerPropsType = useMemo(() => ({
        options: {
          animationData: giftBoomJson,
          loop: false,
        },
        width: '60vh',
        height: '60vh',
        eventListeners: [
            {
                eventName: 'complete',
                callback: () => {
                    setShowBoom(false);
                }
            }
        ]
    }), []);
    return (
        <div className={styles.modalContainer}>
            {
                showBoom ? <LottiePlayer {...giftBoomProps} /> : (
                    <div>
                        <img src={user.avatar} className={styles.chatAvatar} />
                        <div>{user.nickname}</div>
                        <LottiePlayer {...congratulateProps} />
                    </div>
                )
            }
        </div>
    )
}

export default memo(GiftModal);