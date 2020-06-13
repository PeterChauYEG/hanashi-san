import { Injectable, Logger } from '@nestjs/common';
import {SchedulerRegistry} from '@nestjs/schedule';
import { CronJob } from 'cron'
import Question from "../interfaces/Question";
import Bot from "../bot";

@Injectable()
export class TasksService {
    constructor(private readonly schedulerRegistry: SchedulerRegistry) {}

    private readonly logger = new Logger(TasksService.name);

    addCronJob(question: Question, bot: Bot) {
        const { timing, message, name } = question

        const job = new CronJob(timing, () => {
            this.logger.log(message);
            bot.channel.send(message)
        });

        this.schedulerRegistry.addCronJob(name, job);
        job.start();
    }
}
