import { Controller, Get, Post, Body, Delete, Param, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './interface/userInterface';
import { UserDto, UserParamsDto } from './dto/user.dto';

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
  @UsePipes(new ValidationPipe())
  addUser(@Body() user: UserDto): User {
    return this.userService.addUser(user);
  }

  // Http delete users
  @Delete('/:email')
  deleteUser(@Param('email') params: UserParamsDto): User[] {
    return this.userService.deleteUser(params.email)
  }

}
