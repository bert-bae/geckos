import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ModifiedTaskProperties {
  @Field(() => ID)
  rootTask?: string;

  @Field(() => [String])
  modifiedProperties?: string[];

  @Field(() => [String])
  modifiedTasks?: string[];

  @Field(() => [String])
  deletedTasks?: string[];
}
