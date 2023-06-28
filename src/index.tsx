import React, { createContext, useContext, useState } from 'react';

interface FetchMagicContextValue {
  baseURL?: string;
  headers?: { [key: string]: string };
}

const FetchMagicContext = createContext<FetchMagicContextValue>({});

export function useFetchMagic() {
  const fetchMagicContext = useContext(FetchMagicContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<any | null>(null);

  const makeRequest = async (config: RequestInit & { url: string }) => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(config.url, {
        ...config,
        headers: {
          ...fetchMagicContext.headers,
          ...config.headers,
        },
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const makeRequestQuery = { loading, error, data };
  return [makeRequest, makeRequestQuery] as const;
}

interface FetchMagicProviderProps {
  baseURL?: string;
  headers?: { [key: string]: string };
  children: React.ReactNode;
}

export function FetchMagicProvider({ baseURL, headers, children }: FetchMagicProviderProps) {
  const fetchMagicContextValue: FetchMagicContextValue = { baseURL, headers };

  return (
    <FetchMagicContext.Provider value={fetchMagicContextValue}>{children}</FetchMagicContext.Provider>
  );
}
