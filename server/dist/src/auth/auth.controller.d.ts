import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { RegistrationStatus } from './interfaces/reg-status.interface';
import { AuthService } from './auth.service';
import { LoginStatus } from './interfaces/login.interface';
import { AuthenticateUserDto } from 'src/users/dto/authenticate-user.dto';
import { JwtPayload } from './interfaces/payload.interface';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(createUserDto: CreateUserDto): Promise<RegistrationStatus>;
    login(authenticateUserDto: AuthenticateUserDto): Promise<LoginStatus>;
    testAuth(req: any): Promise<JwtPayload>;
}
