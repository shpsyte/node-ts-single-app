import {
  ISpecificationRepository,
  SpecificationDTO,
} from '../repositories/ISpecificationRepository';

class CreateSpecificationServices {
  constructor(private specificationRepository: ISpecificationRepository) {
    this.specificationRepository = specificationRepository;
  }
  execute({ name, description }: SpecificationDTO) {
    let specification = this.specificationRepository.findByName(name);

    if (!specification) {
      specification = this.specificationRepository.create({
        name,
        description,
      });
    }

    return specification;
  }
}

export { CreateSpecificationServices };
