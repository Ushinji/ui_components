import backendClient from '@frontend/utils/backendClient';

export const getQittaItems = async () => {
  const res = await backendClient.get('/api/qitta/items');
  return res;
};
