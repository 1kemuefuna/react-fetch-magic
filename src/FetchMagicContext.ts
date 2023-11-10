import React from 'react'
import { createContext } from 'react';

export interface FetchMagicContextValue {
    baseURL?: string;
    headers?: { [key: string]: string };
}

export const FetchMagicContext = createContext<FetchMagicContextValue>({});
