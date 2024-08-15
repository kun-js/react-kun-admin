import axios from "axios";
import {
  LoginInfoResponseType,
  MenuListResponseType,
  AnalysisCardListResponseType,
  UserListResponseType,
  MessageListResponseType,
  AccountListResponseType,
  RoleListResponseType,
} from "@/api/types";

const Api: { [key: string]: string } = {
  loginInfo: "/api/login",
  menuInfo: "/api/menuList",
  analysisInfo: "/api/analysisCardList",
  userList: "/api/userList",
  messageList: "/api/messageList",
  accountList: "/api/accountList",
  roleList: "/api/roleList",
};

export const getLoginInfo = async (username: string, password: string): Promise<LoginInfoResponseType> => {
  const { data } = await axios.post(Api.loginInfo);
  if (username === data.loginInfo.username && password === data.loginInfo.password) {
    return data;
  }
  throw new Error("请求错误");
};

export const getMenuList = async (): Promise<MenuListResponseType> => {
  const { data } = await axios.get(Api.menuInfo);
  return data;
};

export const getAnalysisCardList = async (): Promise<AnalysisCardListResponseType> => {
  const { data } = await axios.get(Api.analysisInfo);
  return data;
};

export const getUserList = async (): Promise<UserListResponseType> => {
  const { data } = await axios.get(Api.userList);
  return data;
};

export const getMessageList = async (): Promise<MessageListResponseType> => {
  const { data } = await axios.get(Api.messageList);
  return data;
};

export const getAccountList = async (
  page: number = 1,
  pageSize: number = 10,
  keyword: string = ""
): Promise<AccountListResponseType> => {
  const { data } = await axios.get(Api.accountList, {
    params: {
      page,
      pageSize,
      keyword,
    },
  });

  let filteredData = data.accountList;
  if (typeof keyword === "string" && keyword.trim() !== "") {
    filteredData = filteredData.filter((account: { name: string | string[] }) => account.name.includes(keyword.trim()));
  }

  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const slicedData = filteredData.slice(start, end);
  const total = filteredData.length;
  return {
    accountList: slicedData,
    total: total,
  };
};

export const getRoleList = async (): Promise<RoleListResponseType> => {
  const { data } = await axios.get(Api.roleList);
  return data;
};
