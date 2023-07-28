import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './users.model';

import { InjectModel } from '@nestjs/sequelize'

@Injectable()
export class UsersService {

  constructor(@InjectModel(User) private userRepository: typeof User) { }

  create(createUserDto: CreateUserDto) {
    return `This action adds a new user ${createUserDto}`;
  }

  async findAll() {
    const users = await this.userRepository.findAll({ include: { all: true } });
    return users
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user -- ${updateUserDto}`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
