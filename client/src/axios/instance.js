import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_PRODUCT_API,
  timeout: 10000,
  headers: {
    'Content-Type': 'Application/json',
  },
});

export default axiosInstance;
