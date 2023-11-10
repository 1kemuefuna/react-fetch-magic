import React from "react";
import { FetchMagicContext, FetchMagicContextValue } from "./FetchMagicContext";

interface FetchMagicProviderProps {
  baseURL?: string;
  headers?: { [key: string]: string };
  children: React.ReactNode;
}

export function FetchMagicProvider({
  baseURL,
  headers,
  children,
}: FetchMagicProviderProps) {
  const fetchMagicContextValue: FetchMagicContextValue = { baseURL, headers };

  return (
    <FetchMagicContext.Provider value={fetchMagicContextValue}>
      {children}
    </FetchMagicContext.Provider>
  );
}
