import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from "./interface/userInterface";

@Injectable()
export class UserService {
  public users: User[] = [];

  getUsers(): User[] {
    return this.users;
  }

  getUser(email: string): Promise<User> {
    const userData = this.users.filter(user => user.email === email)

    if (userData && Array.isArray(userData) && userData.length > 0) {
      return Promise.resolve(userData[0]);
    }
    throw new NotFoundException("User not found")
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
