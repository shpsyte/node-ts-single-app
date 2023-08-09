import { Category } from '../model/Category';
import { CategoryRepository } from '../repositories/CategoriesRepository';

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryService {
  execute({ name, description }: IRequest) {
    const categoryRepository = new CategoryRepository();
    let category = categoryRepository.findByName(name);
    if (!category) {
      category = new Category();
      Object.assign(category, {
        name,
        description,
      });

      categoryRepository.create(category);
    }
    return category;
  }
}

export { CreateCategoryService };
