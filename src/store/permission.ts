import { create } from "zustand";
import { persist } from "zustand/middleware";

interface PermissionType {
  permission: string;
  setPermission: (permission: string) => void;
}

const usePermissionStore = create<PermissionType>()(
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
