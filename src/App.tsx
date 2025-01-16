import { memo } from "react";
import OlRouter from "@/components/OlRouter";
import ControllerBar from "@/components/ControllerBar";
import ChatScreen from "@/components/ChatScreen";
import MainCtxContainer from "@/components/CtxContainers/MainCtxContainer";
import PageCtxContainer from "@/components/CtxContainers/PageCtxContainer";
import SseCtxContainer from "@/components/CtxContainers/SseCtxContainer";

const App: React.FC = () => {
  return (
    <MainCtxContainer>
      <PageCtxContainer>
        <SseCtxContainer>
          <OlRouter />
          <ChatScreen />
          <ControllerBar />
        </SseCtxContainer>
      </PageCtxContainer>
    </MainCtxContainer>
  );
};

export default memo(App);
