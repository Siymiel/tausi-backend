import ServiceModel from '@tausi-app/database/mongo/schemas/service.schema';

class ServiceRepository extends ServiceModel {
  public $model = ServiceModel;
}

export default ServiceRepository;
