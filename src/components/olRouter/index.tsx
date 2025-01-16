import GiftPage from "@/pages/GiftPage";
import HomePage from "@/pages/HomePage";
import MoviePage from "@/pages/MoviePage";
import PhotoPage from "@/pages/PhotoPage";
import { PAGE_PATH } from "@/types/main";
import { PageCtx } from "@/utils/ctxs";
import { memo, useContext } from "react";

const OlRouter: React.FC = () => {
  const { currentPage } = useContext(PageCtx);
  switch (currentPage) {
    case PAGE_PATH.HOME:
      return <HomePage />;
    case PAGE_PATH.MOVIE:
      return <MoviePage />;
    case PAGE_PATH.PTHOTO:
      return <PhotoPage />;
    case PAGE_PATH.GIFT:
      return <GiftPage />;
    default:
      return <HomePage />;
  }
};

export default memo(OlRouter);
