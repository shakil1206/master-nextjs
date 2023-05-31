import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './interface/userInterface';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) { }

  // Http get users
  @Get()
  getUser(): User[] {
    return this.userService.getUser();
  }

  // Http post users
  @Post()
  addUser(@Body() user: User): User {
    return this.userService.addUser(user);
  }

  // Http delete users
  @Delete('/:email')
  deleteUser(@Param('email') email: string): User[] {
    return this.userService.deleteUser(email)
  }

}
