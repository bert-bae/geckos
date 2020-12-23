import { Resolver, Query, Args } from '@nestjs/graphql';
import { Record } from './record.model'

@Resolver((of: Record) => Record)
export class RecordResolver {
  constructor () {}

  @Query(returns => Record)
  async GetRecord(@Args('id') id: string) {
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