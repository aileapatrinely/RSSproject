import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { UserEntity } from 'src/users/entities/user.entity';
import { UsersModule } from 'src/users/users.module';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { CreateUserFeedsDto } from './dto/create-user-feeds.dto';
import { Feed } from './entities/feed.entity';
import { UsersFeeds } from './entities/users-feeds.entity';
import { FeedsController } from './feed.controller';
import { FeedsService } from './feed.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Feed, UserEntity, UsersFeeds]),
    AuthModule,
    PassportModule,
    UsersModule,
  ],
  providers: [FeedsService, UsersService, Repository, CreateUserFeedsDto],
  controllers: [FeedsController],
})
export class FeedsModule {}
