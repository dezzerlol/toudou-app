import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { TodoController } from './todo.controller';
import { Todo } from './todo.model';
import { TodoService } from './todo.service';

@Module({
  controllers: [TodoController],
  providers: [TodoService],
  imports: [SequelizeModule.forFeature([Todo])]
})
export class TodoModule {}
