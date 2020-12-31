import { Field, InputType, ID} from '@nestjs/graphql';
import { GeckTaskData } from './geck-tasks.model';
import { GeckTaskTypes } from './geck-tasks.types';

@InputType()
export class CreateTaskInput {
  @Field((type) => GeckTaskTypes)
  type: GeckTaskTypes;
  
  @Field((type) => ID, { nullable: true })
  parentId?: string;

  @Field((type) => GeckTaskData)
  data: GeckTaskData;
}

@InputType()
export class UpdateTaskInput {
  @Field(() => GeckTaskTypes, { nullable: true })
  type?: GeckTaskTypes;

  @Field({ nullable: true })
  parentId?: string

  @Field(() => [String], { nullable: true })
  children?: string[]

  @Field(() => GeckTaskData, { nullable: true })
  data?: GeckTaskData
}