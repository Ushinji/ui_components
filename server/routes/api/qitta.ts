import { Router, Response } from 'express';
import QittaClient from '../../apiClient/qittaClient';

const router = Router();

router.use('/items', async (_, res: Response) => {
  const client = new QittaClient();
  const items = await client.getItems();
  res.json(items);
});

export default router;
