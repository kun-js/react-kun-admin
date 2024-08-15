import { create } from "zustand";

interface DarkModeType {
  isDarkMode: boolean;
  setDarkMode: (checked: boolean) => void;
}

const useDarkModeStore = create<DarkModeType>()((set) => ({
  isDarkMode: false,
  setDarkMode: (checked) => set({ isDarkMode: checked }),
}));

export default useDarkModeStore;
