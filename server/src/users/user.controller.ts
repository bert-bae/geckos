import { Controller, Get, Req } from '@nestjs/common'
import { UserService } from './user.service'

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  testRoute(): void {
    return this.userService.helloUser('Elbert')
  }
}