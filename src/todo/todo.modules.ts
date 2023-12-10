import { Module } from "@nestjs/common";
import { TodoControllers } from "./todo.controllers";
import { TodoServices } from "./todo.services";
import { PrismaService } from "../prisma.service";


@Module({
    controllers: [TodoControllers],
    providers: [TodoServices, PrismaService],
})
export class TodoModules {}