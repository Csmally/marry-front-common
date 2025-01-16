import {
  ChatCtxTypes,
  MainCtxTypes,
  PageCtxTypes,
  PhotoCtxTypes,
  SseCtxTypes,
} from "@/types/interfaces";
import { PAGE_PATH } from "@/types/main";
import { createContext } from "react";

const MainCtx = createContext<MainCtxTypes>({
  currentScreenStatus: false,
  setCurrentScreenStatus: () => {},
});

const PageCtx = createContext<PageCtxTypes>({
  currentPage: PAGE_PATH.HOME,
  setCurrentPage: () => {},
});

const SseCtx = createContext<SseCtxTypes>({ sseClient: null });

const ChatsCtx = createContext<ChatCtxTypes>({ chats: [] });

const PhotoCtx = createContext<PhotoCtxTypes>({ photos: [] });

const MoviePageCtx = createContext({ bgVoiceRef: null });

export { MainCtx, PageCtx, SseCtx, ChatsCtx, PhotoCtx, MoviePageCtx };
