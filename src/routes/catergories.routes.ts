import { Router } from 'express';

import { CategoryRepository } from '../repositories/CategoriesRepository';

const catergoriesRoutes = Router();

const categoryRepository = new CategoryRepository();

catergoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body;

  const category = categoryRepository.create({ name, description });

  return response.status(201).json({ category });
});

catergoriesRoutes.get('/', (request, response) => {
  const all = categoryRepository.list();

  return response.json(all);
});

export { catergoriesRoutes };
