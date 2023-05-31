import { Controller, Get, Post, Body, Delete, Param, UsePipes, ValidationPipe, UseFilters, BadRequestException, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './interface/userInterface';
import { UserDto, UserParamsDto } from './dto/user.dto';
import { HttpExceptionFilter } from './filter';
import { AuthGuard } from './gurd';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) { }

  // Http get users
  @Get()
  getUsers(): User[] {
    return this.userService.getUsers();
  }

  @Get('/:email')
  @UseFilters(new HttpExceptionFilter())
  @UseGuards(new AuthGuard())
  async getUser(@Param() param: UserParamsDto): Promise<User> {
    try {
      return this.userService.getUser(param.email);
    } catch (err) {
      throw new BadRequestException(err.message)
    }
  }

  // Http post users
  @Post()
  @UsePipes(new ValidationPipe())
  addUser(@Body() user: UserDto): User {
    return this.userService.addUser(user);
  }

  // Http delete users
  @Delete('/:email')
  deleteUser(@Param() param: UserParamsDto): User[] {
    return this.userService.deleteUser(param.email)
  }

}
