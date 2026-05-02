import { create } from 'zustand';

interface IBearState {
  blackBears: number;
  polarBears: number;
  pandaBears: number;
  increaseBlackBears: (by: number) => void;
  increasePolarBears: (by: number) => void;
  increasePandaBears: (by: number) => void;
}

export const useBearStore = create<IBearState>((set) => ({
  blackBears: 0,
  polarBears: 0,
  pandaBears: 0,
  increaseBlackBears: (by) =>
    set((state) => ({ blackBears: state.blackBears + by })),
  increasePolarBears: (by) =>
    set((state) => ({ polarBears: state.polarBears + by })),
  increasePandaBears: (by) =>
    set((state) => ({ pandaBears: state.pandaBears + by })),
}));
