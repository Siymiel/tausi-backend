import BaseController from '@tausi-app/core/express/controller/index';
import { Request } from 'express';
import ProductCategoryModel from '../../../database/mongo/schemas/product_category';

class ProductController extends BaseController {
  public createProductCategory = async (req:Request) => {
    const createProduct = new ProductCategoryModel({
      name: req.body.name,
      description: req.body.description,
      serviceId: req.body.serviceId
    });

    try {
      const created = await createProduct.save();
      // eslint-disable-next-line no-underscore-dangle
      if (created._id) {
        return this.createdWithDataResponse(created);
      }
      return this.badRequestResponse();
    } catch (e){
      return this.serverError();
    }
  };
}

export default ProductController;
