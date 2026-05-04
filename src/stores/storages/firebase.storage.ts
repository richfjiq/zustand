import { createJSONStorage, StateStorage } from 'zustand/middleware';

const FIREBASE_URL =
  'https://zustand-storage-259cf-default-rtdb.firebaseio.com/zustand';

const firebaseApi: StateStorage = {
  getItem: async function (name: string): Promise<string | null> {
    try {
      const data = await fetch(`${FIREBASE_URL}/${name}.json`).then((res) =>
        res.json(),
      );
      console.log('data getItem ++++', data);
      return JSON.stringify(data);
    } catch (error) {
      console.log('+++++ firebaseApi get item error +++++', error);
      return null;
    }
  },
  setItem: async function (name: string, value: string): Promise<void> {
    try {
      const data = await fetch(`${FIREBASE_URL}/${name}.json`, {
        method: 'PUT',
        body: value,
      }).then((res) => res.json());
      console.log('data ++++ setItem', data);
      return;
    } catch (error) {
      console.log('+++++ firebaseApi get item error +++++', error);
    }
  },
  removeItem: function (name: string): void | Promise<void> {
    console.log('getItem', name);
  },
};

export const firebaseStorage = createJSONStorage(() => firebaseApi);
