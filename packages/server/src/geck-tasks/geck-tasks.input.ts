import { Field, InputType, ID} from '@nestjs/graphql';
import { GeckTaskData } from './geck-tasks.model'
import { GeckTaskTypes } from './geck-tasks.types'

@InputType()
export class CreateTask {
  @Field((type) => GeckTaskTypes)
  type: GeckTaskTypes
  
  @Field((type) => ID, { nullable: true })
  parentId?: string;

  @Field((type) => GeckTaskData)
  data: GeckTaskData;
}