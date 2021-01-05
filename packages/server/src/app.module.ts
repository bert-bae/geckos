import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';

import { UserModule } from './users/user.module';
import { GeckTasksModule } from './geck-tasks/geck-tasks.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: process.env.MONGODB_URL
      })
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts')
      }
    }),
    UserModule,
    GeckTasksModule
  ]
})
export class AppModule {}
