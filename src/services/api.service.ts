import axios from 'axios';

const api = axios.create({
  baseURL: 'https://code-coaching.dev/api'
});

const useApi = () => {
  return { api };
};

export { useApi };
