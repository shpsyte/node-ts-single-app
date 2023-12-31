import { randomUUID } from 'node:crypto';

class Specification {
  id: string | undefined;
  name: string;
  description: string;
  created_at: Date;

  constructor(id = randomUUID()) {
    this.id = id;
    this.name = '';
    this.description = '';
    this.created_at = new Date();
  }
}

export { Specification };
