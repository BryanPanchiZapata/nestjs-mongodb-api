import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Res,
  HttpStatus,
  Body,
  Param,
  Query
} from '@nestjs/common';
import { CreateAboutDTO } from './dto/todo.dto';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}
  @Post('/create')
  async addPost(@Res() res, @Body() createAboutDTO: CreateAboutDTO) {
    const user = await this.todoService.createUser(createAboutDTO);
    return res.status(HttpStatus.OK).json({
      message: 'User created successfully',
      user
    });
  }

  @Get('/')
  async getUsers(@Res() res) {
    const users = await this.todoService.getUsers();
    return res.status(HttpStatus.OK).json({
      users
    });
  }

  @Get('/:userID')
  async getUser(@Res() res, @Param('userID') userID){
    const user = await this.todoService.getUser(userID);
    return res.status(HttpStatus.OK).json(user)
  }

  @Delete('/delete')
  async deleteUser(@Res() res, @Query('userID') userID){
  const userIDelete = await this.todoService.deleteUser(userID)
  return res.status(HttpStatus.OK).json({
    message: 'User delete successfully',
    userIDelete
  })
}

@Put('/update')
async updateUser(@Res() res, @Body() createAboutDTO: CreateAboutDTO, @Query('userID') userID){
  const userUpdate = await this.todoService.updateUser(userID, createAboutDTO);
  return res.status(HttpStatus.OK).json({
    message: 'User update successfully',
    userUpdate
  })
}
}
