import { Router } from 'express';
import qittaRoutes from './qitta';

const routes = Router();

routes.use('/qitta', qittaRoutes);

export default routes;
