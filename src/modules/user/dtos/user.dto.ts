import { ApiProperty } from '@nestjs/swagger'
import { BankDto } from '../../bank/dtos/bank.dto'
import { Bank } from '../../../db/entities/bank.model'
import { IsArray, IsOptional, IsString } from 'class-validator'

export class UserDto {
  @ApiProperty({ example: 'John', description: 'The first name of the user' })
  @IsString()
  name: string

  @ApiProperty({ example: 'Doe', description: 'The last name of the user' })
  @IsString()
  surname: string

  @ApiProperty({ example: 'john.doe@example.com', description: 'The email address of the user' })
  @IsString()
  email: string

  @ApiProperty({ example: 'strongPassword123', description: "The user's password" })
  @IsString()
  password: string

  @ApiProperty({
    type: [BankDto],
    description: "References to the user's bank details"
  })
  @IsArray()
  @IsOptional()
  bank_details: Bank[]
}
