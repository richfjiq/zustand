import { create, StateCreator } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { firebaseStorage } from '../storages/firebase.storage';

interface IPersonState {
  firstName: string;
  lastName: string;
}

interface Actions {
  setFirstName: (value: string) => void;
  setLastName: (value: string) => void;
}

const storeApi: StateCreator<
  IPersonState & Actions,
  [['zustand/devtools', never]]
> = (set) => ({
  firstName: '',
  lastName: '',
  setFirstName: (value: string) =>
    set({ firstName: value }, false, 'setFirstName'),
  setLastName: (value: string) =>
    set({ lastName: value }, false, 'setLastName'),
});

export const usePersonStore = create<IPersonState & Actions>()(
  devtools(
    persist(storeApi, {
      name: 'person-storage',
      storage: firebaseStorage,
    }),
  ),
);
