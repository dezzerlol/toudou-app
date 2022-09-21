import { ApiProperty } from '@nestjs/swagger'
import { BelongsToMany, Column, DataType, HasMany, Model, Table } from 'sequelize-typescript'
import { Folder } from 'src/folders/folders.model'
import { Post } from 'src/posts/posts.model'
import { Role } from 'src/roles/roles.model'
import { UserRoles } from 'src/roles/users-roles.model'

interface UserCreationAttr {
  email: string
  password: string
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttr> {
  @ApiProperty({ example: '1', description: 'Unique identifier' })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number

  @ApiProperty({ example: 'test@mail.com', description: 'User email' })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  email: string

  @ApiProperty({ example: '123456', description: 'User password' })
  @Column({ type: DataType.STRING, allowNull: false })
  password: string

  @ApiProperty({ example: true, description: 'User ban status' })
  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  banned: boolean

  @ApiProperty({ example: 'Reason', description: 'User ban reason' })
  @Column({ type: DataType.STRING, allowNull: true })
  banReason: string

  @BelongsToMany(() => Role, () => UserRoles)
  roles: Role[]

  @HasMany(() => Post)
  posts: Post[]

  @HasMany(() => Folder)
  folders: Folder[]
}
