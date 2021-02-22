import {
  Field,
  ID,
  InputType,
  ObjectType,
  registerEnumType
} from '@nestjs/graphql';
import { GeckTaskTypes } from './geck-tasks.types';

registerEnumType(GeckTaskTypes, {
  name: 'GeckTaskTypes'
});

@ObjectType('GeckTaskDataObject')
@InputType('GeckTaskDataInput')
export class GeckTaskData {
  @Field()
  title: string;

  @Field({ nullable: true })
  description: string;

  @Field(() => [String], { nullable: true })
  tags: string[];
}

@ObjectType()
export class GeckTask {
  @Field(() => ID)
  _id: string;

  @Field(() => ID)
  creator: string;

  @Field(() => GeckTaskTypes)
  type: GeckTaskTypes;

  @Field(() => GeckTaskData)
  data?: GeckTaskData;

  @Field(() => ID, { nullable: true })
  parentId?: string;

  @Field(() => [GeckTask])
  children?: GeckTask[];

  @Field()
  createdAt: string;

  @Field()
  updatedAt?: string;

  @Field()
  deletedAt?: string;
}
