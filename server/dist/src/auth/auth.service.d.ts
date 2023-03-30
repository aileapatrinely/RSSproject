import { JwtPayload } from './interfaces/payload.interface';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { RegistrationStatus } from './interfaces/reg-status.interface';
import { AuthenticateUserDto } from 'src/users/dto/authenticate-user.dto';
import { LoginStatus } from './interfaces/login.interface';
import { UserDto } from 'src/users/dto/user.dto';
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    register(userDto: CreateUserDto): Promise<RegistrationStatus>;
    login(authenticateUserDto: AuthenticateUserDto): Promise<LoginStatus>;
    validateUser(payload: JwtPayload): Promise<UserDto>;
    private _createToken;
}
