import { ApiProperty } from '@nestjs/swagger'

export class RenameFolderDto {
  @ApiProperty({ example: 'New folder title', description: 'Folder title' })
  readonly newTitle: string

  @ApiProperty({ example: '32', description: 'User id' })
  readonly folderId: number
}
