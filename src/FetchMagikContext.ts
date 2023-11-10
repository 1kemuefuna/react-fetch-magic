import React from 'react'
import { createContext } from 'react';

export interface FetchMagikContextValue {
    baseURL?: string;
    headers?: { [key: string]: string };
}

export const FetchMagikContext = createContext<FetchMagikContextValue>({});
