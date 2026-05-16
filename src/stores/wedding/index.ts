import { create } from 'zustand';
import { createPersonSlice, PersonSlice } from './person.slice';

type SharedState = PersonSlice;

export const useWeddingBoundedStore = create<SharedState>()((...a) => ({
  ...createPersonSlice(...a),
}));
