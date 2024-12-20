import { memo } from "react";
import * as styles from "./styles.module.css";
import couple from "./assets/couple.png";

const HomePage: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.mainText}>我</div>
        <div className={styles.mainText}>们</div>
        <div className={styles.mainText}>订</div>
        <div className={styles.mainText1}>
          婚
          <img src={couple} className={styles.coupleImg} />
        </div>
        <div className={styles.mainText}>啦</div>
        <div className={styles.mainText}>！</div>
        <div className={styles.mainText}>！</div>
        <div className={styles.mainText}>！</div>
      </div>
    </div>
  );
};

export default memo(HomePage);
