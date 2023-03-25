import {
  Controller,
  Post,
  Get,
  UseInterceptors,
  ClassSerializerInterceptor,
  Body,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { UserEntity } from './entities/user.entity';
import { UsersService } from './users.service';

@Controller('api')
@UseInterceptors(ClassSerializerInterceptor)
@ApiTags('users')
export class UsersController {
  constructor(private readonly usesrService: UsersService) {}

  @Post('users/create')
  async createUser(@Body() data: CreateUserDto): Promise<UserEntity> {
    return this.usesrService.createUser(data);
  }
}
