import { loginInfo } from "./modules/login";
import { analysisCardList } from "./modules/dashboard";

export default [
    {
        url: "/api/login",
        method: "post",
        response: () => {
            return loginInfo;
        },
    },
    {
        url: "/api/analysisCardList",
        method: "get",
        response: () => {
            return analysisCardList;
        },
    },
]