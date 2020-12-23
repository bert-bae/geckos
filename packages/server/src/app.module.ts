import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule } from '@nestjs/config';
import config from './config/configurations'

import { UserModule } from './users/user.module';
import { RecordModule } from './records/record.module'

console.log(process.env.MONGODB_URL);
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config]
    }),
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: process.env.MONGODB_URL,
      }),
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql'
    }),
    UserModule,
    RecordModule,
  ]
})
export class AppModule {}
