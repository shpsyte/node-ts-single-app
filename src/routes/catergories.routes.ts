import { Router } from 'express';

import { createCategoryController } from '../modules/cars/usesCases/createCategory';
import { listCategoryController } from '../modules/cars/usesCases/listCategory';
import { importCategoryController } from '../modules/cars/usesCases/importCategory';

import multer from 'multer';

const upload = multer({
  dest: './tmp',
});

const catergoriesRoutes = Router();

catergoriesRoutes.post('/', (request, response) => {
  return createCategoryController.handle(request, response);
});

catergoriesRoutes.get('/', (request, response) => {
  return listCategoryController.handle(request, response);
});

catergoriesRoutes.post(
  '/import',
  upload.single('file'),
  (request, response) => {
    return importCategoryController.handle(request, response);
  },
);

export { catergoriesRoutes };
