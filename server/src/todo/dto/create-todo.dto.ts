import { ApiProperty } from '@nestjs/swagger'

export class CreateTodoDto {
  readonly text: string

  readonly folderId: number
}
