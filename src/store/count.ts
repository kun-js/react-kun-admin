import { create } from "zustand";

interface CountInfo {
    count: number;
    incrementCount: (params: number) => void;
    decrementCount: (params: number) => void;
}

const useCountStore = create<CountInfo>((set) => ({
    count: 0,
    incrementCount: () => set((state) => ({ count: state.count + 1 })),
    decrementCount: () => set((state) => ({ count: state.count - 1 })),
}));

export default useCountStore;
