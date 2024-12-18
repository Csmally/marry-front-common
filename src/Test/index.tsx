import { memo } from "react";
import * as styles from "./test.module.css";

const Test: React.FC = () => {
  console.log("9898tt", process.env.BASE_URL);
  return <div className={styles.a}>我们结婚啦！！！哈</div>;
};

export default memo(Test);
