import { Model } from 'mongoose';
import { Injectable, HttpStatus, HttpException } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { User, UserDocument } from '../schemas/user.schema'

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(email, password): Promise<Omit<User, 'password'>> {
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

  async findOne(id): Promise<Omit<User, 'password'>> {
    const user = await this.userModel.findById(id)

    if (!user) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND)
    }

    return this.stripPassword(user)
  }

  private stripPassword(user: User): Omit<User, 'password'> {
    delete user.password;
    return user
  }
}