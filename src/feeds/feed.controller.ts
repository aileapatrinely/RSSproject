import { Controller, Post, Get, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateFeedDto } from './dto/create-feed.dto';
import { FeedsService } from './feed.service';

@Controller('api')
@ApiTags('feeds')
export class FeedsController {
  constructor(private readonly feedService: FeedsService) {}

  @Post('feeds/create')
  async createFeed(@Body() data: CreateFeedDto): Promise<any> {
    await this.feedService.createFeed(data);
  }
}
