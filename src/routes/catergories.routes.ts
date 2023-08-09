import { Router } from 'express';

import { CategoryRepository } from '../modules/cars/repositories/CategoriesRepository';
import { CreateCategoryService } from '../modules/cars/services/CreateCategoryServices';

const catergoriesRoutes = Router();

const categoryRepository = new CategoryRepository();

catergoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body;

  const createCategoryService = new CreateCategoryService(categoryRepository);
  const category = createCategoryService.execute({ name, description });

  return response.status(201).json({ category });
});

catergoriesRoutes.get('/', (request, response) => {
  const all = categoryRepository.list();

  return response.json(all);
});

export { catergoriesRoutes };
