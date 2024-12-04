import { createContext, Provider, useContext } from "react";

const NullSymbol = Symbol("ProviderNotFound");
type NullSymbolType = typeof NullSymbol;

export type CreateSafeContextReturn<T> = [Provider<T>, () => T];

export const createSafeContext = <T>(
  displayName: string
): CreateSafeContextReturn<T> => {
  const Context = createContext<T | NullSymbolType>(NullSymbol);
  Context.displayName = displayName;

  const useSafeContext = () => {
    const context = useContext(Context);

    if (context === NullSymbol) {
      throw new Error(`[${Context.displayName}]: Provider Not Found.`);
    }

    return context;
  };

  return [Context.Provider as Provider<T>, useSafeContext];
};
