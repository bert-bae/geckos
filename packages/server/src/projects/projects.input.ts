import { Field, InputType, ID } from '@nestjs/graphql';
import { ProjectAccessControl } from './projects.model';

@InputType()
export class CreateProjectInput {
  @Field()
  title: string;

  @Field(() => ID, { nullable: true })
  description?: string;
}

@InputType()
export class UpdateProjectInput {
  @Field()
  title: string;

  @Field(() => ID, { nullable: true })
  description?: string;

  @Field(() => ProjectAccessControl)
  accessControl?: ProjectAccessControl;
}
