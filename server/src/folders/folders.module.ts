import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { AuthModule } from 'src/auth/auth.module'
import { User } from 'src/users/users.model'
import { FoldersController } from './folders.controller'
import { Folder } from './folders.model'
import { FoldersService } from './folders.service'

@Module({
  providers: [FoldersService],
  controllers: [FoldersController],
  imports: [SequelizeModule.forFeature([User, Folder]), AuthModule],
})
export class FoldersModule {}
