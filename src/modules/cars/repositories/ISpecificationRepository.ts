import { Specification } from '../entities/Specification';

type SpecificationDTO = {
  name: string;
  description: string;
};

interface ISpecificationRepository {
  create({ name, description }: SpecificationDTO): Specification;
  list(): Specification[];
  findByName(name: string): Specification | undefined;
}

export { ISpecificationRepository, SpecificationDTO };
