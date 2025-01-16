import { fetchRandomChat } from "@/services";
import { ChatType } from "@/types/interfaces";
import { SseCtx } from "@/utils/ctxs";
import {
  memo,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { v4 as uuidv4 } from "uuid";

interface ReactFCPropsType {
  children: ReactNode;
}

const SseCtxContainer: React.FC<ReactFCPropsType> = (props) => {
  const { children } = props;
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
    // 创建 EventSource 实例
    const eventSource = new EventSource(
      `${process.env.BASE_URL}common/sse?uuid=${uuidv4()}`
    );
    // 监听消息事件
    eventSource.onmessage = (event) => {
      const newChat = JSON.parse(event.data);
      setChats((prevChats) => [...prevChats, newChat]);
    };
    // 组件卸载时关闭连接
    return () => {
      eventSource.close();
    };
  }, []);
  const initPageCtxData = { chats };
  return <SseCtx.Provider value={initPageCtxData}>{children}</SseCtx.Provider>;
};

export default memo(SseCtxContainer);
