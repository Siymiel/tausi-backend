import { Router } from 'express';
import createRoutes from './create.routes';

const productCategoryRouter = Router();

export default (app: Router) => {
  app.use('/category', productCategoryRouter);
  createRoutes(productCategoryRouter);
};
