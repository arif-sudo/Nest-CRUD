import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './users.model';

import { InjectModel } from '@nestjs/sequelize'

@Injectable()
export class UsersService {

  constructor(@InjectModel(User) private userRepository: typeof User) { }

  async create(createUserDto: CreateUserDto): Promise<User | undefined> {
    const user = await this.userRepository.create(createUserDto);
    return user;

  }

  async findAll(): Promise<User[] | undefined> {
    const users = await this.userRepository.findAll({ include: { all: true } });
    return users;
  }

  async findOne(id: number): Promise<User | undefined> {
    const user = await this.userRepository.findOne({ where: { id: id } });
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User | undefined> {
    const user = await this.userRepository.findOne({ where: { id: id } });
    console.log(updateUserDto, 'update dto aloo');
    const updatedUser = await user.update(updateUserDto);
    return updatedUser;

  }

  async remove(id: number): Promise<void | undefined> {
    await this.userRepository.destroy({ where: { id: id } });
  }

  async findByUsername(username: string) {
    const user = await this.userRepository.findOne({where: {username: username}})
    return user;
}
}
