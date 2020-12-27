import { Field, ID, InputType, ObjectType, registerEnumType } from '@nestjs/graphql';
import { GeckTaskTypes } from './geck-tasks.types'

registerEnumType(GeckTaskTypes, {
  name: 'GeckTaskTypes'
})

@ObjectType('GeckTaskDataObject')
@InputType('GeckTaskDataInput')
export class GeckTaskData {
  @Field()
  title: string;

  @Field({ nullable: true })
  description: string;

  @Field(type => [String], { nullable: true })
  tags: string[];
}

@ObjectType()
export class GeckTask {
  @Field((type) => ID)
  _id: string;

  @Field((type) => ID)
  creator: string;

  @Field((type) => GeckTaskTypes)
  type: GeckTaskTypes

  @Field((type) => GeckTaskData)
  data: GeckTaskData;

  @Field((type) => ID, { nullable: true })
  parentId: string;

  @Field((type) => [String], { nullable: true })
  children: string[];

  @Field()
  createdAt: string;

  @Field()
  updatedAt: string;
}