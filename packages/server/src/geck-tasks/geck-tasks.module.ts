import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GeckTasksResolver } from './geck-tasks.resolver';
import { GeckTasksService } from './geck-tasks.service';
import { GeckTaskSchema } from './geck-tasks.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'GeckTask', schema: GeckTaskSchema }])
  ],
  providers: [GeckTasksService, GeckTasksResolver]
})
export class GeckTasksModule {}
