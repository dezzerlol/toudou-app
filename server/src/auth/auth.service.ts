import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { CreateUserDto } from 'src/users/dto/create-user.dto'
import { UsersService } from 'src/users/users.service'
import * as bcrypt from 'bcryptjs'
import { User } from 'src/users/users.model'

@Injectable()
export class AuthService {
  constructor(private userService: UsersService, private jwtService: JwtService) {}

  async login(dto: CreateUserDto) {
    const user = await this.validateUser(dto)

    return this.generateToken(user)
  }

  async register(dto: CreateUserDto) {
    const exists = await this.userService.getByEmail(dto.email)

    if (exists) {
      throw new HttpException('User with this email already exists', HttpStatus.BAD_REQUEST)
    }
    const hashPassword = await bcrypt.hash(dto.password, 5)

    const user = await this.userService.createUser({ ...dto, password: hashPassword })
    return { status: 'ok' }
  }

  private async generateToken(user: User) {
    const payload = { email: user.email, id: user.id, roles: user.roles }

    return {
      token: this.jwtService.sign(payload),
    }
  }

  private async validateUser(dto: CreateUserDto) {
    const user = await this.userService.getByEmail(dto.email)

    if (!user) {
      throw new UnauthorizedException({ message: 'User not found' })
    }

    const passwordEquals = await bcrypt.compare(dto.password, user.password)
    if (user && passwordEquals) {
      return user
    } else {
      throw new UnauthorizedException({ message: 'Email or password incorrect' })
    }
  }
}
