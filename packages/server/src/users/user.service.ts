import { Model } from 'mongoose';
import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './user.schema';
import { CreateUserDto } from './dto/user.dto';
import { UserInput } from './inputs/user.input';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private userModel: Model<UserDocument>) {}

  async createUser(input: UserInput): Promise<CreateUserDto> {
    console.log(`Create user for ${input.email}`);

    let user = await this.userModel.findOne({ email: input.email }).exec();
    if (!user) {
      user = await this.userModel.create(input);
    }

    return this.stripPassword(user);
  }

  async findOne(id: string): Promise<CreateUserDto> {
    const user = await this.userModel.findById(id);

    if (!user) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }

    return this.stripPassword(user);
  }

  helloUser(name: string) {
    console.log(`Hello ${name}`);
  }

  private stripPassword(user: User): CreateUserDto {
    delete user.password;
    return user;
  }
}
