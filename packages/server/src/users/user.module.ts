import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';
import { UserSchema } from './user.schema';
import { ProjectModule, ProjectsService } from 'src/projects';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    forwardRef(() => ProjectModule)
  ],
  providers: [UserResolver, UserService, ProjectsService],
  exports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])]
})
export class UserModule {}
