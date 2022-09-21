import { Body, Controller, Post } from '@nestjs/common'
import { CreateTodoDto } from './dto/create-todo.dto'
import { UpdateTodoDto } from './dto/update-todo.dto'
import { TodoService } from './todo.service'

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Post('/create')
  createTodo(@Body() dto: CreateTodoDto) {
    return this.todoService.createTodo(dto)
  }

  @Post('/delete')
  deleteTodo(@Body() id: number) {
    return this.todoService.deleteTodo(id)
  }

  @Post('/update')
  updateTodo(@Body() dto: UpdateTodoDto) {
    return this.todoService.updateTodo(dto)
  }
}
