import { Column, DataType, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript'
import { Todo } from 'src/todo/todo.model'
import { User } from 'src/users/users.model'

interface FolderCreationAttr {
  title: string
  userId: number
  todos: Todo[]
}

@Table({ tableName: 'folders' })
export class Folder extends Model<Folder, FolderCreationAttr> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  title: string

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER, unique: false, allowNull: false })
  userId: number

  @HasMany(() => Todo)
  todos: Todo[]
}

