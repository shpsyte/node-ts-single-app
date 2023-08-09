import { Router } from 'express';
import { createSpecificationController } from '../modules/cars/usesCases/createSpecification';
import { listCategoryController } from '../modules/cars/usesCases/ListSpecification';
const route = Router();

route.post('/', (request, response) => {
  return createSpecificationController.handle(request, response);
});
route.get('/', (request, response) => {
  return listCategoryController.handle(request, response);
});

export { route as specificationRoutes };
