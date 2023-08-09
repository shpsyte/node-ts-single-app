import { Router } from 'express';

import { createCategoryController } from '../modules/cars/usesCases/createCategory';
import { listCategoryController } from '../modules/cars/usesCases/listCategory';

const catergoriesRoutes = Router();

catergoriesRoutes.post('/', (request, response) => {
  return createCategoryController.handle(request, response);
});

catergoriesRoutes.get('/', (request, response) => {
  return listCategoryController.handle(request, response);
});

export { catergoriesRoutes };
