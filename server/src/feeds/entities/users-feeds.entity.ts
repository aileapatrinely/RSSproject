import { UserEntity } from 'src/users/entities/user.entity';
import { Entity, PrimaryColumn, ManyToMany, JoinColumn } from 'typeorm';

@Entity()
export class UsersFeeds {
  @PrimaryColumn()
  user_id: string;

  @PrimaryColumn()
  feed_id: string;

  @ManyToMany(() => UserEntity, (userEntity) => userEntity.id)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;
}
