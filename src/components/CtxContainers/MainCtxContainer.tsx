import { MainCtxTypes } from "@/types/main";
import { MainCtx } from "@/utils/ctxs";
import { memo, ReactNode, useEffect, useState } from "react";

interface ReactFCPropsType {
  children: ReactNode;
}

const MainCtxContainer: React.FC<ReactFCPropsType> = (props) => {
  const { children } = props;
  const [currentScreenStatus, setCurrentScreenStatus] = useState(false);
  const initMainCtxData: MainCtxTypes = {
    currentScreenStatus,
    setCurrentScreenStatus,
  };
  useEffect(() => {
    document.addEventListener("fullscreenchange", () => {
      setCurrentScreenStatus(!!document.fullscreenElement);
    });
  }, []);
  return (
    <MainCtx.Provider value={initMainCtxData}>{children}</MainCtx.Provider>
  );
};

export default memo(MainCtxContainer);
