import i18n from "i18next";
import { initReactI18next } from "react-i18next";
//中文语言包
import zh from "./lang/zh.json";
//英文语言包
import en from "./lang/en.json";

interface LangResource {
  [key: string]: {
    [key: string]: string;
  };
}

// 定义资源对象类型
type Resources = {
  [lang: string]: {
    translation: LangResource;
  };
};

const lng = (
  localStorage.getItem("languageStore") ? JSON.parse(localStorage.getItem("languageStore")!).state.lang : "zh"
) as "zh" | "en";

const resources: Resources = {
  en: {
    translation: en as LangResource,
  },
  zh: {
    translation: zh as LangResource,
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
