import { Category } from '../../entities/Category';
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

class ListCategoryUseCase {
  constructor(private categoryRepository: ICategoriesRepository) {
    this.categoryRepository = categoryRepository;
  }

  execute(): Category[] {
    return this.categoryRepository.list();
  }
}

export { ListCategoryUseCase };
