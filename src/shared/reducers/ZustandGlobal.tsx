import { create } from "zustand";
import { jsonplaceholderUsersTypes } from "@/types/jsonplaceholderTypes";
import { jsonplaceholderUsers } from "../api/jsonplaceholderAPI";

interface StoreState {
  bears: number;
  users: jsonplaceholderUsersTypes[] | undefined;
  increasePopulation: () => void;
  removeAllBears: () => void;
  updateBears: (newBears: number) => void;
  fetchUsersData: () => Promise<void>;
}

const useStore = create<StoreState>((set) => ({
  bears: 0,
  users: undefined,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  updateBears: (newBears: number) => set({ bears: newBears }),
  fetchUsersData: async () => {
    try {
      const res = await jsonplaceholderUsers();
      set({ users: res });
    } catch (err) {
      console.log(err);
    }
  },
}));

export default useStore;
