import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class CreateUserDto {
  @Field(() => ID)
  _id: string;

  @Field()
  readonly email: string;
}
