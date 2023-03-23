import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Feed } from './entities/feed.entity';
import { FeedsController } from './feed.controller';
import { FeedsService } from './feed.service';

@Module({
  imports: [TypeOrmModule.forFeature([Feed])],
  providers: [FeedsService],
  controllers: [FeedsController],
})
export class FeedsModule {}
