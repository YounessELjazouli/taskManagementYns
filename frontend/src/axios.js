// axios.js
import axios from 'axios';
import getCookie from './helpers/getToken';

const axiosYns = axios.create({
  baseURL: 'http://127.0.0.1:8000/api',
});

axiosYns.interceptors.request.use(function (config) {
  const token = getCookie(JSON.stringify('user').token) ? getCookie(JSON.stringify('user').token) : "";  ;
  
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosYns;
