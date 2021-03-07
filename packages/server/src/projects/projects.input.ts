import { Field, InputType } from '@nestjs/graphql';
import { ProjectAccessControl } from './projects.model';

@InputType()
export class CreateProjectInput {
  @Field()
  title: string;

  @Field({ nullable: true })
  description?: string;
}

@InputType()
export class UpdateProjectInput {
  @Field()
  title: string;

  @Field({ nullable: true })
  description?: string;

  @Field(() => ProjectAccessControl)
  accessControl?: ProjectAccessControl;
}
