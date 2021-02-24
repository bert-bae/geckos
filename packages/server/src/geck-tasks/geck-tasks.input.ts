import { Field, InputType, ID } from '@nestjs/graphql';
import { GeckTaskData } from './geck-tasks.model';
import { GeckTaskTypes } from './geck-tasks.types';

@InputType()
export class CreateTaskInput {
  @Field(() => GeckTaskTypes)
  type: GeckTaskTypes;

  @Field(() => ID)
  projectId: string;

  @Field(() => ID, { nullable: true })
  parentId?: string;

  @Field(() => GeckTaskData)
  data: GeckTaskData;
}

@InputType()
export class UpdateTaskInput {
  @Field(() => GeckTaskTypes, { nullable: true })
  type?: GeckTaskTypes;

  @Field({ nullable: true })
  parentId?: string;

  @Field(() => GeckTaskData, { nullable: true })
  data?: GeckTaskData;
}
