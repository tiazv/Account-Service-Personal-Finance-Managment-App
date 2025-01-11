import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { FilterQuery, Model, UpdateQuery } from 'mongoose'
import { User } from '../../db/entities/user.model'
import { CreateUpdateUserDto } from './dtos/create-update-user.dto'

@Injectable()
export class UserRepository {
  constructor(@InjectModel('User') public userModel: Model<User>) {}

  async create(user: Partial<User>): Promise<User> {
    try {
      return await new this.userModel(user).save()
    } catch {
      throw new NotFoundException('Could not create user.')
    }
  }

  async find(usersFilterQuery: FilterQuery<User>): Promise<User[]> {
    try {
      return await this.userModel.find(usersFilterQuery).populate('bank_details').exec()
    } catch {
      throw new NotFoundException('Could not find the users.')
    }
  }

  async findOne(userFilterQuery: FilterQuery<User>): Promise<User> {
    try {
      return await this.userModel.findOne(userFilterQuery).populate('bank_details').exec()
    } catch {
      throw new NotFoundException('Could not get the user.')
    }
  }

  async findOneByClerkId(userFilterQuery: FilterQuery<User>): Promise<User> {
    try {
      return await this.userModel.findOne(userFilterQuery).populate('bank_details').exec()
    } catch {
      throw new NotFoundException('Could not get the user.')
    }
  }

  async update(userId: string, updateData: UpdateQuery<User>): Promise<User> {
    try {
      const updatedUser = await this.userModel.findByIdAndUpdate(userId, updateData, { new: true }).exec()
      if (!updatedUser) {
        throw new NotFoundException('User not found.')
      }
      return updatedUser
    } catch (error) {
      throw new Error('Failed to update user: ' + error.message)
    }
  }

  async updateByClerkId(clerkId: string, updateData: CreateUpdateUserDto): Promise<User> {
    try {
      const updatedUser = await this.userModel.findOneAndUpdate({ clerk_id: clerkId }, updateData, { new: true }).exec()
      if (!updatedUser) {
        throw new NotFoundException('User with the given Clerk ID not found.')
      }
      return updatedUser
    } catch (error) {
      throw new Error('Failed to update user: ' + error.message)
    }
  }

  async delete(userId: string): Promise<boolean> {
    try {
      const deletedUser = await this.userModel.findByIdAndDelete(userId).exec()
      if (!deletedUser) {
        throw new NotFoundException('User not found.')
      }
      return true
    } catch (error) {
      throw new Error('Failed to delete user: ' + error.message)
    }
  }

  async deleteByClerkId(clerkId: string): Promise<boolean> {
    try {
      const deletedUser = await this.userModel.findOneAndDelete({ clerk_id: clerkId }).exec()
      if (!deletedUser) {
        throw new NotFoundException('User with the given Clerk ID not found.')
      }
      return true
    } catch (error) {
      throw new Error('Failed to delete user: ' + error.message)
    }
  }

  async addMoneyByClerkId(clerkId: string, amount: number): Promise<User> {
    const updatedUser = await this.userModel
      .findOneAndUpdate({ clerk_id: clerkId }, { $inc: { total: amount } }, { new: true })
      .exec()

    if (!updatedUser) {
      throw new NotFoundException('User with the given Clerk ID not found.')
    }

    return updatedUser
  }

  async removeMoneyByClerkId(clerkId: string, amount: number): Promise<User> {
    const user = await this.userModel.findOne({ clerk_id: clerkId }).exec()

    if (!user) {
      throw new NotFoundException('User with the given Clerk ID not found.')
    }

    if (user.total < amount) {
      throw new Error('Insufficient funds.')
    }

    const updatedUser = await this.userModel
      .findOneAndUpdate({ clerk_id: clerkId }, { $inc: { total: -amount } }, { new: true })
      .exec()

    return updatedUser
  }
}
