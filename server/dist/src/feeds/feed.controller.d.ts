import { CreateFeedDto } from './dto/create-feed.dto';
import { FeedsService } from './feed.service';
export declare class FeedsController {
    private readonly feedService;
    constructor(feedService: FeedsService);
    createFeed(createFeedDto: CreateFeedDto, req: any): Promise<any>;
    getSubscribedList(req: any): Promise<any>;
    getFeed(req: any): Promise<any>;
    getFeedByPubDate(req: any): Promise<any>;
}
