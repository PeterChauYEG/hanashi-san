import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ConfigModule} from "@nestjs/config";
import {ScheduleModule, SchedulerRegistry} from "@nestjs/schedule";
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
      ConfigModule.forRoot({
        isGlobal: true
      }),
      ScheduleModule.forRoot(),
      TasksModule,
      SchedulerRegistry
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
