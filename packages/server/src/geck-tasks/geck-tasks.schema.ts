import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { GeckTaskData, GeckTaskTypes} from './geck-tasks.types'
import { Document } from 'mongoose';

export type GeckTasksDocument = GeckTask & Document;

@Schema()
export class GeckTask {
  @Prop()
  id: string;

  @Prop()
  creator: string;

  @Prop()
  type: GeckTaskTypes

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
  data: GeckTaskData
}

export const GeckTaskSchema = SchemaFactory.createForClass(GeckTask);
