import { Model } from 'mongoose';
import { Injectable, HttpStatus, HttpException } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { User, UserDocument } from './user.schema'
import { UserDto } from './user.type'

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private userModel: Model<UserDocument>) {}

  async create(email, password): Promise<UserDto> {
    console.log(`Create user for ${email}`)
    
    let user = await this.userModel.findOne({ email })
    if (!user) {
      user = await this.userModel.create({
        email,
        password
      })
    }

    return this.stripPassword(user)
  }

  async findOne(id): Promise<UserDto> {
    const user = await this.userModel.findById(id)

    if (!user) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND)
    }

    return this.stripPassword(user)
  }

  helloUser(name: string) {
    console.log(`Hello ${name}`)
  }

  private stripPassword(user: User): UserDto {
    delete user.password;
    return user
  }
}