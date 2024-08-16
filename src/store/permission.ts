import { create } from "zustand";
import { persist } from "zustand/middleware";
import { PermissionType } from "@/types/store";

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
