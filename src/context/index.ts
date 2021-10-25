import { createContext, useContext } from "react";
import { UserDataTypes } from '../components/Searcher/Searcher.types';

export const GlobalContext = createContext<UserDataTypes | null>(null)

export const useGlobalContext = () => useContext(GlobalContext)

