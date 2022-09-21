import { Module } from '@nestjs/common'
import { FoldersService } from './folders.service'
import { FoldersController } from './folders.controller'
import { Folder } from './folders.model'
import { User } from 'src/users/users.model'
import { SequelizeModule } from '@nestjs/sequelize'

@Module({
  providers: [FoldersService],
  controllers: [FoldersController],
  imports: [SequelizeModule.forFeature([User, Folder])],
})
export class FoldersModule {}
