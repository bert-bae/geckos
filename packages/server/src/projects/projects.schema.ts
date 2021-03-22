import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
class ProjectAccessControl {
  @Prop()
  adminAccess: string[];

  @Prop()
  readAccess: string[];

  @Prop()
  writeAccess: string[];
}

@Schema()
export class ProjectEntity {
  @Prop()
  _id: string;

  @Prop()
  title: string;

  @Prop()
  description?: string;

  @Prop()
  creator: string;

  @Prop()
  accessControl: ProjectAccessControl;

  @Prop()
  createdAt: string;

  @Prop()
  updatedAt?: string;

  @Prop()
  deletedAt?: string;
}

export type ProjectsDocument = ProjectEntity & Document;

export const ProjectSchema = SchemaFactory.createForClass(ProjectEntity);
