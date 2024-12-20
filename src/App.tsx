import { memo, ReactNode, useEffect, useState } from "react";
import OlRouter from "@/components/olRouter";
import ControllerBar from "@/components/controllerBar";
import { MainCtxTypes, PAGE_PATH } from "@/types/main";
import { MainCtx } from "@/utils/ctxs";

interface MainCtxContainerPropsType {
  children: ReactNode;
}

const MainCtxContainer: React.FC<MainCtxContainerPropsType> = (props) => {
  const { children } = props;
  const [currentPage, setCurrentPage] = useState<PAGE_PATH>(PAGE_PATH.HOME);
  const [currentScreenStatus, setCurrentScreenStatus] = useState(false);
  const initMainCtxData: MainCtxTypes = {
    currentPage,
    setCurrentPage,
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

const App: React.FC = () => {
  return (
    <MainCtxContainer>
      <OlRouter />
      <ControllerBar />
    </MainCtxContainer>
  );
};

export default memo(App);
