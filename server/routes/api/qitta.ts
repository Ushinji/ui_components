import { Router, Response, Request } from 'express';
import QittaClient from '../../apiClient/qittaClient';

const router = Router();

router.use('/items', async (req: Request, res: Response) => {
  const page = req.query.page;
  const client = new QittaClient();
  const items = await client.getItems(page);
  res.json(items);
});

router.use('/tags', async (_, res: Response) => {
  const client = new QittaClient();
  const tags = await client.getTags();
  res.json(tags);
});

export default router;
