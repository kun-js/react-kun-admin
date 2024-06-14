import { create } from "zustand";

interface watermarkInfo {
  watermarkVisible: boolean;
  setWatermarkVisible: (visible: boolean) => void;
}

const useWatermarkStore = create<watermarkInfo>()((set) => ({
  watermarkVisible: false,
  setWatermarkVisible: (visible: boolean) => set({ watermarkVisible: visible }),
}));

export default useWatermarkStore;
