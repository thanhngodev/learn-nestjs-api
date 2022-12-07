import { Body, Injectable } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  getUsers() {
    const data = [
      { id: 1, name: 'Thanh', email: 'thanhngodev@gmail.com' },
      { id: 2, name: 'Thanh', email: 'thanhngodev@gmail.com' },
      { id: 3, name: 'Thanh', email: 'thanhngodev@gmail.com' },
      { id: 4, name: 'Thanh', email: 'thanhngodev@gmail.com' },
    ];
    return data;
  }

  getUserId(id: number) {
    return { id };
  }

  createUser(updateUserDto: CreateUserDto) {
    return updateUserDto;
  }

  updateUser(updateUserDto: UpdateUserDto, id: number) {
    return { body: updateUserDto, id };
  }

  deleteUser(id: number) {
    const data = this.getUsers().find((user) => {
      if (user.id === id) return user;
    });
    return data;
  }
}
