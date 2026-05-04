import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface IBear {
  id: number;
  name: string;
}

interface IBearState {
  blackBears: number;
  polarBears: number;
  pandaBears: number;
  bears: IBear[];
  increaseBlackBears: (by: number) => void;
  increasePolarBears: (by: number) => void;
  increasePandaBears: (by: number) => void;
  doNothing: () => void;
  addBear: () => void;
  clearBears: () => void;
  totalBears: () => number;
}

export const useBearStore = create<IBearState>()(
  persist(
    (set, get) => ({
      blackBears: 0,
      polarBears: 0,
      pandaBears: 0,
      bears: [{ id: 1, name: 'Oso #1' }],
      totalBears: () => {
        return get().blackBears + get().polarBears + get().pandaBears;
      },
      increaseBlackBears: (by) =>
        set((state) => ({ blackBears: state.blackBears + by })),
      increasePolarBears: (by) =>
        set((state) => ({ polarBears: state.polarBears + by })),
      increasePandaBears: (by) =>
        set((state) => ({ pandaBears: state.pandaBears + by })),
      doNothing: () => set((state) => ({ bears: [...state.bears] })),
      addBear: () =>
        set((state) => ({
          bears: [
            ...state.bears,
            {
              id: state.bears.length + 1,
              name: `Oso #${state.bears.length + 1}`,
            },
          ],
        })),
      clearBears: () => set(() => ({ bears: [] })),
    }),
    { name: 'bears-store' },
  ),
);
