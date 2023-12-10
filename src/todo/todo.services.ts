import { Injectable } from '@nestjs/common';
import {
  TodoInterface,
  TodoUpdateInterface,
} from './interfaces/todo.interface';
import { Prisma, Todo } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class TodoServices {
  private todos: TodoInterface[] = [];

  constructor(private prisma: PrismaService) {}

  getAll(): Promise<Todo[]> {
    return this.prisma.todo.findMany();
  }

  async create(data: Prisma.TodoCreateInput): Promise<Todo> {
    return this.prisma.todo.create({
      data,
    });
  }

  async delete(where: Prisma.TodoWhereUniqueInput): Promise<Todo> {
    return this.prisma.todo.delete({
      where,
    });
  }

  async findOne(params: { where: Prisma.TodoWhereUniqueInput }) {
    const { where } = params;
    return this.prisma.todo.findUnique({
      where,
    });
  }

  async update(params: {
    where: Prisma.TodoWhereUniqueInput;
    data: Prisma.TodoUpdateInput;
  }): Promise<Todo> {
    const { data, where } = params;
    return this.prisma.todo.update({
      data,
      where,
    });
  }
}
