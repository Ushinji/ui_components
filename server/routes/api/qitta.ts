import { Router, Response, ExRequest } from 'express';
import QittaClient from '../../apiClient/qittaClient';

const router = Router();

router.use(
  '/items',
  async (req: ExRequest<{ query: { page: string } }>, res: Response) => {
    const page = parseInt(req.query.page, 10);
    const client = new QittaClient();
    const items = await client.getItems(page);
    res.json(items);
  }
);

router.use('/tags', async (_, res: Response) => {
  const client = new QittaClient();
  const tags = await client.getTags();
  res.json(tags);
});

export default router;
