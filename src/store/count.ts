import { create } from "zustand";

interface CountInfo {
    count: number;
    incrementCount: (params: number) => void;
    decrementCount: (params: number) => void;
}

const useCountStore = create<CountInfo>()((set) => ({
    count: 0,
    incrementCount: (params) => set((state) => ({ count: state.count + params })),
    decrementCount: (params) => set((state) => ({ count: state.count - params })),
}));

export default useCountStore;
