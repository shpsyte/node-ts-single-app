import fs from 'node:fs';
import { parse } from 'csv-parse';
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

type IImportCategory = {
  name: string;
  description: string;
};
class ImportCategoryUseCase {
  constructor(private repository: ICategoriesRepository) {
    this.repository = repository;
  }

  loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path);
      const categories: IImportCategory[] = [];

      const parseFile = parse();

      // pipe is a method that allows you to read a file and write it to another location
      stream.pipe(parseFile);

      // on is a method that allows you to listen to an event
      parseFile
        .on('data', async (line) => {
          const [name, description] = line;
          categories.push({ name, description });
        })
        .on('end', () => {
          fs.promises.unlink(file.path);
          resolve(categories);
        })
        .on('error', (err) => {
          reject(err);
        });

      return categories;
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategories(file);
    categories.map((category) => {
      let existsCategory = this.repository.findByName(category.name);
      if (!existsCategory) {
        this.repository.create(category);
      }
    });
  }
}

export { ImportCategoryUseCase };
