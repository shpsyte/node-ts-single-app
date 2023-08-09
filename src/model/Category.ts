import { randomUUID } from 'node:crypto';

class Category {
  id: string | undefined;
  name: string;
  description: string;
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = randomUUID();
    }
    this.name = '';
    this.description = '';
    this.created_at = new Date();
  }
}

export { Category };
