import GiftPage from "@/pages/GiftPage";
import HomePage from "@/pages/HomePage";
import PhotoPage from "@/pages/PhotoPage";
import { PAGE_PATH } from "@/types/main";
import { MainCtx } from "@/utils/ctxs";
import { memo, useContext } from "react";

const OlRouter: React.FC = () => {
  const { currentPage } = useContext(MainCtx);
  switch (currentPage) {
    case PAGE_PATH.HOME:
      return <HomePage />;
    case PAGE_PATH.PTHOTO:
      return <PhotoPage />;
    case PAGE_PATH.GIFT:
      return <GiftPage />;
    default:
      return <HomePage />;
  }
};

export default memo(OlRouter);
