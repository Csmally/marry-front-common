import { ReactFCPropsType } from "@/types/main";
import { PhotoCtx, SseCtx } from "@/utils/ctxs";
import { memo, useContext, useEffect, useState } from "react";

const PhotoCtxContainer: React.FC<ReactFCPropsType> = (props) => {
  const { children } = props;
  const { sseClient } = useContext(SseCtx);
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    if (sseClient) {
      // 监听自定义发送弹幕消息事件
      sseClient.addEventListener("addPhoto", (event) => {
        console.log("9898--addPhoto--来了", event);
        setPhotos((i) => [...i, 123]);
      });
    }
  }, [sseClient]);
  const initCtxData = { photos };
  return <PhotoCtx.Provider value={initCtxData}>{children}</PhotoCtx.Provider>;
};

export default memo(PhotoCtxContainer);
