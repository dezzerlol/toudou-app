import { ApiProperty } from '@nestjs/swagger'
import { IsString } from 'class-validator'

export class AddRoleDto {
  @ApiProperty({ example: '35', description: 'User id' })
  @IsString({ message: 'Must be a number' })
  readonly userId: number

  @ApiProperty({ example: 'ADMIN', description: 'User role' })
  @IsString({ message: 'Must be a string' })
  readonly value: string
}
