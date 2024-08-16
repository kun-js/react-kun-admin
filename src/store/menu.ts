import { create } from "zustand";
import { persist } from "zustand/middleware";
import { MenuStateType } from "@/types/store";

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
