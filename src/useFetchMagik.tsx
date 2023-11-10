import React, { useState, useContext } from "react";
import { FetchMagikContext } from "./FetchMagikContext";

export function useFetchMagik() {
  const fetchMagikContext = useContext(FetchMagikContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<any | null>(null);

  const makeRequest = async (config: RequestInit & { url: string }) => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(
        `${fetchMagikContext.baseURL}${config.url}`,
        {
          ...config,
          headers: {
            ...fetchMagikContext.headers,
            ...config.headers,
          },
        }
      );

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
