import { Category } from '../../model/Category';
import {
  ICategoriesRepository,
  CreateCategoryDTO,
} from '../ICategoriesRepository';

let instance: CategoryRepository;

class CategoryRepository implements ICategoriesRepository {
  private catergories: Category[] = [];

  constructor() {
    if (instance) {
      return instance;
    }
    instance = this;
    this.catergories = [];
  }

  findByName(name: string): Category | undefined {
    const category = this.catergories.find(
      (category) => category.name === name,
    );
    return category;
  }

  list(): Category[] {
    return this.catergories;
  }

  create({ name, description }: CreateCategoryDTO): Category {
    const category = new Category();
    Object.assign(category, {
      name,
      description,
    });

    this.catergories.push(category);

    return category;
  }
}

const categoryRepository = Object.freeze(new CategoryRepository());

export default categoryRepository;
