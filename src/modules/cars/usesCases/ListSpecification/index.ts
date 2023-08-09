import repository from '../../repositories/implementations/SpecificationsRepository';
import { ListSpecificationController } from './ListSpecificationController';
import { ListSpecificationUseCase } from './ListSpecificationUseCase';

const useCase = new ListSpecificationUseCase(repository);
const listCategoryController = new ListSpecificationController(useCase);

export { listCategoryController };
