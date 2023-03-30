import { ApiProperty } from '@nestjs/swagger';

export class CreateFeedDto {
  @ApiProperty()
  url: string;
}
