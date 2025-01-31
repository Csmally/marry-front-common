import { ReactFCPropsType } from "@/types/main";
import { PhotoCtx, SseCtx } from "@/utils/ctxs";
import { memo, useContext, useEffect, useState } from "react";

const initPhotos = [
  {
    url: "https://www.onelight.ink/assets/movieScreen/movieScreen1.webp",
    isBaseImg: true,
  },
  {
    url: "https://www.onelight.ink/assets/movieScreen/movieScreen2.webp",
    isBaseImg: true,
  },
  {
    url: "https://www.onelight.ink/assets/movieScreen/movieScreen3.webp",
    isBaseImg: true,
  },
  {
    url: "https://www.onelight.ink/assets/movieScreen/movieScreen4.webp",
    isBaseImg: true,
  },
  {
    url: "https://www.onelight.ink/assets/movieScreen/movieScreen5.webp",
    isBaseImg: true,
  },
  {
    url: "https://www.onelight.ink/assets/movieScreen/movieScreen6.webp",
    isBaseImg: true,
  },
  {
    url: "https://www.onelight.ink/assets/movieScreen/movieScreen7.webp",
    isBaseImg: true,
  },
  {
    url: "https://www.onelight.ink/assets/movieScreen/movieScreen8.webp",
    isBaseImg: true,
  },
  {
    url: "https://www.onelight.ink/assets/movieScreen/movieScreen9.webp",
    isBaseImg: true,
  },
  {
    url: "https://www.onelight.ink/assets/movieScreen/movieScreen10.webp",
    isBaseImg: true,
  },
  {
    url: "https://www.onelight.ink/assets/movieScreen/movieScreen11.webp",
    isBaseImg: true,
  },
  {
    url: "https://www.onelight.ink/assets/movieScreen/movieScreen12.webp",
    isBaseImg: true,
  },
  {
    url: "https://www.onelight.ink/assets/movieScreen/movieScreen13.webp",
    isBaseImg: true,
  },
  {
    url: "https://www.onelight.ink/assets/movieScreen/movieScreen14.webp",
    isBaseImg: true,
  },
  {
    url: "https://www.onelight.ink/assets/movieScreen/movieScreen15.webp",
    isBaseImg: true,
  },
  {
    url: "https://www.onelight.ink/assets/movieScreen/movieScreen16.webp",
    isBaseImg: true,
  },
  {
    url: "https://www.onelight.ink/assets/movieScreen/movieScreen17.webp",
    isBaseImg: true,
  },
  {
    url: "https://www.onelight.ink/assets/movieScreen/movieScreen18.webp",
    isBaseImg: true,
  },
  {
    url: "https://www.onelight.ink/assets/movieScreen/movieScreen19.webp",
    isBaseImg: true,
  },
  {
    url: "https://www.onelight.ink/assets/movieScreen/movieScreen20.webp",
    isBaseImg: true,
  },
  {
    url: "https://www.onelight.ink/assets/movieScreen/movieScreen21.webp",
    isBaseImg: true,
  },
  {
    url: "https://www.onelight.ink/assets/movieScreen/movieScreen22.webp",
    isBaseImg: true,
  },
  {
    url: "https://www.onelight.ink/assets/movieScreen/movieScreen23.webp",
    isBaseImg: true,
  },
  {
    url: "https://www.onelight.ink/assets/movieScreen/movieScreen24.webp",
    isBaseImg: true,
  },
  {
    url: "https://www.onelight.ink/assets/movieScreen/movieScreen25.webp",
    isBaseImg: true,
  },
  {
    url: "https://www.onelight.ink/assets/movieScreen/movieScreen26.webp",
    isBaseImg: true,
  },
  {
    url: "https://www.onelight.ink/assets/movieScreen/movieScreen26.webp",
    isBaseImg: true,
  },
  {
    url: "https://www.onelight.ink/assets/movieScreen/movieScreen25.webp",
    isBaseImg: true,
  },
  {
    url: "https://www.onelight.ink/assets/movieScreen/movieScreen8.webp",
    isBaseImg: true,
  },
  {
    url: "https://www.onelight.ink/assets/movieScreen/movieScreen6.webp",
    isBaseImg: true,
  },
];

const PhotoCtxContainer: React.FC<ReactFCPropsType> = (props) => {
  const { children } = props;
  const { sseClient } = useContext(SseCtx);
  const [photos, setPhotos] = useState(initPhotos);
  useEffect(() => {
    if (sseClient) {
      // 监听自定义发送弹幕消息事件
      sseClient.addEventListener("addPhoto", (event) => {
        let photoInfo;
        try {
          photoInfo = JSON.parse(event.data);
        } catch (error) {
          if (error) {
            photoInfo = { url: null, isBaseImg: false };
          }
        }
        setPhotos((i) => [...i, photoInfo]);
      });
    }
  }, [sseClient]);
  const initCtxData = { photos };
  return <PhotoCtx.Provider value={initCtxData}>{children}</PhotoCtx.Provider>;
};

export default memo(PhotoCtxContainer);
