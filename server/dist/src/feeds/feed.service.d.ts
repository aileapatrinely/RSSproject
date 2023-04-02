import { Repository } from 'typeorm';
import { Feed } from './entities/feed.entity';
import { UsersFeeds } from './entities/users-feeds.entity';
export declare class FeedsService {
    private feedsRepository;
    private userFeedsRepository;
    constructor(feedsRepository: Repository<Feed>, userFeedsRepository: Repository<UsersFeeds>);
    createFeed(createFeedDto: any, user_id: any): Promise<any>;
    subscribeToFeed(user_id: any, createFeedDto: any): Promise<{
        user_id: any;
        feed_id: any;
    } & UsersFeeds>;
    getSubscibedList(user_id: any): Promise<string[]>;
    getFeed(user_id: any): Promise<any>;
    getFeedByPubDate(user_id: any): Promise<any>;
}
