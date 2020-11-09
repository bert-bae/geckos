import { InputType, Field} from '@nestjs/graphql';

@InputType()
export class UserInput {
  @Field()
  readonly email: string;

  @Field()
  readonly password: string;
}