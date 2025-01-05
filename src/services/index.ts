import { ChatType } from "@/types/interfaces";
import request from "@/utils/request";

interface RandomChatResDataType {
  list: ChatType[];
}

const fetchRandomChat = (): Promise<ResDataType<RandomChatResDataType>> => {
  return request.get("/common/randomChats");
};

export { fetchRandomChat };
