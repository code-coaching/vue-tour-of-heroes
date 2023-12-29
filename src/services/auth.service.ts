import { ref } from 'vue';
import { useApi } from './api.service';

const { api } = useApi();

const isAuthenticated = ref(localStorage.getItem('token') !== null);

const useAuth = () => {
  const login = (email: string, password: string) => {
    return api
      .post<{ token: string }>('/token/login', {
        email,
        password
      })
      .then((res) => {
        const token = res.data.token;
        localStorage.setItem('token', token);
        isAuthenticated.value = true;
        return res;
      });
  };

  const logout = () => {
    localStorage.removeItem('token');
    isAuthenticated.value = false;
  };

  return { login, logout, isAuthenticated };
};

export { useAuth };
