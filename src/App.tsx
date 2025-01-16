import { memo, ReactNode, useEffect, useState } from "react";
import OlRouter from "@/components/OlRouter";
import ControllerBar from "@/components/ControllerBar";
import { MainCtxTypes, PAGE_PATH, PageCtxTypes } from "@/types/main";
import { MainCtx, PageCtx } from "@/utils/ctxs";
import ChatScreen from "@/components/ChatScreen";

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

const PageCtxContainer: React.FC<ReactFCPropsType> = (props) => {
  const { children } = props;
  const [currentPage, setCurrentPage] = useState<PAGE_PATH>(PAGE_PATH.HOME);
  const initPageCtxData: PageCtxTypes = {
    currentPage,
    setCurrentPage,
  };
  return (
    <PageCtx.Provider value={initPageCtxData}>{children}</PageCtx.Provider>
  );
};

const App: React.FC = () => {
  return (
    <MainCtxContainer>
      <PageCtxContainer>
        <OlRouter />
        <ChatScreen />
        <ControllerBar />
      </PageCtxContainer>
    </MainCtxContainer>
  );
};

export default memo(App);
