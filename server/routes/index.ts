import { Router } from 'express';
import root from './root';

const routes = Router();

routes.use('/', root);

export default routes;
