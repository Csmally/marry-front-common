enum PAGE_PATH {
  HOME = "HOME",
  GIFT = "GIFT",
  PTHOTO = "PHOTO",
}

interface MainCtxTypes {
  currentScreenStatus: boolean;
  setCurrentScreenStatus: (status: boolean) => void;
  currentPage: PAGE_PATH;
  setCurrentPage: (path: PAGE_PATH) => void;
}

export { PAGE_PATH, MainCtxTypes };
