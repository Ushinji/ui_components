import backendClient from '@frontend/utils/backendClient';

export const getQittaItems = async (page = 1) => {
  const res = await backendClient.get(`/api/qitta/items?page=${page}`);
  return res;
};

export const getQittaTags = async () => {
  const res = await backendClient.get('/api/qitta/tags');
  return res;
};
