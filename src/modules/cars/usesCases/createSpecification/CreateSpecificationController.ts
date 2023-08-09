import { Response, Request } from 'express';

import { CreateSpecificationUserCase } from './CreateSpecificationUserCase';

class CreateSpecificationController {
  constructor(
    private createSpecificationUserCase: CreateSpecificationUserCase,
  ) {}

  handle(request: Request, response: Response): Response {
    const { name, description } = request.body;

    const specification = this.createSpecificationUserCase.execute({
      name,
      description,
    });

    return response.status(201).json({ specification });
  }
}

export { CreateSpecificationController };
