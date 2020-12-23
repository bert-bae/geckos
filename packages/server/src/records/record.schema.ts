import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { RecordTypes, RecordData} from './record.types'
import { Document } from 'mongoose';

export type RecordDocument = Record & Document;

@Schema()
export class Record {
  @Prop()
  id: string;

  @Prop()
  creator: string;

  @Prop()
  type: RecordTypes

  @Prop()
  parentId: string;

  @Prop()
  children: string[];

  @Prop(raw({
    title: { type: String, required: true },
    description: { type: String },
    tags: { type: [String]},
    createdAt: { type: String },
    updatedAt: { type: String }
  }))
  data: RecordData
}

export const RecordSchema = SchemaFactory.createForClass(Record);
