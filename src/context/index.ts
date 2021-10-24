import { createContext, useContext } from "react";
import { GlobalContextTypes } from "./GlobalContext.types";

export const GlobalContext = createContext<GlobalContextTypes | null>(
	{	randomDataFromContext: 'random'}
)

export const useGlobalContext = () => useContext(GlobalContext)

