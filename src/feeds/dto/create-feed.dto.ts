import { ApiProperty } from '@nestjs/swagger';

export class CreateFeedDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  url: string;
}
