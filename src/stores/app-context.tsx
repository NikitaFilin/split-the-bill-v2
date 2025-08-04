import React from "react";

import { rootStore, RootStore } from "./root-store";

export const StoreContext = React.createContext<RootStore | null>(null);

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <StoreContext.Provider value={rootStore}>{children}</StoreContext.Provider>
);
