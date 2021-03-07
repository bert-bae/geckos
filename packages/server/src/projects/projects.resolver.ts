import { Resolver, Query, Args, Mutation, Context } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { Project } from './projects.model';
import { ProjectsService } from './projects.service';
import { ModifiedProjectProperties } from './projects.dto';
import { CreateProjectInput, UpdateProjectInput } from './projects.input';
import { UserService, UserGuard, UserDocument } from 'src/users';

@Resolver((of: Project) => Project)
export class ProjectResolver {
  constructor(
    private readonly projectsService: ProjectsService,
    private readonly usersService: UserService
  ) {}

  @Query(() => Project)
  @UseGuards(new UserGuard())
  async getProject(
    @Args('id') id: string,
    @Context('user') user: UserDocument
  ) {
    return this.projectsService.findById(id);
  }

  @Query(() => [Project])
  @UseGuards(new UserGuard())
  async getUsersProjects(@Context('user') userCtx: UserDocument) {
    const user = await this.usersService.findOne(userCtx._id);
  }

  @Mutation(() => Project)
  @UseGuards(new UserGuard())
  async createProject(
    @Args('input') input: CreateProjectInput,
    @Context('user') user: UserDocument
  ) {
    const currentDate = new Date().toISOString();
    const newProjectId = uuidv4();
    const project: Project = {
      _id: newProjectId,
      title: input.title,
      description: input.description,
      creator: user._id,
      createdAt: currentDate,
      updatedAt: currentDate,
      accessControl: {
        adminAccess: [user._id],
        readAccess: [],
        writeAccess: []
      }
    };
    await this.projectsService.create(project, user._id);
    return project;
  }

  @Mutation(() => ModifiedProjectProperties)
  async updateTask(
    @Args('id') id: string,
    @Args('updateInput') updateInput: UpdateProjectInput
  ) {
    await this.projectsService.updateOne(id, updateInput);
    return {
      _id: id,
      modifiedProperties: Object.keys(updateInput)
    };
  }

  // TODO: If a project is soft deleted, soft delete all tasks that belong to the project
  // @Mutation(() => ModifiedProjectProperties)
  // async softDeleteTask(@Args('id') id: string) {}
}
