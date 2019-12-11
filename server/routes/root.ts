import { Router, Response } from 'express';

const router = Router();

router.use('/', async (_, res: Response) => {
  res.render('./index.ejs');
});

export default router;
