import { create } from "zustand";
import { persist } from "zustand/middleware";

interface MenuStateType {
  defaultSelectedKey: string[];
  defaultOpenKey: string[];
  setDefaultSelectedKey: (path: string[]) => void;
  setDefaultOpenKey: (path: string[]) => void;
}

const useMenuStore = create<MenuStateType>()(
  persist(
    (set) => ({
      defaultSelectedKey: [],
      defaultOpenKey: [],
      setDefaultSelectedKey: (path) => set({ defaultSelectedKey: path }),
      setDefaultOpenKey: (path) => set({ defaultOpenKey: path }),
    }),
    {
      name: "menuStore",
    }
  )
);

export default useMenuStore;
