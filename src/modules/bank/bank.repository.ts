import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Bank } from '../../db/entities/bank.model'

@Injectable()
export class BankRepository {
  constructor(@InjectModel('Bank') public bankModel: Model<Bank>) {}
}
