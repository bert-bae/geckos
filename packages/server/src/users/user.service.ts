import { Model } from 'mongoose';
import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserDocument } from './user.schema';
import { CreateUserDto } from './dto/user.dto';
import { UserInput } from './inputs/user.input';
import { v4 as uuid } from 'uuid';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private userModel: Model<UserDocument>) {}

  async createUser(input: UserInput): Promise<CreateUserDto> {
    const user = await this.userModel.findOne({ email: input.email }).exec();

    if (!user) {
      return this.userModel.create({
        ...input,
        _id: uuid()
      });
    } else {
      throw new Error('User already exists');
    }
  }

  async findOne(id: string): Promise<CreateUserDto> {
    const user = await this.userModel.findById(id);

    if (!user) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }

    return user;
  }
}
