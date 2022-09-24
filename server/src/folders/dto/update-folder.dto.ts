import { ApiProperty } from '@nestjs/swagger'

export class UpdateFolderDto {
  readonly title?: string

  readonly id: number

  readonly icon?: string
}
