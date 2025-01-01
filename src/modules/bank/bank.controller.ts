import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { BankService } from './bank.service'
import { ApiOperation, ApiResponse } from '@nestjs/swagger'
import { CreateUpdateBankDto } from './dtos/create-update-bank.dto'
import { BankDto } from './dtos/bank.dto'

@Controller('/bank')
export class BankController {
  constructor(private readonly bankService: BankService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new bank' })
  @ApiResponse({ status: 201, description: 'Bank created successfully.', type: BankDto })
  @ApiResponse({ status: 400, description: 'Invalid input.' })
  async createBank(@Body() createBankDto: CreateUpdateBankDto): Promise<BankDto> {
    return await this.bankService.createBank(createBankDto)
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retrieve a single bank by ID' })
  @ApiResponse({ status: 200, description: 'Bank details.', type: BankDto })
  @ApiResponse({ status: 404, description: 'Bank not found.' })
  async getBankById(@Param('id') id: string): Promise<BankDto> {
    return await this.bankService.getSingleBank(id)
  }

  @Get()
  @ApiOperation({ summary: 'Retrieve all banks' })
  @ApiResponse({ status: 200, description: 'List of banks.', type: [BankDto] })
  async getAllBanks(): Promise<BankDto[]> {
    return await this.bankService.getAllBanks()
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a bank by ID' })
  @ApiResponse({ status: 200, description: 'Bank updated successfully.', type: BankDto })
  @ApiResponse({ status: 404, description: 'Bank not found.' })
  async updateBank(@Param('id') id: string, @Body() updateBankDto: CreateUpdateBankDto): Promise<BankDto> {
    return await this.bankService.updateBank(id, updateBankDto)
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a bank by ID' })
  @ApiResponse({ status: 200, description: 'Bank deleted successfully.', type: Boolean })
  @ApiResponse({ status: 404, description: 'Bank not found.' })
  async deleteBank(@Param('id') id: string): Promise<boolean> {
    return await this.bankService.deleteBank(id)
  }
}
