import {
  Controller,
  Body,
  Post,
  HttpException,
  HttpStatus,
  Get,
  Req,
  UseGuards,
} from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { RegistrationStatus } from './interfaces/reg-status.interface';
import { AuthService } from './auth.service';
import { LoginStatus } from './interfaces/login.interface';
import { AuthenticateUserDto } from 'src/users/dto/authenticate-user.dto';
import { JwtPayload } from './interfaces/payload.interface';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';

@Controller('api')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('auth/register')
  public async register(
    @Body() createUserDto: CreateUserDto,
  ): Promise<RegistrationStatus> {
    const result: RegistrationStatus = await this.authService.register(
      createUserDto,
    );

    if (!result.success) {
      throw new HttpException(result.message, HttpStatus.BAD_REQUEST);
    }

    return result;
  }

  @Post('auth/login')
  public async login(
    @Body() authenticateUserDto: AuthenticateUserDto,
  ): Promise<LoginStatus> {
    return await this.authService.login(authenticateUserDto);
  }

  @Get('auth/user')
  @UseGuards(AuthGuard())
  public async testAuth(@Req() req: any): Promise<JwtPayload> {
    return req.user;
  }
}
