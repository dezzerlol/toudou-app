import { ApiProperty } from '@nestjs/swagger'
import { Column, DataType, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript'
import { Todo } from 'src/todo/todo.model'
import { User } from 'src/users/users.model'

interface FolderCreationAttr {
  title: string
  userId: number
  icon?: string
  folderBGColor: string
  todos: Todo[]
}

@Table({ tableName: 'folders' })
export class Folder extends Model<Folder, FolderCreationAttr> {
  @ApiProperty({ example: '1', description: 'Unique identifier' })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number

  @ApiProperty({ example: 'Folder 1', description: 'Folder title' })
  @Column({ type: DataType.STRING, unique: false, allowNull: false })
  title: string

  @ApiProperty({ example: '🎈', description: 'Folder icon' })
  @Column({ type: DataType.STRING, unique: false, allowNull: true })
  icon: string

  @ApiProperty({ example: '#FFFFFF', description: 'Folder bg color' })
  @Column({ type: DataType.STRING, unique: false, allowNull: true })
  folderBGColor: string

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER, unique: false, allowNull: false })
  userId: number

  @HasMany(() => Todo)
  todos: Todo[]
}

