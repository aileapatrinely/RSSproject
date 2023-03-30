import { Repository } from 'typeorm';
import { UserEntity } from 'src/users/entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UserDto } from './dto/user.dto';
import { AuthenticateUserDto } from './dto/authenticate-user.dto';
export declare class UsersService {
    private readonly userRepository;
    constructor(userRepository: Repository<UserEntity>);
    findOne(options?: object): Promise<UserDto>;
    findByLogin({ username, password, }: AuthenticateUserDto): Promise<UserDto>;
    findByPayload({ username }: any): Promise<UserDto>;
    create(createUserDto: CreateUserDto): Promise<UserDto>;
    private _sanitizeUser;
}
