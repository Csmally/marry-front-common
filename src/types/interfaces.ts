import { PAGE_PATH } from "./main";

interface ChatType {
  openid: string;
  avatar: string;
  bgColor: string;
  content: string;
}

interface MainCtxTypes {
  currentScreenStatus: boolean;
  setCurrentScreenStatus: (status: boolean) => void;
}

interface PageCtxTypes {
  currentPage: PAGE_PATH;
  setCurrentPage: (path: PAGE_PATH) => void;
}

interface SseCtxTypes {
  sseClient: any;
}

interface ChatCtxTypes {
  chats: ChatType[];
}

interface PhotoCtxTypes {
  photos: any[];
}

export {
  ChatType,
  MainCtxTypes,
  PageCtxTypes,
  SseCtxTypes,
  ChatCtxTypes,
  PhotoCtxTypes,
};
