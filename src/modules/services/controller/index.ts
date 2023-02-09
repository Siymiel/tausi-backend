/* eslint-disable consistent-return */
import BaseController from '@tausi-app/core/express/controller/index';
import { Request } from 'express';
import ServiceModel from '@tausi-app/database/mongo/schemas/service.schema';

class ServiceController extends BaseController {
  public create = async (req:Request) => {
    const newService = new ServiceModel({
      name: req.body.name,
      description: req.body.description
    });

    try {
      const created = await newService.save();
      if (created._id) {
        return this.createdWithDataResponse(created);
      }
      return this.badRequestResponse();
    } catch (err){
      if (err) return this.serverError();
    }
  };

  public fetchAll = async () => {
    const services = await ServiceModel.find().lean();

    return this.successWithDataResponse(services);
  };
}

export default ServiceController;
