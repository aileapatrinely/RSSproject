"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedsModule = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const typeorm_1 = require("@nestjs/typeorm");
const auth_module_1 = require("../auth/auth.module");
const user_entity_1 = require("../users/entities/user.entity");
const users_module_1 = require("../users/users.module");
const users_service_1 = require("../users/users.service");
const typeorm_2 = require("typeorm");
const create_user_feeds_dto_1 = require("./dto/create-user-feeds.dto");
const feed_entity_1 = require("./entities/feed.entity");
const users_feeds_entity_1 = require("./entities/users-feeds.entity");
const feed_controller_1 = require("./feed.controller");
const feed_service_1 = require("./feed.service");
let FeedsModule = class FeedsModule {
};
FeedsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([feed_entity_1.Feed, user_entity_1.UserEntity, users_feeds_entity_1.UsersFeeds]),
            auth_module_1.AuthModule,
            passport_1.PassportModule,
            users_module_1.UsersModule,
        ],
        providers: [feed_service_1.FeedsService, users_service_1.UsersService, typeorm_2.Repository, create_user_feeds_dto_1.CreateUserFeedsDto],
        controllers: [feed_controller_1.FeedsController],
    })
], FeedsModule);
exports.FeedsModule = FeedsModule;
//# sourceMappingURL=feed.module.js.map