import { Module } from "@nestjs/common";
import { TodoModules } from "./todo/todo.modules";
import { AuthModule } from './auth/auth.module';


@Module({
    imports: [TodoModules, AuthModule]
})
export class AppModule {}