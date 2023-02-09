import { Router } from 'express';
import category from './category';

const productRouter = Router();

export default (app: Router) => {
  app.use('/products', productRouter);
  category(productRouter);
};
