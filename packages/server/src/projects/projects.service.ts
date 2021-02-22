import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { ProjectsDocument, Project } from './projects.schema';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectModel('Project') private projectModel: Model<ProjectsDocument>
  ) {}

  async findById(id: string, projection?: any): Promise<Project> {
    return this.projectModel.findById(id, projection).exec();
  }

  async create(input: Project): Promise<void> {
    await this.projectModel.create(input);
  }

  async updateOne(_id: string, updateInput: Partial<Project>): Promise<void> {
    await this.projectModel
      .updateOne(
        { _id },
        {
          $set: {
            ...updateInput,
            updatedAt: new Date().toISOString()
          }
        }
      )
      .exec();
  }

  async softDeleteOne(_id: string): Promise<void> {
    await this.projectModel
      .updateOne(
        { _id },
        {
          $set: {
            deletedAt: new Date().toISOString()
          }
        }
      )
      .exec();
  }

  async deleteOne(_id: string): Promise<void> {
    await this.projectModel.deleteOne(_id).exec();
  }
}
