import { create } from "zustand";
import { persist } from "zustand/middleware";
import i18n from "@/locales/index";

interface LanguageType {
    lang: string;
    changeLanguage: (lang: string) => void;
}

const useLanguageStore = create<LanguageType>()(
    persist(
        (set) => ({
            lang: i18n.language,
            changeLanguage: (lang: string) => {
                i18n.changeLanguage(lang);
                set({ lang });
            },
        }),
        {
            name: "languageStore",
        }
    )
);

export default useLanguageStore;
