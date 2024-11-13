import { Body, Controller, Post } from '@nestjs/common'
import { UserService } from './user.service'
import { User } from '../../db/entities/user.model'
import { CreateUpdateUserDto } from './create-update-user.dto'

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async addUser(@Body() createUserDto: CreateUpdateUserDto): Promise<User> {
    return await this.userService.createUser(createUserDto)
  }
}
