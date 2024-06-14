import axios from 'axios';

const api = axios.create({
  baseURL: 'https://economia.awesomeapi.com.br/json/last'
});

export const getExchangeRate = async (currency) => {
  const response = await api.get(`/${currency}-BRL`);
  return response.data[`${currency}BRL`].ask;
};

export default api;

