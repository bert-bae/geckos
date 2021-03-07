import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectResolver } from './projects.resolver';
import { ProjectsService } from './projects.service';
import { ProjectSchema } from './projects.schema';
import { UserModule, UserService } from 'src/users';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Project', schema: ProjectSchema }]),
    forwardRef(() => UserModule)
  ],
  providers: [ProjectsService, ProjectResolver, UserService],
  exports: [
    MongooseModule.forFeature([{ name: 'Project', schema: ProjectSchema }])
  ]
})
export class ProjectModule {}
