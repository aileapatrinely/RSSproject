import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFeedDto } from './dto/create-feed.dto';
import { Feed } from './entities/feed.entity';
@Injectable()
export class FeedsService {
  constructor(
    @InjectRepository(Feed)
    private feedsRepository: Repository<Feed>,
  ) {}

  async createFeed(createFeedDto: CreateFeedDto): Promise<any> {
    const checkUrl = this.feedsRepository.findOneBy({ url: createFeedDto.url });

    if (checkUrl) {
      await subscribeToFeed(createFeedDto);
    }
    await this.feedsRepository.create(createFeedDto);
    const promise = await this.feedsRepository.save(createFeedDto);

    return promise;
  }

  async subscribeToFeed() {}

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
