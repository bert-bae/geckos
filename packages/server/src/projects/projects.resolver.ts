import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { v4 as uuidv4 } from 'uuid';
import { Project } from './projects.model';
import { ProjectsService } from './projects.service';
// import { GeckTasksService } from '../geck-tasks//geck-tasks.service';
import { ModifiedProjectProperties } from './projects.dto';
import { CreateProjectInput, UpdateProjectInput } from './projects.input';

@Resolver((of: Project) => Project)
export class ProjectResolver {
  constructor(
    private readonly projectsService: ProjectsService
  ) // private readonly geckTasksService: GeckTasksService
  {}

  @Query(() => Project)
  async getProject(@Args('id') id: string) {
    return this.projectsService.findById(id);
  }

  @Mutation(() => Project)
  async createProject(@Args('input') input: CreateProjectInput) {
    const currentDate = new Date().toISOString();
    const newProjectId = uuidv4();
    const project: Project = {
      _id: newProjectId,
      title: input.title,
      description: input.description,
      creator: 'dummyCreator',
      createdAt: currentDate,
      updatedAt: currentDate,
      accessControl: {
        adminAccess: ['dummyCreator'],
        readAccess: [],
        writeAccess: []
      }
    };
    await this.projectsService.create(project);
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
