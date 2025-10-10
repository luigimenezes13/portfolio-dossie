import axios from 'axios';

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'https://dossie-backend.vercel.app',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      console.error('Erro na API:', error.response.data);
      
      if (error.response.status === 401) {
        localStorage.removeItem('token');
      }
    } else if (error.request) {
      console.error('Erro de rede:', error.request);
    } else {
      console.error('Erro:', error.message);
    }
    
    return Promise.reject(error);
  }
);

export default api;
