import apisauce from 'apisauce';

export const api = apisauce.create({
  baseURL: `${process.env.API_URL || 'http://23.96.112.150:8080'}/api`,
  withCredentials: false
});


export const products = () => api.get('/product');