import { create } from "zustand";
import { DarkModeType } from "@/types/store";

const useDarkModeStore = create<DarkModeType>()((set) => ({
  isDarkMode: false,
  setDarkMode: (checked) => set({ isDarkMode: checked }),
}));

export default useDarkModeStore;
