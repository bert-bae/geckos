import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Project {
  @Field(() => ID)
  _id: string;

  @Field()
  title: string;

  @Field({ nullable: true })
  description?: string;

  @Field(() => ID)
  owner: string;

  @Field()
  createdAt: string;

  @Field({ nullable: true })
  updatedAt?: string;

  @Field({ nullable: true })
  deletedAt?: string;
}
