import { create } from "zustand";
import { WatermarkType } from "@/types/store";

const useWatermarkStore = create<WatermarkType>()((set) => ({
  watermarkVisible: false,
  setWatermarkVisible: (visible: boolean) => set({ watermarkVisible: visible }),
}));

export default useWatermarkStore;
