import { create } from 'zustand';
import { createPersonSlice, PersonSlice } from './person.slice';
import { devtools } from 'zustand/middleware';
import { createGuestSlice, GuestSlice } from './guest.slice';

type SharedState = PersonSlice & GuestSlice;

export const useWeddingBoundedStore = create<SharedState>()(
  devtools((...a) => ({
    ...createPersonSlice(...a),
    ...createGuestSlice(...a),
  })),
);
