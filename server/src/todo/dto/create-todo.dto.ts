import { ApiProperty } from '@nestjs/swagger'

export class CreateTodoDto {
  readonly text: string

  readonly icon: string

  readonly folderId: number
}
