import { ApiProperty } from '@nestjs/swagger'

export class UpdateFolderDto {
  @ApiProperty({ example: 'Test folder', description: 'Folder title' })
  readonly title?: string

  @ApiProperty({ example: '100', description: 'Folder id' })
  readonly id: number

  @ApiProperty({ example: '🎃', description: 'Folder icon' })
  readonly icon?: string
}
