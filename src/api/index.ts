import axios from "axios";

const Api = {
    loginInfo: "/api/login",
    analysisInfo: "/api/analysisCardList",
};

export const getLoginInfo = async (username: string, password: string) => {
    const { data } = await axios.post(Api.loginInfo);
    if (username === data.loginInfo.username && password === data.loginInfo.password) return data.loginInfo;
};

export const getAnalysisCardList = async () => {
    const { data } = await axios.get(Api.analysisInfo);
    return data;
};