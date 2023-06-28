declare module 'react-fetch-magic' {
  import { ReactNode } from 'react';

  interface FetchMagicContextValue {
    baseURL?: string;
    headers?: { [key: string]: string };
  }

  export function useFetchMagic<T>(): [(config: RequestInit & { url: string }) => Promise<void>, { loading: boolean, error: Error | null, data: T | null }];

  interface FetchMagicProviderProps {
    baseURL?: string;
    headers?: { [key: string]: string };
    children: ReactNode;
  }

  export const FetchMagicContext: React.Context<FetchMagicContextValue>;
  export const FetchMagicProvider: React.FC<FetchMagicProviderProps>;
}
