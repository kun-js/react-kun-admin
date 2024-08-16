import { create } from "zustand";
import { persist } from "zustand/middleware";
import { userInfoType } from "@/types/store";

const useUserStore = create<userInfoType>()(
  persist(
    (set) => ({
      token: null,
      userInfo: null,
      setToken: (token: string) => set({ token }),
      setUserInfo: (userInfo: { avatar: string; name: string }) => set({ userInfo }),
    }),
    {
      name: "userStore",
    }
  )
);

export default useUserStore;
