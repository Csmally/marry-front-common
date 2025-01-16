import { ReactFCPropsType } from "@/types/main";
import { MainCtx } from "@/utils/ctxs";
import { memo, useEffect, useState } from "react";

const MainCtxContainer: React.FC<ReactFCPropsType> = (props) => {
  const { children } = props;
  const [currentScreenStatus, setCurrentScreenStatus] = useState(false);
  const initCtxData = {
    currentScreenStatus,
    setCurrentScreenStatus,
  };
  useEffect(() => {
    document.addEventListener("fullscreenchange", () => {
      setCurrentScreenStatus(!!document.fullscreenElement);
    });
  }, []);
  return <MainCtx.Provider value={initCtxData}>{children}</MainCtx.Provider>;
};

export default memo(MainCtxContainer);
