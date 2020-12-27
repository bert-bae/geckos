import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ModifiedTaskProperties {
  @Field(() => ID)
  rootTask?: string

  @Field((type) => [String])
  modifiedProperties?: string[]

  @Field((type) => [String])
  modifiedTasks?: string[]

  @Field((type) => [String])
  deletedTasks?: string[]
}