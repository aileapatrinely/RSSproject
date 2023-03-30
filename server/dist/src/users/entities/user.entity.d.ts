import { Feed } from 'src/feeds/entities/feed.entity';
export declare class UserEntity {
    id: string;
    username: string;
    email: string;
    password: string;
    feed: Feed[];
    hashPassword(): Promise<void>;
}
