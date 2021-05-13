import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAboutDTO } from './dto/todo.dto';
import { Todo } from './interface/todo.interface';

@Injectable()
export class TodoService {
  constructor(@InjectModel('User') private readonly UserModel: Model<Todo>) {}

  async getUsers(): Promise<Todo[]> {
    const users = await this.UserModel.find();
    return users;
  }

  async getUser(userID: string): Promise<Todo> {
    const user = await this.UserModel.findById(userID);
    return user;
  }

  async createUser(createAboutDTO: CreateAboutDTO): Promise<Todo> {
    const user = await new this.UserModel(createAboutDTO);
    return await user.save();
  }

  async deleteUser(userID): Promise<Todo> {
    const deleteUser = await this.UserModel.findOneAndDelete(userID);
    return deleteUser;
  }

  async updateUser(
    userID: string,
    createAboutDTO: CreateAboutDTO,
  ): Promise<Todo> {
    const updateUser = await this.UserModel.findByIdAndUpdate(
      userID,
      createAboutDTO,
      { new: true },
    );
    return updateUser;
  }
}
