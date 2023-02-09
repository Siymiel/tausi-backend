import { Document, Schema } from 'mongoose';
import mongoose from '..';

const DOCUMENT_NAME = 'services';

export interface IServiceModel extends Document {
  name: string;
  description: string;
}

const serviceModelSchema = new Schema<IServiceModel>({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  }
}, { timestamps: true });

const ServiceModel = mongoose.model(DOCUMENT_NAME, serviceModelSchema);
export default ServiceModel;
