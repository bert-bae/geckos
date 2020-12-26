import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { v4 as uuidv4 } from 'uuid'
import { GeckTasksService } from './geck-tasks.service'
import { GeckTask } from './geck-tasks.model'
import { GeckTask as GeckTaskDefinition } from '../graphql'

@Resolver((of: GeckTask) => GeckTask)
export class GeckTasksResolver {
  constructor(private readonly geckTasksService: GeckTasksService) {}

  @Query(returns => GeckTask)
  async GetTask(@Args('id') id: string) {
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
  async CreateTask(input: Omit<GeckTaskDefinition, 'id' | 'creator' | 'children'>) {
    const currentDate = new Date().toISOString()
    const geckTask = {
      id: uuidv4(),
      creator: 'dummyCreator',
      createdAt: currentDate,
      updatedAt: currentDate,
      ... input
    }
    await this.geckTasksService.create(geckTask)
  }
}