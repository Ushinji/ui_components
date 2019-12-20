import { Router } from 'express';
import root from './root';
import apiRoutes from './api';

const routes = Router();

routes.use('/api', apiRoutes);
routes.use('/', root);

export default routes;
