import axios from 'axios';

const baseURL = 'https://14.design.htmlacademy.pro/six-cities';
const timeout = 5000;

export const createAPI = () =>
  axios.create({
    baseURL,
    timeout,
  });

