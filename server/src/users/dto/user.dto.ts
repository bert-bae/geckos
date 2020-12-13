import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class CreateUserDto {
  @Field(() => ID)
  id: string;

  @Field()
  readonly email: string;
}