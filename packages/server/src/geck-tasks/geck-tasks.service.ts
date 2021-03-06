import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { GeckTasksDocument, GeckTask } from './geck-tasks.schema';

// Information on updating nested object properties
// https://stackoverflow.com/questions/19603542/mongodb-update-data-in-nested-field
@Injectable()
export class GeckTasksService {
  constructor(
    @InjectModel('GeckTask') private geckTaskModel: Model<GeckTasksDocument>
  ) {}

  async findByProject(projectId: string, projection?: any): Promise<any> {
    return this.geckTaskModel.find({ projectId }, projection).exec();
  }

  async findById(id: string, projection?: any): Promise<any> {
    return this.geckTaskModel.findById(id, projection).exec();
  }

  async create(input: GeckTask): Promise<void> {
    await this.geckTaskModel.create(input);
  }

  async updateOne(_id: string, updateInput: Partial<GeckTask>): Promise<void> {
    await this.geckTaskModel
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
    await this.geckTaskModel
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
    await this.geckTaskModel.deleteOne(_id).exec();
  }
}
