import { fetchRandomChat } from "@/services";
import { ChatType } from "@/types/interfaces";
import { ReactFCPropsType } from "@/types/main";
import { ChatsCtx, SseCtx } from "@/utils/ctxs";
import {
  memo,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

const ChatCtxContainer: React.FC<ReactFCPropsType> = (props) => {
  const { children } = props;
  const { sseClient } = useContext(SseCtx);
  const timerRef = useRef(null);
  const miniTimerRef = useRef(null);
  const [chats, setChats] = useState<ChatType[]>([]);
  const autoFetchChat = useCallback(async () => {
    clearInterval(miniTimerRef.current);
    const { success, data } = await fetchRandomChat();
    if (success) {
      const { list } = data;
      miniTimerRef.current = setInterval(() => {
        if (list?.length > 0) {
          setChats((prevChats) => [...prevChats, list.pop()]);
        } else {
          clearInterval(miniTimerRef.current);
        }
      }, 2000);
    }
  }, []);
  useEffect(() => {
    timerRef.current = setInterval(() => {
      autoFetchChat();
    }, 30000);
    return () => {
      clearInterval(timerRef.current);
      clearInterval(miniTimerRef.current);
    };
  }, [autoFetchChat]);
  useEffect(() => {
    if (sseClient) {
      // 监听自定义发送弹幕消息事件
      sseClient.addEventListener("addChat", (event) => {
        const newChat = JSON.parse(event.data);
        setChats((prevChats) => [...prevChats, newChat]);
      });
    }
  }, [sseClient]);
  const initCtxData = { chats };
  return <ChatsCtx.Provider value={initCtxData}>{children}</ChatsCtx.Provider>;
};

export default memo(ChatCtxContainer);
