import { Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './interface/userInterface';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUser(): User[] {
    return this.userService.getUser();
  }

  @Get('add-user')
  addUser(): User {
    return this.userService.addUser({
      email: 'test@gmail.com',
      username: 'Md Shakil Ahmed',
    });
  }

  // @Post()
  // getHelloPost(): string {
  //   return this.userService.getHello();
  // }
}
