import { ReactFCPropsType } from "@/types/main";
import { PhotoCtx, SseCtx } from "@/utils/ctxs";
import { memo, useContext, useEffect, useState } from "react";

const initPhotos = [
  "https://www.onelight.ink/assets/movieScreen/movieScreen1.webp",
  "https://www.onelight.ink/assets/movieScreen/movieScreen2.webp",
  "https://www.onelight.ink/assets/movieScreen/movieScreen3.webp",
  "https://www.onelight.ink/assets/movieScreen/movieScreen4.webp",
  "https://www.onelight.ink/assets/movieScreen/movieScreen5.webp",
  "https://www.onelight.ink/assets/movieScreen/movieScreen6.webp",
  "https://www.onelight.ink/assets/movieScreen/movieScreen7.webp",
  "https://www.onelight.ink/assets/movieScreen/movieScreen8.webp",
  "https://www.onelight.ink/assets/movieScreen/movieScreen9.webp",
  "https://www.onelight.ink/assets/movieScreen/movieScreen10.webp",
  "https://www.onelight.ink/assets/movieScreen/movieScreen11.webp",
  "https://www.onelight.ink/assets/movieScreen/movieScreen12.webp",
  "https://www.onelight.ink/assets/movieScreen/movieScreen13.webp",
  "https://www.onelight.ink/assets/movieScreen/movieScreen14.webp",
  "https://www.onelight.ink/assets/movieScreen/movieScreen15.webp",
  "https://www.onelight.ink/assets/movieScreen/movieScreen16.webp",
  "https://www.onelight.ink/assets/movieScreen/movieScreen17.webp",
  "https://www.onelight.ink/assets/movieScreen/movieScreen18.webp",
  "https://www.onelight.ink/assets/movieScreen/movieScreen19.webp",
  "https://www.onelight.ink/assets/movieScreen/movieScreen20.webp",
  "https://www.onelight.ink/assets/movieScreen/movieScreen21.webp",
  "https://www.onelight.ink/assets/movieScreen/movieScreen22.webp",
  "https://www.onelight.ink/assets/movieScreen/movieScreen23.webp",
  "https://www.onelight.ink/assets/movieScreen/movieScreen24.webp",
  "https://www.onelight.ink/assets/movieScreen/movieScreen25.webp",
  "https://www.onelight.ink/assets/movieScreen/movieScreen26.webp",
];

const PhotoCtxContainer: React.FC<ReactFCPropsType> = (props) => {
  const { children } = props;
  const { sseClient } = useContext(SseCtx);
  const [photos, setPhotos] = useState(initPhotos);
  useEffect(() => {
    if (sseClient) {
      // 监听自定义发送弹幕消息事件
      sseClient.addEventListener("addPhoto", (event) => {
        setPhotos((i) => [...i, event.data]);
      });
    }
  }, [sseClient]);
  const initCtxData = { photos };
  return <PhotoCtx.Provider value={initCtxData}>{children}</PhotoCtx.Provider>;
};

export default memo(PhotoCtxContainer);
