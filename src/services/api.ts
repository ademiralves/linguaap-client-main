import axios from 'axios';

/*
  A base url é onde o backend se encontra. Após reconhecer isso, é procurado por pelo token que está
  armazenado no local storage e depois esse token é configurado no cabeçalho da requisição.
*/

const api = axios.create({
  baseURL: 'http://localhost:5000'
})

api.interceptors.request.use(config => {
  const token = localStorage.getItem('@Linguaap:Token') || '';
  config.headers = {
    'Authorization': `Bearer ${token}`,
  }

  return config;
})

export default api;