import axios from 'axios';

export const getQittaItems = async () => {
  const axiosClient = axios.create({
    baseURL: 'http://localhost:3000/',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const res = await axiosClient.get('/api/qitta/items');
  return res;
};
