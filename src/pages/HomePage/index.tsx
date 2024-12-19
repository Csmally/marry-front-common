import { memo } from "react";
import * as styles from "./styles.module.css";

const HomePage: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.mainText}>我们订婚啦！！！</div>
    </div>
  );
};

export default memo(HomePage);
