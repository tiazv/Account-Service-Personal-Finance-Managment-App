import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { User } from '../../db/entities/user.model'

@Injectable()
export class UserRepository {
  constructor(@InjectModel('User') public userModel: Model<User>) {}
}
