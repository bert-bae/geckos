import { Schema, SchemaFactory, raw, Prop } from '@nestjs/mongoose';
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
export class Project {
  @Prop()
  _id: string;

  @Prop()
  title: string;

  @Prop()
  description?: string;

  @Prop()
  creator: string;

  @Prop(ProjectAccessControl)
  accessControl: ProjectAccessControl;

  @Prop()
  createdAt: string;

  @Prop()
  updatedAt?: string;

  @Prop()
  deletedAt?: string;
}

export type ProjectsDocument = Project & Document;

export const ProjectSchema = SchemaFactory.createForClass(Project);
