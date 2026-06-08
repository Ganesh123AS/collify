// libs/http/index.ts
import axios from 'axios';

export const httpClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor — attach token
httpClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response interceptor — unwrap or normalize errors
httpClient.interceptors.response.use(
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