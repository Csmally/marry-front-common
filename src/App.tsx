import { memo } from "react";
import OlRouter from "@/components/OlRouter";
import ControllerBar from "@/components/ControllerBar";
import ChatScreen from "@/components/ChatScreen";
import MainCtxContainer from "@/components/CtxContainers/MainCtxContainer";
import PageCtxContainer from "@/components/CtxContainers/PageCtxContainer";
import SseCtxContainer from "@/components/CtxContainers/SseCtxContainer";
import ChatCtxContainer from "@/components/CtxContainers/ChatCtxContainer";
import PhotoCtxContainer from "@/components/CtxContainers/PhotoCtxContainer";

const App: React.FC = () => {
  return (
    <MainCtxContainer>
      <PageCtxContainer>
        <SseCtxContainer>
          <ChatCtxContainer>
            <PhotoCtxContainer>
              <OlRouter />
              <ChatScreen />
              <ControllerBar />
            </PhotoCtxContainer>
          </ChatCtxContainer>
        </SseCtxContainer>
      </PageCtxContainer>
    </MainCtxContainer>
  );
};

export default memo(App);
