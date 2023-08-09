import { Router } from 'express';

import specificationRepository from '../modules/cars/repositories/SpecificationsRepository';
import { CreateSpecificationServices } from '../modules/cars/services/CreateSpecificationServices';

const specificationRoutes = Router();

specificationRoutes.post('/', (request, response) => {
  const { name, description } = request.body;

  const services = new CreateSpecificationServices(specificationRepository);
  const specification = services.execute({
    name,
    description,
  });

  return response.status(201).json(specification);
});

specificationRoutes.get('/', (request, response) => {
  return response.json(specificationRepository.list());
});

export { specificationRoutes };
