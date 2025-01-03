import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { UserSchema } from '../../db/entities/user.model'
import { UserRepository } from './user.repository'
import { UserService } from './user.service'
import { UserController } from './user.controller'

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  controllers: [UserController],
  providers: [UserService, UserRepository]
})
export class UserModule {}
