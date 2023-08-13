import { Specification } from '../../entities/Specification';
import { ISpecificationRepository } from '../../repositories/ISpecificationRepository';

class ListSpecificationUseCase {
  constructor(private repository: ISpecificationRepository) {
    this.repository = repository;
  }

  execute(): Specification[] {
    return this.repository.list();
  }
}

export { ListSpecificationUseCase };
