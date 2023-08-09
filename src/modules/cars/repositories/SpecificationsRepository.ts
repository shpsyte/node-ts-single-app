import { Specification } from '../model/Specification';
import {
  ISpecificationRepository,
  SpecificationDTO,
} from './ISpecificationRepository';

class SpecificationRepository implements ISpecificationRepository {
  private specifications: Specification[];

  constructor() {
    this.specifications = [];
  }

  findByName(name: string): Specification | undefined {
    const specification = this.specifications.find(
      (specification) => specification.name === name,
    );
    return specification;
  }

  list() {
    return this.specifications;
  }

  create({ name, description }: SpecificationDTO): Specification {
    const specification = new Specification();

    Object.assign(specification, {
      name,
      description,
    });

    this.specifications.push(specification);
    return specification;
  }
}

export { SpecificationRepository };
