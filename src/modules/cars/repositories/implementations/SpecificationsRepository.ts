import { Specification } from '../../entities/Specification';
import {
  ISpecificationRepository,
  SpecificationDTO,
} from '../ISpecificationRepository';

let instance: SpecificationRepository;
class SpecificationRepository implements ISpecificationRepository {
  private specifications: Specification[] = [];

  constructor() {
    if (instance) {
      return instance;
    }
    instance = this;
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

const specificationRepository = Object.freeze(new SpecificationRepository());

export default specificationRepository;
