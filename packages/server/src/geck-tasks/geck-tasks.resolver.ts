import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { v4 as uuidv4 } from 'uuid'
import { GeckTasksService } from './geck-tasks.service'
import { GeckTask } from './geck-tasks.model'
import { CreateTask } from './geck-tasks.input'

@Resolver((of: GeckTask) => GeckTask)
export class GeckTasksResolver {
  constructor(private readonly geckTasksService: GeckTasksService) {}

  @Query(returns => GeckTask)
  async getTask(@Args('id') id: string) {
    return {
      id,
      data: {
        description: 'some description',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }
    }
  }

  @Mutation(returns => GeckTask)
  async createTask(@Args('input') input: CreateTask) {
    const currentDate = new Date().toISOString()
    const geckTask = {
      id: uuidv4(),
      creator: 'dummyCreator',
      createdAt: currentDate,
      updatedAt: currentDate,
      ... input
    }
    await this.geckTasksService.create(geckTask)
    return geckTask
  }
}