import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common'
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'
import { CreateTodoDto } from './dto/create-todo.dto'
import { UpdateTodoDto } from './dto/update-todo.dto'
import { TodoService } from './todo.service'

@Controller('todo')
/* @UseGuards(JwtAuthGuard) */
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Post('/get')
  getTodos(@Body() data: { folderId: number }) {
    return this.todoService.getTodos(data)
  }

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
