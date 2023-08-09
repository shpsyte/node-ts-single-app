import { Category } from '../model/Category';

type CreateCategoryDTO = {
  name: string;
  description: string;
};
interface ICategoryRepository {
  create({ name, description }: CreateCategoryDTO): Category;
  list(): Category[];
  findByName(name: string): Category | undefined;
}

class CategoryRepository implements ICategoryRepository {
  private catergories: Category[] = [];

  constructor() {
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
    // check if category already exists
    let category = this.findByName(name);
    if (!category) {
      category = new Category();
      Object.assign(category, {
        name,
        description,
      });

      this.catergories.push(category);
    }
    return category;
  }
}

export { CategoryRepository };
