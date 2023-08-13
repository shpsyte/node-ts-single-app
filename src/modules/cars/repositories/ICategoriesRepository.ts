import { Category } from '../entities/Category';

type CreateCategoryDTO = {
  name: string;
  description: string;
};
interface ICategoriesRepository {
  findByName(name: string): Category | undefined;
  list(): Category[];
  create({ name, description }: CreateCategoryDTO): Category;
}

export { ICategoriesRepository, CreateCategoryDTO };
