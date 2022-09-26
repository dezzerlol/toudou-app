import { forwardRef, HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { FoldersService } from 'src/folders/folders.service'
import { RolesService } from 'src/roles/roles.service'
import { AddRoleDto } from './dto/add-role.dto'
import { BanUserDto } from './dto/ban-user.dto'
import { CreateUserDto } from './dto/create-user.dto'
import { User } from './users.model'

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private userRepository: typeof User,
    private roleService: RolesService,
    @Inject(forwardRef(() => FoldersService)) private readonly folderService: FoldersService
  ) {}

  async createUser(dto: CreateUserDto) {
    const user = await this.userRepository.create(dto)
    const role = await this.roleService.getRoleByValue('USER')
    await user.$set('roles', [role.id])
    user.roles = [role]
    // create first folder for user
    const folder = await this.folderService.createFolder({ title: 'Your first folder', userId: user.id })
    return user
  }

  async getUsers() {
    const users = await this.userRepository.findAll({ include: { all: true } })
    return users
  }

  async getByEmail(email: string) {
    const user = await this.userRepository.findOne({ where: { email }, include: { all: true } })
    return user
  }

  async addRole(dto: AddRoleDto) {
    const user = await this.userRepository.findByPk(dto.userId)
    const role = await this.roleService.getRoleByValue(dto.value)

    if (role && user) {
      await user.$add('role', role.id)
      return dto
    }

    throw new HttpException('User or role not found', HttpStatus.NOT_FOUND)
  }

  async banUser(dto: BanUserDto) {
    const user = await this.userRepository.findByPk(dto.userId)

    if (user) {
      await user.update({ banned: true, banReason: dto.reason })
      return dto
    }

    throw new HttpException('User not found', HttpStatus.NOT_FOUND)
  }
}
