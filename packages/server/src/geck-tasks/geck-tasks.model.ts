import { Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql';
import { GeckTaskTypes } from './geck-tasks.types'

registerEnumType(GeckTaskTypes, {
  name: 'GeckTaskTypes'
})

@ObjectType()
class GeckTaskData {
  @Field()
  title: string;

  @Field({ nullable: true })
  description: string;

  @Field(type => [String], { nullable: true })
  tags: string[];

  @Field()
  createdAt: string;

  @Field({ nullable: true })
  updatedAt: string;
}

@ObjectType()
export class GeckTask {
  @Field((type) => ID)
  id: string;

  @Field((type) => ID)
  creator: string;

  @Field((type) => GeckTaskTypes)
  type: GeckTaskTypes

  @Field((type) => GeckTaskData)
  data: GeckTaskData;

  @Field((type) => ID, { nullable: true })
  parentId: string;

  @Field((type) => [GeckTask], { nullable: true })
  children: GeckTask[];
}