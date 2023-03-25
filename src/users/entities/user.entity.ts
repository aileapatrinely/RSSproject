import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  usernameName: string;

  @Column()
  email: string;

  @Column()
  password: string;
}
