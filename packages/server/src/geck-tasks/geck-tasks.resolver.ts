import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { v4 as uuidv4 } from 'uuid';
import { GeckTask } from './geck-tasks.model';
import { GeckTasksService } from './geck-tasks.service';
import { ModifiedTaskProperties } from './geck-tasks.dto';
import { CreateTaskInput, UpdateTaskInput } from './geck-tasks.input';

@Resolver((of: GeckTask) => GeckTask)
export class GeckTasksResolver {
  constructor(private readonly geckTasksService: GeckTasksService) {}

  @Query(() => GeckTask)
  async getTask(@Args('id') id: string) {
    return this.geckTasksService.findById(id)
  }

  @Mutation(() => GeckTask)
  async createTask(@Args('input') input: CreateTaskInput) {
    const currentDate = new Date().toISOString()
    const geckTask = {
      _id: uuidv4(),
      creator: 'dummyCreator',
      createdAt: currentDate,
      updatedAt: currentDate,
      ... input
    }
    await this.geckTasksService.create(geckTask)
    return geckTask
  }

  @Mutation(() => ModifiedTaskProperties)
  async updateTask(
    @Args('id') id: string,
    @Args('updateInput') updateInput: UpdateTaskInput
  ) {
    await this.geckTasksService.updateOne(id, updateInput)
    return { 
      rootTask: id,
      modifiedTasks: [id],
      modifiedProperties: Object.keys(updateInput)
    }
  }

  @Mutation(() => ModifiedTaskProperties)
  async softDeleteTask(@Args('id') id: string) {
    const taskChildren = (await this.getTask(id)).children

    await Promise.all([
      await this.geckTasksService.softDeleteOne(id),
      ...taskChildren.map(async (childId: string) => {
        await this.geckTasksService.softDeleteOne(childId)
      })
    ])

    return {
      rootTask: id,
      modifiedProperties: ['deletedAt'],
      deletedTasks: [id, ...taskChildren]
    }
  }
}