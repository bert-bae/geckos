import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectResolver } from './projects.resolver';
import { ProjectsService } from './projects.service';
import { ProjectSchema } from './projects.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Project', schema: ProjectSchema }])
  ],
  providers: [ProjectsService, ProjectResolver]
})
export class ProjectModule {}
