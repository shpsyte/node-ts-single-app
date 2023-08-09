import { Request, Response } from 'express';

import { ListSpecificationUseCase } from './ListSpecificationUseCase';

class ListSpecificationController {
  constructor(private listSpecificationUseCase: ListSpecificationUseCase) {}

  handle(request: Request, response: Response): Response {
    const specification = this.listSpecificationUseCase.execute();

    return response.status(201).json({ specification });
  }
}

export { ListSpecificationController };
