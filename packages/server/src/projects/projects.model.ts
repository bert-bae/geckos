import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@ObjectType('ProjectAccessControlObject')
@InputType('ProjectAccessControlInput')
export class ProjectAccessControl {
  @Field(() => [String])
  adminAccess: string[];

  @Field(() => [String])
  readAccess: string[];

  @Field(() => [String])
  writeAccess: string[];
}

@ObjectType()
export class Project {
  @Field(() => ID)
  _id: string;

  @Field()
  title: string;

  @Field({ nullable: true })
  description?: string;

  @Field(() => ID)
  creator: string;

  @Field()
  createdAt: string;

  @Field({ nullable: true })
  updatedAt?: string;

  @Field({ nullable: true })
  deletedAt?: string;

  @Field(() => ProjectAccessControl)
  accessControl: ProjectAccessControl;
}
