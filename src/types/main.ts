import { ReactNode } from "react";

enum PAGE_PATH {
  HOME = "HOME",
  MOVIE = "MOVIE",
  GIFT = "GIFT",
  PTHOTO = "PHOTO",
}

interface ReactFCPropsType {
  children: ReactNode;
}

export { PAGE_PATH, ReactFCPropsType };
