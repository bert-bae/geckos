import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { GeckTaskData, GeckTaskTypes } from './geck-tasks.types';
import { Document } from 'mongoose';

export type GeckTasksDocument = GeckTask & Document;

@Schema()
export class GeckTask {
  @Prop()
  _id: string;

  @Prop({ required: true, index: true })
  projectId: string;

  @Prop()
  creator: string;

  @Prop()
  type: GeckTaskTypes;

  @Prop()
  parentId?: string;

  @Prop()
  children?: string[];

  @Prop(
    raw({
      title: { type: String },
      description: { type: String },
      tags: { type: [String] }
    })
  )
  data?: GeckTaskData;

  @Prop()
  createdAt: string;

  @Prop()
  updatedAt?: string;

  @Prop()
  deletedAt?: string;
}

export const GeckTaskSchema = SchemaFactory.createForClass(GeckTask);
