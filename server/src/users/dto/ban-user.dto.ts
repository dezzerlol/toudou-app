import { ApiProperty } from '@nestjs/swagger'

export class BanUserDto {
  @ApiProperty({ example: '35', description: 'User id' })
  readonly userId: number

  @ApiProperty({ example: 'Ban reason', description: 'User ban reason' })
  readonly reason: string
}
