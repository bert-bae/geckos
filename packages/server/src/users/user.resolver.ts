import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent
} from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './user.model';
import { ProjectsService, Project } from 'src/projects';
import { CreateUserInput } from './user.input';

@Resolver(() => User)
export class UserResolver {
  constructor(
    private readonly userService: UserService,
    private readonly porjectsService: ProjectsService
  ) {}

  @Query(() => User)
  async getUser(@Args('id') id: string) {
    return this.userService.findOne(id);
  }

  @Mutation(() => User)
  async createUser(
    @Args('input') input: CreateUserInput
  ): Promise<Omit<User, 'projects'> & { projects: string[] }> {
    const result = await this.userService.createUser(input);
    return result;
  }

  @ResolveField(() => [Project])
  async projects(@Parent() user: User): Promise<Project[]> {
    const { _id } = user;
    return this.porjectsService.findAllByUserId(_id);
  }
}
