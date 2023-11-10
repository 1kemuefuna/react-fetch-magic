declare module 'react-fetch-magik' {
  import { ReactNode } from 'react';

  interface FetchMagikContextValue {
    baseURL?: string;
    headers?: { [key: string]: string };
  }

  export function useFetchMagik<T>(): [(config: RequestInit & { url: string }) => Promise<void>, { loading: boolean, error: Error | null, data: T | null }];

  interface FetchMagikProviderProps {
    baseURL?: string;
    headers?: { [key: string]: string };
    children: ReactNode;
  }

  export const FetchMagikContext: React.Context<FetchMagikContextValue>;
  export const FetchMagikProvider: React.FC<FetchMagikProviderProps>;
}
