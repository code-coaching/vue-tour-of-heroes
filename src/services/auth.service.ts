import axios from 'axios';

const useAuth = () => {
  const login = (email: string, password: string) => {
    return axios
      .post<{ token: string }>('https://code-coaching.dev/api/token/login', {
        email,
        password
      })
      .then((res) => {
        const token = res.data.token;
        localStorage.setItem('token', token);
        return res;
      });
  };

  return { login };
};

export { useAuth };
