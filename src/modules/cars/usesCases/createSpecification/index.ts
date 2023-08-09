import { CreateSpecificationUserCase } from './CreateSpecificationUserCase';
import { CreateSpecificationController } from './CreateSpecificationController';
import repository from '../../repositories/implementations/SpecificationsRepository';

const createSpecificationUserCase = new CreateSpecificationUserCase(repository);
const createSpecificationController = new CreateSpecificationController(
  createSpecificationUserCase,
);

export { createSpecificationController };
