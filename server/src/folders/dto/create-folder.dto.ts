import { ApiProperty } from '@nestjs/swagger'

export class CreateFolderDto {
  @ApiProperty({ example: 'Folder title', description: 'Post title' })
  readonly title: string

  @ApiProperty({ example: '32', description: 'User id' })
  readonly userId: number
}
