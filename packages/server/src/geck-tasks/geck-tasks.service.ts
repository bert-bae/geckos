import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { GeckTasksDocument } from './geck-tasks.schema';
import { GeckTask } from '../graphql'

@Injectable()
export class GeckTasksService {
  constructor(@InjectModel('GeckTask') private geckTaskModel: Model<GeckTasksDocument>) {}

  async create(input: GeckTask): Promise<void> {
    await this.geckTaskModel.create(input)
  }
}