import { Injectable } from '@nestjs/common'
import { BankRepository } from './bank.repository'

@Injectable()
export class BankService {
  constructor(private readonly bankRepository: BankRepository) {}
}
