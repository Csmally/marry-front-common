import { memo, useEffect, useState } from "react";
import * as styles from "./styles.module.css";
import Chat from "./Chat";
import { ChatType } from "./types";
import { v4 as uuidv4 } from "uuid";

const ChatScreen: React.FC = () => {
  const [chats, setChats] = useState<ChatType[]>([]);
  useEffect(() => {
    // 创建 EventSource 实例
    const eventSource = new EventSource(
      `${process.env.BASE_URL}common/sse?uuid=${uuidv4()}`
    );
    // 监听消息事件
    eventSource.onmessage = (event) => {
      const newChat = JSON.parse(event.data);
      setChats((prevMessages) => [...prevMessages, newChat]);
    };
    // 组件卸载时关闭连接
    return () => {
      eventSource.close();
    };
  }, []);
  return (
    <div className={styles.container}>
      {chats.map((chat, index) => (
        <Chat key={index} chat={chat} />
      ))}
    </div>
  );
};

export default memo(ChatScreen);
