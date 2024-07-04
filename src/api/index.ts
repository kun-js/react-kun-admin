import axios from "axios";

const Api = {
  loginInfo: "/api/login",
  menuInfo: "/api/menuList",
  analysisInfo: "/api/analysisCardList",
  userList: "/api/userList",
  messageList: "/api/messageList",
};

export const getLoginInfo = async (username: string, password: string) => {
  const { data } = await axios.post(Api.loginInfo);
  if (username === data.loginInfo.username && password === data.loginInfo.password) return data.loginInfo;
};

export const getMenuList = async () => {
  const { data } = await axios.get(Api.menuInfo);
  return data;
};

export const getAnalysisCardList = async () => {
  const { data } = await axios.get(Api.analysisInfo);
  return data;
};

export const getUserList = async () => {
  const { data } = await axios.get(Api.userList);
  return data;
};

export const getMessageList = async () => {
  const { data } = await axios.get(Api.messageList);
  return data;
};
