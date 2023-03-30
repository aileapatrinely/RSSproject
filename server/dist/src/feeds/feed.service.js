"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const feed_entity_1 = require("./entities/feed.entity");
const users_feeds_entity_1 = require("./entities/users-feeds.entity");
const RSSParser = require("rss-parser");
let FeedsService = class FeedsService {
    constructor(feedsRepository, userFeedsRepository) {
        this.feedsRepository = feedsRepository;
        this.userFeedsRepository = userFeedsRepository;
    }
    async createFeed(createFeedDto, user_id) {
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
    async getSubscibedList(user_id) {
        const userFeeds = await this.userFeedsRepository.find(user_id);
        const feedIds = userFeeds.map((userFeed) => userFeed.feed_id);
        const feeds = feedIds.map(async (feed_id) => {
            const feed = await this.feedsRepository.findOneBy({ id: feed_id });
            return feed.url;
        });
        const feedUrls = await Promise.all(feeds);
        return feedUrls;
    }
    async getFeed(user_id) {
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
    async remove(id) {
        await this.feedsRepository.delete(id);
    }
};
FeedsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(feed_entity_1.Feed)),
    __param(1, (0, typeorm_1.InjectRepository)(users_feeds_entity_1.UsersFeeds)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], FeedsService);
exports.FeedsService = FeedsService;
//# sourceMappingURL=feed.service.js.map