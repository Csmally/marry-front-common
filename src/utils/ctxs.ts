import { MainCtxTypes, PAGE_PATH } from "@/types/main";
import { createContext } from "react";

const MainCtx = createContext<MainCtxTypes>({
  currentScreenStatus: false,
  setCurrentScreenStatus: () => {},
  currentPage: PAGE_PATH.HOME,
  setCurrentPage: () => {},
});

const MoviePageCtx = createContext({
  bgVoiceRef: null,
});

export { MainCtx, MoviePageCtx };
