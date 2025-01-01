import { ApiProperty } from '@nestjs/swagger'
import { BankDto } from '../../bank/dtos/bank.dto'
import { Bank } from '../../../db/entities/bank.model'

export class UserDto {
  @ApiProperty({ example: 'John', description: 'The first name of the user' })
  name: string

  @ApiProperty({ example: 'Doe', description: 'The last name of the user' })
  surname: string

  @ApiProperty({ example: 'john.doe@example.com', description: 'The email address of the user' })
  email: string

  @ApiProperty({ example: 'strongPassword123', description: "The user's password" })
  password: string

  @ApiProperty({
    type: [BankDto],
    description: "References to the user's bank details"
  })
  bank_details: Bank[]
}
