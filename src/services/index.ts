import { ChatType } from "@/types/interfaces";
import request from "@/utils/request";

interface RandomChatResDataType {
  list: ChatType[];
}

interface RandomGiftUserResDataType {
  avatar: string;
}

const fetchRandomChat = (): Promise<ResDataType<RandomChatResDataType>> => {
  return request.get("/common/randomChats");
};

const fetchRandomGiftUser = (type: number): Promise<ResDataType<RandomGiftUserResDataType>> => {
  return request.get("/common/randomGiftUser", { params: { type }});
};

export { fetchRandomChat, fetchRandomGiftUser };
