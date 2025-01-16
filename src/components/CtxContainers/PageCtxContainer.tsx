import { PAGE_PATH, ReactFCPropsType } from "@/types/main";
import { PageCtx } from "@/utils/ctxs";
import { memo, useState } from "react";

const PageCtxContainer: React.FC<ReactFCPropsType> = (props) => {
  const { children } = props;
  const [currentPage, setCurrentPage] = useState<PAGE_PATH>(PAGE_PATH.HOME);
  const initCtxData = {
    currentPage,
    setCurrentPage,
  };
  return <PageCtx.Provider value={initCtxData}>{children}</PageCtx.Provider>;
};

export default memo(PageCtxContainer);
