import { create } from "zustand";
import { persist } from "zustand/middleware";

interface userInfo {
  permission: string;
  setPermission: (permission: string) => void;
}

const usePermissionStore = create<userInfo>()(
  persist(
    (set) => ({
      permission: "user",
      setPermission: (permission: string) => set({ permission }),
    }),
    {
      name: "permissionStore",
    }
  )
);

export default usePermissionStore;
