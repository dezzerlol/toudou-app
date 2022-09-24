import { ApiProperty } from '@nestjs/swagger'

export class GetFoldersDto {
  @ApiProperty({ example: '32', description: 'User id' })
  readonly userId: number
}
