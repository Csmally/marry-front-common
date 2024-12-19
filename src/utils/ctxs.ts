import { MainCtxTypes, PAGE_PATH } from "@/types/main";
import { createContext } from "react";

const MainCtx = createContext<MainCtxTypes>({
  currentPage: PAGE_PATH.HOME,
  setCurrentPage: () => {},
});

export { MainCtx };
