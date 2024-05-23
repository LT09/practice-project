import { create } from "zustand";
import { jsonplaceholderUsersTypes } from "@/types/jsonplaceholderTypes";
import { jsonplaceholderUsers } from "../api/jsonplaceholderAPI";

interface StoreState {
  usersData: jsonplaceholderUsersTypes[] | undefined;
  onGetUsersData: () => Promise<void>;
}

const useStore = create<StoreState>((set) => ({
  usersData: undefined,
  onGetUsersData: async () => {
    try {
      const res = await jsonplaceholderUsers();
      set({ usersData: res });
    } catch (err) {
      console.log(err);
    }
  },
}));

export default useStore;
