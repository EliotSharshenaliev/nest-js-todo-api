import { Module } from "@nestjs/common";
import { TodoModules } from "./todo/todo.modules";


@Module({
    imports: [TodoModules]
})
export class AppModule {}