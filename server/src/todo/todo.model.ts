import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript'
import { Folder } from 'src/folders/folders.model'

interface PostCreationAttr {
  title: string
  content: string
  userId: number
  image: string
}

@Table({ tableName: 'todos' })
export class Todo extends Model<Todo, PostCreationAttr> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number

  @Column({ type: DataType.STRING, unique: false, allowNull: false })
  text: string

  @Column({ type: DataType.STRING, unique: false, allowNull: false })
  icon: string

  @ForeignKey(() => Folder)
  @Column({ type: DataType.INTEGER, unique: false, allowNull: false })
  folderId: number

  @BelongsTo(() => Folder)
  folder: Folder
}
