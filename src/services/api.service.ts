import { authInterceptor } from '@/interceptors/auth.interceptor';
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://code-coaching.dev/api'
});

api.interceptors.request.use(authInterceptor);

const useApi = () => {
  return { api };
};

export { useApi };
