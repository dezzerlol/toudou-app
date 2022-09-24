import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { CreateTodoDto } from './dto/create-todo.dto'
import { UpdateTodoDto } from './dto/update-todo.dto'
import { Todo } from './todo.model'

@Injectable()
export class TodoService {
  constructor(@InjectModel(Todo) private todoRepository: typeof Todo) {}

  async getTodos(data: { folderId: number }) {
    const todos = await this.todoRepository.findAll({ where: { folderId: data.folderId } })
    return todos
  }

  async createTodo(dto: CreateTodoDto) {
    const todo = await this.todoRepository.create(dto)
    return todo
  }

  async deleteTodo(data: { id: number }) {
    const todo = await this.todoRepository.destroy({ where: { id: data.id } })
    return todo
  }

  async updateTodo(dto: UpdateTodoDto) {
    const todo = await this.todoRepository.findOne({ where: { id: dto.id } })

    if (!todo) {
      return new HttpException('Todo not found', HttpStatus.NOT_FOUND)
    }

    await todo.update({ text: dto.text, icon: dto.icon, completed: dto.completed })
    return dto
  }
}
