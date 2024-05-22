"use client";

import {
  useState,
  useContext,
  createContext,
  useEffect,
  ReactNode,
} from "react";
import { jsonplaceholderUsersTypes } from "@/types/jsonplaceholderTypes";
import { jsonplaceholderUsers } from "../api/jsonplaceholderAPI";

interface ContextProps {
  state: jsonplaceholderUsersTypes[] | undefined;
  onGetUsersData: () => void;
}

const Context = createContext<ContextProps>({} as ContextProps);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [state, setState] = useState<jsonplaceholderUsersTypes[]>();

  const onGetUsersData = async () => {
    try {
      const res = await jsonplaceholderUsers();
      setState(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    onGetUsersData();
  }, []);

  return (
    <Context.Provider value={{ state, onGetUsersData }}>
      {children}
    </Context.Provider>
  );
};

export const useAppState = () => {
  const context = useContext(Context);
  if (context === undefined) {
    throw new Error("useAppState must be used within an AppProvider");
  }
  return context;
};
