import {
  Controller,
  Post,
  Get,
  Body,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { UserDto } from 'src/users/dto/user.dto';
import { CreateFeedDto } from './dto/create-feed.dto';
import { FeedsService } from './feed.service';

@Controller('api')
@ApiTags('feeds')
export class FeedsController {
  constructor(private readonly feedService: FeedsService) {}

  @Post('feeds/create')
  @UseGuards(AuthGuard())
  async createFeed(
    @Body() createFeedDto: CreateFeedDto,
    @Request() req: any,
  ): Promise<any> {
    const user_id = req.user.id as UserDto;
    await this.feedService.createFeed(createFeedDto, user_id);
  }

  @Get('feeds/subscribed')
  @UseGuards(AuthGuard())
  async getSubscribedList(@Request() req: any): Promise<any> {
    const user_id = req.user.id as UserDto;
    const feeds = await this.feedService.getSubscribedList(user_id);
    return feeds;
  }

  @Get('feeds')
  @UseGuards(AuthGuard())
  async getFeed(@Request() req: any): Promise<any> {
    const user_id = req.user.id as UserDto;
    const feeds = await this.feedService.getFeed(user_id);
    return feeds;
  }
}
