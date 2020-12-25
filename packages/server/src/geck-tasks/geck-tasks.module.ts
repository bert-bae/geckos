import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GeckTasksResolver } from './geck-tasks.resolver';
import { GeckTaskSchema } from './geck-tasks.schema'

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Record', schema: GeckTaskSchema }])],
  providers: [GeckTasksResolver],
})
export class GeckTasksModule {}
