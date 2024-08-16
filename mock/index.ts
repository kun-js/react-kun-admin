import { loginInfo } from "./modules/login";
import { menuList } from "./modules/menu";
import { analysisCardList } from "./modules/dashboard";
import { userList } from "./modules/list";
import { messageList } from "./modules/message";
import { accountList } from "./modules/account";
import { roleList } from "./modules/role";

// 定义API响应类型
interface ApiResponseType {
  url: string;
  method: "get" | "post";
  response: () => unknown;
}

// 定义API路由数组类型
type ApiRouteListType = ApiResponseType[];

export default [
  {
    url: "/api/login",
    method: "post",
    response: () => {
      return loginInfo;
    },
  },
  {
    url: "/api/menuList",
    method: "get",
    response: () => {
      return menuList;
    },
  },
  {
    url: "/api/analysisCardList",
    method: "get",
    response: () => {
      return analysisCardList;
    },
  },
  {
    url: "/api/userList",
    method: "get",
    response: () => {
      return userList;
    },
  },
  {
    url: "/api/messageList",
    method: "get",
    response: () => {
      return messageList;
    },
  },
  {
    url: "/api/accountList",
    method: "get",
    response: () => {
      return accountList;
    },
  },
  {
    url: "/api/roleList",
    method: "get",
    response: () => {
      return roleList;
    },
  },
] as ApiRouteListType;
