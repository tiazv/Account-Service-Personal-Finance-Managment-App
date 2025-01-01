import { ApiProperty } from '@nestjs/swagger'
import { BankDto } from '../../bank/dtos/bank.dto'

export class UserResponseDto {
  @ApiProperty({ example: '12345678', description: 'The unique ID of the user' })
  id: string

  @ApiProperty({ example: 'John', description: 'The first name of the user' })
  name: string

  @ApiProperty({ example: 'Doe', description: 'The last name of the user' })
  surname: string

  @ApiProperty({
    example: 'john.doe@example.com',
    description: 'The email address of the user'
  })
  email: string

  @ApiProperty({
    type: [BankDto],
    description: 'Details of the banks linked to the user'
  })
  bank_details: BankDto[]

  toObject() {
    return {
      id: this.id,
      name: this.name,
      surname: this.surname,
      email: this.email,
      bank_details: this.bank_details
    }
  }
}
