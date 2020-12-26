import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { GeckTasksDocument } from './geck-tasks.schema';
import { GeckTask } from '../graphql'

@Injectable()
export class GeckTasksService {
  private geckTaskModel: Model<GeckTasksDocument>
  constructor() {}

  async create(input: GeckTask): Promise<void> {
    await this.geckTaskModel.create(input)
  }
}