import axios from 'axios';
import { QittaItem } from '@server/apiClient/qittaClient';

export const getQittaItems = async () => {
  const axiosClient = axios.create({
    baseURL: 'http://localhost:3000/',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const res = await axiosClient.get('/api/qitta/items');
  return res.data.items as QittaItem[];
};
