import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Project } from 'src/projects';

@ObjectType()
export class User {
  @Field(() => ID)
  _id: string;

  @Field()
  readonly email: string;

  @Field(() => [Project], { nullable: true })
  projects: Project[];
}
