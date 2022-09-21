import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { SequelizeModule } from '@nestjs/sequelize'
import { ServeStaticModule } from '@nestjs/serve-static'
import * as path from 'path'
import { AuthModule } from './auth/auth.module'
import { FilesModule } from './files/files.module'
import { Folder } from './folders/folders.model'
import { FoldersModule } from './folders/folders.module'
import { Post } from './posts/posts.model'
import { PostsModule } from './posts/posts.module'
import { Role } from './roles/roles.model'
import { RolesModule } from './roles/roles.module'
import { UserRoles } from './roles/users-roles.model'
import { Todo } from './todo/todo.model'
import { TodoModule } from './todo/todo.module'
import { User } from './users/users.model'
import { UsersModule } from './users/users.module'

@Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    ServeStaticModule.forRoot({ rootPath: path.resolve(__dirname, 'static') }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USERNAME,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB_NAME,
      models: [User, Role, UserRoles, Post, Folder, Todo],
      autoLoadModels: true,
    }),
    UsersModule,
    RolesModule,
    AuthModule,
    PostsModule,
    FilesModule,
    FoldersModule,
    TodoModule
  ],
})
export class AppModule {}
