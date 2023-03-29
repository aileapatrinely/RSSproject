import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'feeds',
})
export class Feed {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  url: string;

  @Column()
  published_date: Date;
}
