import { Injectable } from '@nestjs/common';
import { User } from "./interface/userInterface";

@Injectable()
export class UserService {
  public users: User[] = [];

  getUser(): User[] {
    return this.users;
  }

  addUser(user: User): User {
    this.users.push(user);
    return user;
  }

  deleteUser(email: string): User[] {
    const remainUser = this.users.filter((user) => user.email !== email);
    this.users = remainUser;
    return remainUser;
  }
}
