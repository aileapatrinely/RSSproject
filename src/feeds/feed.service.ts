import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { Feed } from './entities/feed.entity';
@Injectable()
export class FeedsService {
  constructor(
    private dataSource: DataSource,
    @InjectRepository(Feed)
    private feedsRepository: Repository<Feed>,
  ) {}

  findAll(): Promise<Feed[]> {
    return this.feedsRepository.find();
  }

  findOne(id: number): Promise<Feed> {
    return this.feedsRepository.findOneBy({ id });
  }

  async remove(id: string): Promise<void> {
    await this.feedsRepository.delete(id);
  }
}