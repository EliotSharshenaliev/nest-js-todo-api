import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import {
  TodoInterface,
  TodoUpdateInterface,
} from './interfaces/todo.interface';
import * as uuid from 'uuid';

@Injectable()
export class TodoServices {
  private todos: TodoInterface[] = [];

  getAll(): TodoInterface[] {
    return this.todos;
  }

  findOne(index): TodoInterface {
    const todo = this.todos.find((value) => value.id == index);
    if (!todo) throw new Error("Doesn't have any todo by this id");
    return todo
  }

  create(body): TodoInterface {
    const newTodo: TodoInterface = {
      id: uuid.v4(),
      title: body.title,
      completed: false,
      deleted: false,
    };

    this.todos.push(newTodo);
    return newTodo;
  }

  delete(index: string): TodoInterface {
    const todo = this.findOne(index);
    this.update(index, {
      ...todo,
      deleted: true,
    });
    return todo;
  }

  updateIfExist(index: string, body: TodoUpdateInterface) {
    const todo = this.findOne(index)
    this.update(index, { ...todo, ...body });
    return todo
  }

  private update(index: string, todo: TodoInterface){
    this.todos = this.todos.map((obj, key) => {
      if (obj.id === index) return { ...obj, ...todo };
      return obj;
    });
  }

}
