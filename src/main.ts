import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import Bot from "./bot";
import questions from "./repositories/questions";
import {TasksService} from "./tasks/tasks.service";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const tasks: TasksService = app.get(TasksService)

  await app.listen(3000);
  const bot: Bot = new Bot()
  await bot.init()

  // schedule cron jobs
  questions.forEach((question): void => {
    tasks.addCronJob(question, bot)
  })
}

bootstrap();
