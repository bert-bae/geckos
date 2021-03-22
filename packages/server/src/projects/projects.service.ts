import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { ProjectsDocument, ProjectEntity } from './projects.schema';
import { UserDocument } from 'src/users';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectModel('Project') private projectModel: Model<ProjectsDocument>,
    @InjectModel('User') private userModel: Model<UserDocument>
  ) {}

  async findById(id: string, projection?: any): Promise<ProjectEntity> {
    return this.projectModel.findById(id, projection).exec();
  }

  async findAllByUserId(userId: string): Promise<ProjectEntity[]> {
    const result = await this.userModel.aggregate([
      {
        $match: {
          _id: userId
        }
      },
      {
        $lookup: {
          from: 'projects',
          localField: 'projects',
          foreignField: '_id',
          as: 'projects'
        }
      },
      {
        $project: {
          _id: 0,
          projects: 1
        }
      }
    ]);

    return result[0].projects;
  }

  async create(input: ProjectEntity, userId: string): Promise<void> {
    await this.userModel.update(
      { _id: userId },
      { $push: { projects: input._id } }
    );
    await this.projectModel.create(input);
  }

  async updateOne(
    _id: string,
    updateInput: Partial<ProjectEntity>
  ): Promise<void> {
    await this.projectModel
      .updateOne(
        { _id },
        {
          $set: {
            ...updateInput,
            updatedAt: new Date().toISOString()
          }
        }
      )
      .exec();
  }

  async softDeleteOne(_id: string): Promise<void> {
    await this.projectModel
      .updateOne(
        { _id },
        {
          $set: {
            deletedAt: new Date().toISOString()
          }
        }
      )
      .exec();
  }

  async deleteOne(_id: string): Promise<void> {
    await this.projectModel.deleteOne(_id).exec();
  }
}
