import { memo, useCallback, useEffect, useRef, useState } from "react";
import * as styles from "./styles.module.css";
import Chat from "./Chat";
import { v4 as uuidv4 } from "uuid";
import { ChatType } from "@/types/interfaces";
import { fetchRandomChat } from "@/services";

const ChatScreen: React.FC = () => {
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
  useEffect(() => {
    timerRef.current = setInterval(() => {
      autoFetchChat();
    }, 30000);
    return () => {
      clearInterval(timerRef.current);
    };
  }, [autoFetchChat]);
  return (
    <div className={styles.container}>
      {chats.map((chat, index) => (
        <Chat key={index} chat={chat} />
      ))}
    </div>
  );
};

export default memo(ChatScreen);
