import { memo, useCallback, useState } from "react";
import * as styles from "./styles.module.css";
import { ChatType } from "@/types/interfaces";

interface ChatPropsType {
  chat: ChatType;
}

const getRandom = () => {
  return (Math.random() * 85).toFixed(1); // 保留 1 位小数
};

const Chat: React.FC<ChatPropsType> = (props) => {
  const { chat } = props;
  const [animationEnd, setAnimationEnd] = useState(false);
  const destroyDom = useCallback(() => {
    setAnimationEnd(true);
  }, []);
  if (animationEnd) return null;
  return (
    <div
      className={styles.chatBox}
      style={{ top: `${getRandom()}vh` }}
      onAnimationEnd={destroyDom}
    >
      <img
        src={chat.avatar || chat.avatar["User.avatar"]}
        className={styles.chatAvatar}
      />
      <div
        style={{ color: chat.bgColor || "#000000" }}
        className={styles.chatText}
      >
        {chat.content}
      </div>
    </div>
  );
};

export default memo(Chat);
