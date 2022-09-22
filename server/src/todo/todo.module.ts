import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from 'src/auth/auth.module';
import { TodoController } from './todo.controller';
import { Todo } from './todo.model';
import { TodoService } from './todo.service';

@Module({
  controllers: [TodoController],
  providers: [TodoService],
  imports: [SequelizeModule.forFeature([Todo]), AuthModule]
})
export class TodoModule {}
