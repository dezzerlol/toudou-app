import { Body, Controller, Post, UseGuards } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'
import { CreateTodoDto } from './dto/create-todo.dto'
import { UpdateTodoDto } from './dto/update-todo.dto'
import { Todo } from './todo.model'
import { TodoService } from './todo.service'

@ApiTags('Todos')
@Controller('todo')
@UseGuards(JwtAuthGuard)
export class TodoController {
  constructor(private todoService: TodoService) {}

  @ApiOperation({ summary: 'Get todos for folder' })
  @ApiResponse({ status: 200, type: [Todo] })
  @Post('/get')
  getTodos(@Body() data: { folderId: number }) {
    return this.todoService.getTodos(data)
  }

  @ApiOperation({ summary: 'Create todo' })
  @Post('/create')
  createTodo(@Body() dto: CreateTodoDto) {
    return this.todoService.createTodo(dto)
  }

  @ApiOperation({ summary: 'Delete todo' })
  @Post('/delete')
  deleteTodo(@Body() data: { id: number }) {
    return this.todoService.deleteTodo(data)
  }

  @ApiOperation({ summary: 'Update single todo' })
  @Post('/update')
  updateTodo(@Body() dto: UpdateTodoDto) {
    return this.todoService.updateTodo(dto)
  }
}
