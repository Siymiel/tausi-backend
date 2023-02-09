import { Router, Response, Request } from 'express';
import { body } from 'express-validator';
import { validate } from '@tausi-app/common/middleware/validator';
import ProductController from '../../controllers/index';

const router = Router();

export default (app: Router) => {
  app.use('/', router);
  /**
   * @typedef {Object} CreateProductCategoryRequest
   * @property {string} name.required
   * @property {string} description
   * @property {string} serviceId.required
   */
  /**
   * POST /api/v1/products/category
   * @summary Create a new product category
   * @param {CreateProductCategoryRequest} request.body.required
   * @tags Products
   * @return {object} 201 - Product category created
   * @return {Server Error}  500 - Unexpected error
   * @security Bearer
   */
  router.post('/', validate([
    body('name').trim().escape()
      .isString()
      .withMessage('name is invalid'),
    body('description').optional().trim()
      .escape()
      .isString()
      .withMessage('description is invalid'),
    body('serviceId').trim().escape()
      .isString()
      .isMongoId()
      .withMessage('serviceId is invalid')
  ]), async (req:Request, res:Response) => new ProductController(req, res).createProductCategory(req));
};
