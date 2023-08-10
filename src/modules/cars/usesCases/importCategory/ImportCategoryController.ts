import { Request, Response } from 'express';
import { ImportCategoryUseCase } from './ImportCategoryUserCase';

class ImportCategoryController {
  constructor(private importCategoruUseCase: ImportCategoryUseCase) {
    this.importCategoruUseCase = importCategoruUseCase;
  }
  handle(request: Request, response: Response) {
    const { file } = request;

    this.importCategoruUseCase.execute(file);

    return response.send({
      message: 'File received',
      file: {
        name: file?.originalname,
        path: file?.path,
      },
    });
  }
}

export { ImportCategoryController };
