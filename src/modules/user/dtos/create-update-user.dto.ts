import { ApiProperty } from '@nestjs/swagger'
import { BankDto } from '../../bank/dtos/bank.dto'

export class CreateUpdateUserDto {
  @ApiProperty({ example: 'John', description: 'The first name of the user' })
  name: string

  @ApiProperty({ example: 'Doe', description: 'The last name of the user' })
  surname: string

  @ApiProperty({
    example: 'john.doe@example.com',
    description: 'The email address of the user',
    format: 'email'
  })
  email: string

  @ApiProperty({
    example: 'strongPassword123',
    description: "The user's password",
    minLength: 8
  })
  password: string

  @ApiProperty({
    type: [BankDto],
    description: "References to the user's bank details"
  })
  bank_details: BankDto[]
}
