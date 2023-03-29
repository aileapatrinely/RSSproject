import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Feed } from './entities/feed.entity';
import { UsersFeeds } from './entities/users-feeds.entity';
@Injectable()
export class FeedsService {
  constructor(
    @InjectRepository(Feed)
    private feedsRepository: Repository<Feed>,
    @InjectRepository(UsersFeeds)
    private userFeedsRepository: Repository<UsersFeeds>,
  ) {}

  async createFeed(createFeedDto, user_id): Promise<any> {
    const url = createFeedDto.url;
    const checkUrl = await this.feedsRepository.findOneBy({ url });

    if (checkUrl !== null) {
      this.subscribeToFeed(user_id, checkUrl);
      return;
    }
    const feed = await this.feedsRepository.create(createFeedDto);
    const savedFeed = await this.feedsRepository.save(feed);

    const promise = await this.subscribeToFeed(user_id, savedFeed);

    return promise;
  }

  async subscribeToFeed(user_id, createFeedDto) {
    const createUserFeedsDto = { user_id: user_id, feed_id: createFeedDto.id };

    await this.userFeedsRepository.create(createUserFeedsDto);
    const promise = await this.userFeedsRepository.save(createUserFeedsDto);

    return promise;
  }

  findAll(): Promise<Feed[]> {
    return this.feedsRepository.find();
  }

  // findOne(id: number): Promise<Feed> {
  //   return this.feedsRepository.findOneBy({ id });
  // }

  async remove(id: string): Promise<void> {
    await this.feedsRepository.delete(id);
  }
}
