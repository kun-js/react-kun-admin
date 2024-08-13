import { create } from "zustand";

interface DarkModeInfo {
  isDarkMode: boolean;
  setDarkMode: (checked: boolean) => void;
}

const useDarkModeStore = create<DarkModeInfo>()((set) => ({
  isDarkMode: false,
  setDarkMode: (checked) => set({ isDarkMode: checked }),
}));

export default useDarkModeStore;
