import { create } from "zustand";
import { persist } from "zustand/middleware";

interface userInfoType {
  token: string | null;
  userInfo: { avatar: string; name: string } | null;
  setToken: (token: string) => void;
  setUserInfo: (userInfo: { avatar: string; name: string }) => void;
}

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
