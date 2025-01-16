import { MainCtxTypes, PAGE_PATH, PageCtxTypes } from "@/types/main";
import { createContext } from "react";

const MainCtx = createContext<MainCtxTypes>({
  currentScreenStatus: false,
  setCurrentScreenStatus: () => {},
});

const PageCtx = createContext<PageCtxTypes>({
  currentPage: PAGE_PATH.HOME,
  setCurrentPage: () => {},
});

const MoviePageCtx = createContext({
  bgVoiceRef: null,
});

export { MainCtx, PageCtx, MoviePageCtx };
