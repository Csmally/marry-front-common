import { memo, useCallback, useContext } from "react";
import * as styles from "./styles.module.css";
import home from "@/assets/imgs/home.png";
import movie from "@/assets/imgs/movie.png";
import photo from "@/assets/imgs/photo.png";
import gift from "@/assets/imgs/gift.png";
import enlarge from "@/assets/imgs/enlarge.png";
import reduce from "@/assets/imgs/reduce.png";
import { MainCtx } from "@/utils/ctxs";
import { PAGE_PATH } from "@/types/main";

const ControllerBar: React.FC = () => {
  const {
    currentScreenStatus,
    setCurrentScreenStatus,
    setCurrentPage,
    currentPage,
  } = useContext(MainCtx);
  const changeScreenStatus = useCallback(
    (status: boolean) => {
      if (status) {
        document.documentElement.requestFullscreen();
      } else {
        document.exitFullscreen();
      }
      setCurrentScreenStatus(status);
    },
    [setCurrentScreenStatus]
  );
  const jumpTo = useCallback(
    (path: PAGE_PATH) => {
      if (path === currentPage) return;
      setCurrentPage(path);
    },
    [currentPage, setCurrentPage]
  );
  return (
    <div className={styles.container}>
      <img
        src={home}
        className={styles.icon}
        onClick={() => jumpTo(PAGE_PATH.HOME)}
      />
      <img
        src={movie}
        className={styles.icon}
        onClick={() => jumpTo(PAGE_PATH.MOVIE)}
      />
      <img
        src={photo}
        className={styles.icon}
        onClick={() => jumpTo(PAGE_PATH.PTHOTO)}
      />
      <img
        src={gift}
        className={styles.icon}
        onClick={() => jumpTo(PAGE_PATH.GIFT)}
      />
      {currentScreenStatus ? (
        <img
          src={reduce}
          className={styles.icon}
          onClick={() => changeScreenStatus(false)}
        />
      ) : (
        <img
          src={enlarge}
          className={styles.icon}
          onClick={() => changeScreenStatus(true)}
        />
      )}
    </div>
  );
};

export default memo(ControllerBar);
