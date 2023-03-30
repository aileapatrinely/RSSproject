import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Feed } from './entities/feed.entity';
import { UsersFeeds } from './entities/users-feeds.entity';
import * as RSSParser from 'rss-parser';

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

  async getSubscibedList(user_id): Promise<string[]> {
    const userFeeds = await this.userFeedsRepository.find(user_id);
    const feedIds = userFeeds.map((userFeed) => userFeed.feed_id);
    const feeds = feedIds.map(async (feed_id) => {
      const feed = await this.feedsRepository.findOneBy({ id: feed_id });
      return feed.url;
    });
    const feedUrls = await Promise.all(feeds);
    return feedUrls;
  }

  async getFeed(user_id): Promise<object> {
    const feedUrls = await this.getSubscibedList(user_id);
    console.log(feedUrls, '1');
    const parser = new RSSParser();
    const parsedFeeds = feedUrls.map(async (feedUrl) => {
      const feed = await parser.parseURL(feedUrl);
      return feed;
    });
    const feeds = await Promise.all(parsedFeeds);
    return feeds;
  }
}
