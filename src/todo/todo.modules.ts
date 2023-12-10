import { Module } from "@nestjs/common";
import { TodoControllers } from "./todo.controllers";
import { TodoServices } from "./todo.services";


@Module({
    controllers: [TodoControllers],
    providers: [TodoServices],
})
export class TodoModules {}