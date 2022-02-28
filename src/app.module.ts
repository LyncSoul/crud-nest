require('dotenv').config();

import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

const mongoUser = process.env.MONGO_USER;
const mongoPassword = process.env.MONGO_PASSWORD;
const mongoProject = process.env.MONGO_PROJECT;

@Module({
  imports: [MongooseModule.forRoot(`mongodb+srv://${mongoUser}:${mongoPassword}@${mongoProject}.mongodb.net/test`), UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
