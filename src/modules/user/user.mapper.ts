/*
import { User } from "../../db/entities/user.model"
import { CreateUpdateUserDto } from "./dtos/create-update-user.dto"
import { UserResponseDto } from "./dtos/user-response.dto"
import { UserDto } from "./dtos/user.dto"

// Map Create/Update DTO to Core UserDto
export const mapCreateUserDtoToUserDto = (dto: CreateUpdateUserDto): UserDto => ({
  name: dto.name,
  email: dto.email
})

// Map User Entity to Core UserDto
export const mapUserEntityToUserDto = (user: User): UserDto => ({
  id: user._id,
  name: user.name,
  email: user.email
})

// Map UserDto to UserResponseDto (For API Responses)
export const mapUserDtoToResponseDto = (user: UserDto): UserResponseDto => ({
  id: user.id,
  name: user.name,
  email: user.email
})
*/
