import type { PropsWithChildren } from "react";
import type { AxiosRequestConfig, AxiosResponse } from 'axios';

export declare interface BuildAuditPayloadInput {
    config: AxiosRequestConfig;
    response?: AxiosResponse;
    error?: {
        status?: number;
        message?: string;
    };
    duration?: number;
}

export interface QueryProviderProps extends PropsWithChildren { }

export interface DefaultQueryKey {
    endpoint: string;
    pathParams?: Record<string, string | number>;
    queryParams?: Record<string, any>;
    config?: BuildAuditPayloadInput;
}
