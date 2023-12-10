import { NestFactory } from '@nestjs/core';
import * as process from "process";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const PORT = process.env.PORT || 3000

  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(PORT, () => console.log(`Server has been started at ${PORT}`));
}
bootstrap();
