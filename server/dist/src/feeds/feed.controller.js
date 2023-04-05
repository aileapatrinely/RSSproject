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
exports.FeedsController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const swagger_1 = require("@nestjs/swagger");
const create_feed_dto_1 = require("./dto/create-feed.dto");
const feed_service_1 = require("./feed.service");
let FeedsController = class FeedsController {
    constructor(feedService) {
        this.feedService = feedService;
    }
    async createFeed(createFeedDto, req) {
        const user_id = req.user.id;
        await this.feedService.createFeed(createFeedDto, user_id);
    }
    async getSubscribedList(req) {
        const user_id = req.user.id;
        await this.feedService.getSubscibedList(user_id);
    }
    async getFeed(req) {
        const user_id = req.user.id;
        const feeds = await this.feedService.getFeed(user_id);
        return feeds;
    }
};
__decorate([
    (0, common_1.Post)('feeds/create'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_feed_dto_1.CreateFeedDto, Object]),
    __metadata("design:returntype", Promise)
], FeedsController.prototype, "createFeed", null);
__decorate([
    (0, common_1.Get)('feeds/subscribed'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FeedsController.prototype, "getSubscribedList", null);
__decorate([
    (0, common_1.Get)('feeds'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FeedsController.prototype, "getFeed", null);
FeedsController = __decorate([
    (0, common_1.Controller)('api'),
    (0, swagger_1.ApiTags)('feeds'),
    __metadata("design:paramtypes", [feed_service_1.FeedsService])
], FeedsController);
exports.FeedsController = FeedsController;
//# sourceMappingURL=feed.controller.js.map