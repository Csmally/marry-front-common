import { ChatType } from "./interfaces";

enum PAGE_PATH {
  HOME = "HOME",
  MOVIE = "MOVIE",
  GIFT = "GIFT",
  PTHOTO = "PHOTO",
}

interface MainCtxTypes {
  currentScreenStatus: boolean;
  setCurrentScreenStatus: (status: boolean) => void;
}

interface PageCtxTypes {
  currentPage: PAGE_PATH;
  setCurrentPage: (path: PAGE_PATH) => void;
}

interface ChatCtxTypes {
  chats: ChatType[];
}

export { PAGE_PATH, PageCtxTypes, MainCtxTypes, ChatCtxTypes };
