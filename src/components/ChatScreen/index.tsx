import { memo, useContext } from "react";
import * as styles from "./styles.module.css";
import Chat from "./Chat";
import { SseCtx } from "@/utils/ctxs";

const ChatScreen: React.FC = () => {
  const { chats } = useContext(SseCtx);
  return (
    <div className={styles.container}>
      {chats.map((chat, index) => (
        <Chat key={index} chat={chat} />
      ))}
    </div>
  );
};

export default memo(ChatScreen);
