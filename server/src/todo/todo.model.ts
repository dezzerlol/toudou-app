import { BelongsTo, Column, DataType, Default, ForeignKey, Model, Table } from 'sequelize-typescript'
import { Folder } from 'src/folders/folders.model'

interface TodoCreationAttr {
  id: number
  text: string
  folderId: number
  icon?: string
  completed?: boolean
}

@Table({ tableName: 'todos' })
export class Todo extends Model<Todo, TodoCreationAttr> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number

  @Column({ type: DataType.STRING, unique: false, allowNull: false })
  text: string

  @Column({ type: DataType.BOOLEAN, unique: false, allowNull: true, defaultValue: false })
  completed: boolean

  @Column({ type: DataType.STRING, unique: false, allowNull: true })
  icon: string

  @ForeignKey(() => Folder)
  @Column({ type: DataType.INTEGER, unique: false, allowNull: false })
  folderId: number

  @BelongsTo(() => Folder)
  folder: Folder
}
