import { Injectable, NotFoundException } from '@nestjs/common'
import { UserRepository } from './user.repository'
import { User } from '../../db/entities/user.model'
import { CreateUpdateUserDto } from './create-update-user.dto'

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async createUser(userData: CreateUpdateUserDto): Promise<User> {
    try {
      return await this.userRepository.create(userData)
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message)
      }
    }
  }
}
