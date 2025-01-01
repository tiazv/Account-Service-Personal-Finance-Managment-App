import { Injectable } from '@nestjs/common'
import { UserRepository } from './user.repository'

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}
  /*
  async createUser(userData: CreateUpdateUserDto): Promise<User> {
    try {
      return await this.userRepository.create(userData)
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message)
      }
      throw error
    }
  }

  async createUserNov(userData: CreateUpdateUserDto): Promise<UserResponseDto> {
    const user = mapCreateUserDtoToUser(userData)
    const createdUser = await this.userRepository.createNov(user)
    return this.toUserResponseDto(createdUser)
  }

  async getAllUsers(): Promise<UserResponseDto[]> {
    try {
      const users = await this.userRepository.find({})
      return users.map(this.toUserResponseDto)
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message)
      }
      throw error // Re-throw other unexpected errors
    }
  }

  async getSingleUser(userId: string): Promise<UserResponseDto> {
    try {
      const user = await this.userRepository.findOne({ _id: userId })
      if (!user) {
        throw new NotFoundException(`User with ID ${userId} not found.`)
      }
      return this.toUserResponseDto(user)
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message)
      }
      throw error // Re-throw other unexpected errors
    }
  }

  private toUserResponseDto(user: User): UserResponseDto {
    return {
      id: user._id.toString(),
      name: user.name,
      surname: user.surname,
      email: user.email,
      bank_details: user.bank_details.map((bank) => ({
        bank_name: bank.bank_name,
        account_name: bank.account_name,
        account_number: bank.account_number,
        iban: bank.iban,
        status: bank.status
      })),
      toObject: function () {
        return { ...this }
      }
    }
  }

  toUserEntity(dto: CreateUpdateUserDto): User {
    const user = new User()
    user.name = dto.name
    user.surname = dto.surname
    user.email = dto.email
    user.bank_details = dto.bank_details
    return user
  }
  */
}
