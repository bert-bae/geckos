import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RecordResolver } from './record.resolver';
import { RecordSchema } from './record.schema'

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Record', schema: RecordSchema }])],
  providers: [RecordResolver],
})
export class RecordModule {}
