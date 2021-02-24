import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ModifiedProjectProperties {
  @Field(() => ID)
  _id?: string;

  @Field(() => [String])
  modifiedProperties?: string[];

  @Field(() => [String])
  deletedTasks?: string[];
}
