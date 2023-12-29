import type { InternalAxiosRequestConfig } from 'axios';

export const authInterceptor = (req: InternalAxiosRequestConfig) => {
  const authToken = localStorage.getItem('token');
  if (authToken) {
    req.headers.Authorization = `Bearer ${authToken}`;
  }
  return req;
};
