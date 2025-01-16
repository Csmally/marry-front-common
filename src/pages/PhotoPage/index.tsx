import { PhotoCtx } from "@/utils/ctxs";
import { memo, useContext } from "react";

const PhotoPage: React.FC = () => {
  const { photos } = useContext(PhotoCtx);
  return (
    <div style={{ background: "red" }}>
      {photos.map((i, index) => (
        <div key={index} style={{ height: 100, background: "pink" }}>
          {i}
        </div>
      ))}
    </div>
  );
};

export default memo(PhotoPage);
