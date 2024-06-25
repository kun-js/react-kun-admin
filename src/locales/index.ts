import i18n from "i18next";
import { initReactI18next } from "react-i18next";
//中文语言包
import zh from "./lang/zh.json";
//英文语言包
import en from "./lang/en.json";

const lng = JSON.parse(localStorage.getItem("languageStore")!).state.lang || "zh";

const resources = {
    en: {
        translation: en,
    },
    zh: {
        translation: zh,
    },
};

i18n.use(initReactI18next).init({
    resources,
    lng,
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
