import { ApiProperty } from '@nestjs/swagger'

export class BankDto {
  @ApiProperty({ example: 'National Bank', description: 'The name of the bank' })
  bank_name: string

  @ApiProperty({ example: 'John Doe', description: 'The name of the account holder' })
  account_name: string

  @ApiProperty({ example: '1234567890', description: 'The account number of the user' })
  account_number: string

  @ApiProperty({
    example: 'SI56123456789012345',
    description: 'The International Bank Account Number (IBAN)',
    format: 'iban'
  })
  iban: string

  @ApiProperty({ example: true, description: 'The status of the bank account (active/inactive)' })
  status: boolean
}
