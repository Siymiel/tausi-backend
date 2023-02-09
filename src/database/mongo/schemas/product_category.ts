import mongooose from '..';

const DOCUMENT_NAME = 'product_categories';

interface IProductCategory extends mongooose.Document {
  productId: mongooose.Schema.Types.ObjectId,
  serviceId: string;
  name: string;
  description?: string;
  enabled: boolean;
}

const productCategorySchema = new mongooose.Schema<IProductCategory>({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  enabled: {
    type: Boolean,
    default: true
  },
  serviceId: {
    type: String,
    required: true
  }
}, { timestamps: true });

const ProductCategoryModel = mongooose.model(DOCUMENT_NAME, productCategorySchema);
export default ProductCategoryModel;
