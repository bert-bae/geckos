import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/user.dto';
import { UserInput } from './inputs/user.input';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => String)
  async hello() {
    return 'hello';
  }

  @Query(() => CreateUserDto)
  async getUser(@Args('id') id: string) {
    return this.userService.findOne(id);
  }

  @Mutation(() => CreateUserDto)
  async createUser(@Args('input') input: UserInput): Promise<CreateUserDto> {
    return this.userService.createUser(input);
  }
}
