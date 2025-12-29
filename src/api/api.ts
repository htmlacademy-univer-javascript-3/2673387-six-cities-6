import axios from 'axios';
import {getToken} from './token.ts';

const baseURL = 'https://14.design.htmlacademy.pro/six-cities';
const timeout = 5000;

export const createAPI = () => {
  const api = axios.create({
    baseURL,
    timeout,
  });

  api.interceptors.request.use(
    (config) => {
      const token = getToken();

      if (token && config.headers) {
        config.headers['X-Token'] = token;
      }

      return config;
    },
  );

  return api;
};

