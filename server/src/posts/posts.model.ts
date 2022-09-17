import { ApiProperty } from '@nestjs/swagger'
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript'
import { User } from 'src/users/users.model'

interface PostCreationAttr {
  title: string
  content: string
  userId: number
  image: string
}

@Table({ tableName: 'posts' })
export class Post extends Model<Post, PostCreationAttr> {
  @ApiProperty({ example: '1', description: 'Unique identifier' })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number

  @ApiProperty({ example: 'Test title.', description: 'Post title' })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  title: string

  @ApiProperty({ example: 'Here is a long post.', description: 'Post content' })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  content: string

  @ApiProperty({ example: 'test@mail.com', description: 'User email' })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  image: string

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER, unique: true, allowNull: false })
  userId: number

  @BelongsTo(() => User)
  author: User
}
