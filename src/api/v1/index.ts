import { Router } from 'express';
import services from '@tausi-app/modules/services/api';
import products from '@tausi-app/modules/products/api';

/**
 * @api /api/v1
 */
export default () => {
  const app: Router = Router();
  services(app);
  products(app);
  return app;
};
