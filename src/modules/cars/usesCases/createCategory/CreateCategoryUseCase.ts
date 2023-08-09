import { Category } from '../../model/Category';
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

type IRequest = {
  name: string;
  description: string;
};

class CreateCategoryUseCase {
  constructor(private categoryRepository: ICategoriesRepository) {
    this.categoryRepository = categoryRepository;
  }

  execute({ name, description }: IRequest): Category {
    let category = this.categoryRepository.findByName(name);
    if (!category) {
      category = new Category();
      Object.assign(category, {
        name,
        description,
      });

      this.categoryRepository.create(category);
    }
    return category;
  }
}

export { CreateCategoryUseCase };
