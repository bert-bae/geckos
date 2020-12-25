import { Resolver, Query, Args } from '@nestjs/graphql';
import { GeckTask } from './geck-tasks.model'

@Resolver((of: GeckTask) => GeckTask)
export class GeckTasksResolver {
  constructor () {}

  @Query(returns => GeckTask)
  async GetTask(@Args('id') id: string) {
    console.log(id)
    return {
      id: 'someId',
      data: {
        description: 'some description',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }
    }
  }
}