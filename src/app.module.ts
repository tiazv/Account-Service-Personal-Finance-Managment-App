import { Module, NestModule } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ConfigModule } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'
import { BankModule } from './modules/bank/bank.module'
import { UserModule } from './modules/user/user.module'

@Module({
  imports: [ConfigModule.forRoot(), MongooseModule.forRoot(`${process.env.MONGODB_URI}`), UserModule, BankModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule implements NestModule {
  configure() {}
}
