import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
  Req,
} from '@nestjs/common';
import { TodoServices } from './todo.services';
import { CreateTodoDto, ParamsWithId, UpdateTodoDto } from './dto/todo.dto';
import { TodoInterface } from './interfaces/todo.interface';
import { Prisma, Todo } from '@prisma/client';

@Controller('api/v1/')
export class TodoControllers {
  constructor(private readonly todoServices: TodoServices) {}

  @Get('todos/')
  async getTodos() {
    return await this.todoServices.getAll();
  }

  @Post('create/')
  async createTodo(@Body() createTodoDto: CreateTodoDto) {
    return await this.todoServices.create({ ...createTodoDto });
  }

  @Put('update/:id')
  async updateTodos(
    @Param('id') id: string,
    @Body() updateTodoDto: UpdateTodoDto,
  ): Promise<Todo> {
    try {
      return await this.todoServices.update({
        where: { id: Number(id) },
        data: updateTodoDto,
      });
    } catch (e) {
      const response = {
        status: HttpStatus.NOT_FOUND,
        error: 'Todo not found',
      };
      throw new HttpException(response, HttpStatus.NOT_FOUND);
    }
  }

  @Delete('delete/:id')
  async delete(@Param('id') id: string): Promise<Todo> {
    try {
      return await this.todoServices.delete({ id: Number(id) });
    } catch (e) {
      const response = {
        status: HttpStatus.NOT_FOUND,
        error: 'Todo not found',
      };
      throw new HttpException(response, HttpStatus.NOT_FOUND);
    }
  }
}
