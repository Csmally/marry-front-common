import { PAGE_PATH, PageCtxTypes } from "@/types/main";
import { PageCtx } from "@/utils/ctxs";
import { memo, ReactNode, useState } from "react";

interface ReactFCPropsType {
  children: ReactNode;
}

const PageCtxContainer: React.FC<ReactFCPropsType> = (props) => {
  const { children } = props;
  const [currentPage, setCurrentPage] = useState<PAGE_PATH>(PAGE_PATH.HOME);
  const initPageCtxData: PageCtxTypes = {
    currentPage,
    setCurrentPage,
  };
  return (
    <PageCtx.Provider value={initPageCtxData}>{children}</PageCtx.Provider>
  );
};

export default memo(PageCtxContainer);
