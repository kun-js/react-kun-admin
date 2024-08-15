import { create } from "zustand";

interface WatermarkType {
  watermarkVisible: boolean;
  setWatermarkVisible: (visible: boolean) => void;
}

const useWatermarkStore = create<WatermarkType>()((set) => ({
  watermarkVisible: false,
  setWatermarkVisible: (visible: boolean) => set({ watermarkVisible: visible }),
}));

export default useWatermarkStore;
