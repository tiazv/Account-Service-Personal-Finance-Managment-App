import { Module, OnModuleInit } from '@nestjs/common';
import * as mongoose from 'mongoose';

@Module({})
export class DatabaseModule implements OnModuleInit {
  async onModuleInit() {
    try {
      await mongoose.connect(`${process.env.MONGODB_URI}`);
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
    }
  }
}
