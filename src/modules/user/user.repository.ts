import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { FilterQuery, Model } from 'mongoose'
import { User } from '../../db/entities/user.model'

@Injectable()
export class UserRepository {
  constructor(@InjectModel('User') public userModel: Model<User>) {}

  async create(user: User): Promise<User> {
    try {
      return await new this.userModel(user).save()
    } catch {
      throw new NotFoundException('Could not create user.')
    }
  }

  async findOne(userFilterQuery: FilterQuery<User>): Promise<User> {
    try {
      return await this.userModel.findOne(userFilterQuery).populate('bank_details').exec()
    } catch {
      throw new NotFoundException('Could not get the user.')
    }
  }
}
