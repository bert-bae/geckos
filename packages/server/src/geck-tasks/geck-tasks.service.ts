import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { GeckTasksDocument } from './geck-tasks.schema';
import { GeckTask } from './geck-tasks.model'
import { UpdateTaskInput } from './geck-tasks.input'

// Information on updating nested object properties
// https://stackoverflow.com/questions/19603542/mongodb-update-data-in-nested-field
@Injectable()
export class GeckTasksService {
  constructor(@InjectModel('GeckTask') private geckTaskModel: Model<GeckTasksDocument>) {}

  async findById(id: string, projection?: any): Promise<any> {
    return this.geckTaskModel.findById(id, projection)
  }

  async create(input: GeckTask): Promise<void> {
    await this.geckTaskModel.create(input)
  }

  async updateOne(_id: string, updateInput: UpdateTaskInput): Promise<void> {
    await this.geckTaskModel.updateOne({_id}, {
      $set: {
        ...updateInput,
        updatedAt: new Date().toISOString()
      }
    })
  }

  async softDeleteOne(_id: string): Promise<void> {
    await this.geckTaskModel.updateOne({_id}, {
      $set: {
        deletedAt: new Date().toISOString()
      }
    })
  }

  async deleteOne(_id: string): Promise<void> {
    await this.geckTaskModel.deleteOne(_id)
  }
}