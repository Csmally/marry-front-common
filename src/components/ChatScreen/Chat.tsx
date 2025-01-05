import { memo } from "react";
import { ChatType } from "./types";

interface ChatPropsType {
  chat: ChatType;
}

const Chat: React.FC<ChatPropsType> = (props) => {
  const { chat } = props;
  return (
    <div>
      <img />
      <div>{chat.content}</div>
    </div>
  );
};

export default memo(Chat);
