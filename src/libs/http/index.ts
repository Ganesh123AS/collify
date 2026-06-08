// libs/http/index.ts
import axios from 'axios';
import type { AxiosRequestConfig } from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor — attach token
instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response interceptor — unwrap or normalize errors
instance.interceptors.response.use(
  (response) => response.data,   // ← unwraps so you get data directly
  (error) => {
    const normalized = {
      message: error?.response?.data?.message ?? 'Something went wrong',
      status: error?.response?.status ?? 500,
      data: error?.response?.data ?? null,
    };
    return Promise.reject(normalized);
  }
);


export const httpClient = {
  get: <T>(url: string, config?: AxiosRequestConfig): Promise<T> =>
    instance.get(url, config),

  post: <T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T> =>
    instance.post(url, data, config),

  put: <T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T> =>
    instance.put(url, data, config),

  patch: <T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T> =>
    instance.patch(url, data, config),

  delete: <T>(url: string, config?: AxiosRequestConfig): Promise<T> =>
    instance.delete(url, config),
};
