import axios from "axios";

const Api = {
  loginInfo: "/api/login",
  menuInfo: "/api/menuList",
  analysisInfo: "/api/analysisCardList",
  userList: "/api/userList",
  messageList: "/api/messageList",
  accountList: "/api/accountList",
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

export const getAccountList = async (page: number = 1, pageSize: number = 10, keyword: string = "") => {
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
