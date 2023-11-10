import React from "react";
import { FetchMagikContext, FetchMagikContextValue } from "./FetchMagikContext";

interface FetchMagikProviderProps {
  baseURL?: string;
  headers?: { [key: string]: string };
  children: React.ReactNode;
}

export function FetchMagikProvider({
  baseURL,
  headers,
  children,
}: FetchMagikProviderProps) {
  const fetchMagikContextValue: FetchMagikContextValue = { baseURL, headers };

  return (
    <FetchMagikContext.Provider value={fetchMagikContextValue}>
      {children}
    </FetchMagikContext.Provider>
  );
}
