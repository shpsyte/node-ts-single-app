import { randomUUID } from 'node:crypto';
import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';

@Entity('categories')
class Category {
  @PrimaryColumn()
  id: string | undefined;

  @Column()
  name: string;

  @Column()
  description: string;

  @CreateDateColumn()
  created_at: Date;

  constructor(id = randomUUID()) {
    this.id = id;
    this.name = '';
    this.description = '';
    this.created_at = new Date();
  }
}

export { Category };
