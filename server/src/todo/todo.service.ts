import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { CreateTodoDto } from './dto/create-todo.dto'
import { UpdateTodoDto } from './dto/update-todo.dto'
import { Todo } from './todo.model'

@Injectable()
export class TodoService {
  constructor(@InjectModel(Todo) private todoRepository: typeof Todo) {}

  async createTodo(dto: CreateTodoDto) {
    const todo = await this.todoRepository.create(dto)
    return todo
  }

  async deleteTodo(id: number) {
    const todo = await this.todoRepository.destroy({ where: { id } })
    return todo
  }

  async updateTodo(dto: UpdateTodoDto) {
    const todo = await this.todoRepository.findOne({ where: { id: dto.todoId } })

    if (!todo) {
      return new HttpException('Todo not found', HttpStatus.NOT_FOUND)
    }

    await todo.update({ text: dto.newText })
    return dto
  }
}
