import { Router, Request, Response } from 'express';
import ServiceController from '../controller/index';

const router = Router();

export default (app:Router) => {
  app.use('/', router);

  /**
   * GET /api/v1/services
   * @summary - Get All services
   * @tags Services
   * @return {array<ServiceDTO>} 200 - Request was successful
   * @return {Server Error} 500 - Internal server error
   */
  router.get('/', (req:Request, res:Response) => new ServiceController(req, res).fetchAll());
};
