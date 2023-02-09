import { Router } from 'express';
import createRoutes from './create.routes';
import fetchRoutes from './fetch.routes';

const serviceRouter = Router();

export default (app: Router) => {
  app.use('/services', serviceRouter);
  createRoutes(serviceRouter);
  fetchRoutes(serviceRouter);
};
