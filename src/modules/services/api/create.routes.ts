import { Router, Request, Response } from 'express';
import { validate } from '@tausi-app/common/middleware/validator';
import { body } from 'express-validator';
import ServiceController from '../controller/index';

const router = Router();

export default (app:Router) => {
  app.use('/', router);

  /**
   * @typedef {Object} ServiceDTO
   * @property {string} _id
   * @property {string} name
   * @property {string} description
   * @property {string} createdAt
   * @property {string} updatedAt
   */

  /**
   * @typedef {Object} NewServiceDTO
   * @property {string} name.required - The name of the service
   * @property {string} description - The description of the service
   */
  /**
   * POST /api/v1/services
   * @param {NewServiceDTO} request.body.required - application/json
   * @summary This is the service creation endpoint
   * @tags Services
   * @return {ServiceDTO} 201 - Service has been created
   * @return {object} 400 - Bad request
   * @return {Server Error} 500 - Internal Server Error
   */
  router.post('/', validate([
    body('name').trim().escape()
      .notEmpty()
      .withMessage('Name is required')
      .bail()
      .isString()
      .withMessage('Name is invalid'),
    body('description').optional().trim()
      .escape()
      .isString()
      .withMessage('Description is invalid')
  ]), (req:Request, res:Response) => new ServiceController(req, res).create(req));
};
