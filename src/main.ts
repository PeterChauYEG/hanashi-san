import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import Bot from "./bot";
import {TasksService} from "./tasks/tasks.service";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const tasksService: TasksService = app.get(TasksService)

  await app.listen(3000);
  const bot: Bot = new Bot(tasksService)
  await bot.init()
}

bootstrap();
