import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put, Req } from "@nestjs/common";
import { TodoServices } from "./todo.services";
import { CreateTodoDto, ParamsWithId, UpdateTodoDto } from "./dto/todo.dto";
import { TodoInterface } from "./interfaces/todo.interface";


@Controller("api/v1/")
export class TodoControllers{
    constructor(private todoServices: TodoServices) {}

    @Get("todos/")
    async getTodos(){
        return this.todoServices.getAll()
    }

    @Post("create/")
    async createTodo(@Body() createTodoDto: CreateTodoDto ){
        return this.todoServices.create(createTodoDto)
    }

    @Put("update/:id")
    async updateTodos(@Param() updateParams: ParamsWithId, @Body() updateTodoDto: UpdateTodoDto){
        try {
            return this.todoServices.updateIfExist(updateParams.id, {
                title: updateTodoDto.title,
                completed: updateTodoDto.completed,
                deleted: updateTodoDto.deleted
            })
        }catch (e) {
            throw new HttpException({
                status: HttpStatus.BAD_REQUEST,
                error: e.message,
            }, HttpStatus.FORBIDDEN, {
                cause: e
            });
        }
    }

    @Delete("delete/:id")
    async deleteTodos(@Param() deleteParams: ParamsWithId){
        try {
            return this.todoServices.delete(deleteParams.id)
        }catch (e) {
            throw new HttpException({
                status: HttpStatus.BAD_REQUEST,
                error: e.message,
            }, HttpStatus.FORBIDDEN, {
                cause: e
            });
        }
    }
}