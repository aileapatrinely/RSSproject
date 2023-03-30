import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'feeds',
})
export class Feed {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  url: string;
}
