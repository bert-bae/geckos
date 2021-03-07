import { Model } from 'mongoose';
import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserDocument } from './user.schema';
import { CreateUserInput } from './user.input';
import { v4 as uuid } from 'uuid';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private userModel: Model<UserDocument>) {}

  async createUser(input: CreateUserInput): Promise<UserDocument> {
    const user = await this.userModel.findOne({ email: input.email }).exec();

    if (!user) {
      return this.userModel.create({
        ...input,
        _id: uuid(),
        projects: []
      });
    } else {
      throw new Error('User already exists');
    }
  }

  async findOne(id: string): Promise<UserDocument> {
    const user = await this.userModel.findById(id);

    if (!user) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }

    return user;
  }
}
