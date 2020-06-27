import * as Discord from 'discord.js'
import {TasksService} from "../tasks/tasks.service";
import Question from "../interfaces/Question";

const TOKEN = process.env.TOKEN;

export default class Bot {
    private client: Discord.Client
    private channel
    private tasksService: TasksService

    constructor(tasksService: TasksService) {
        this.client = new Discord.Client();
        this.tasksService = tasksService
    }

    async init(): Promise<void> {
        await this.client.login(TOKEN);

        this.findChannel('testing')

        this.client.on('ready', () => {
            console.info(`Logged in as ${this.client.user.tag}!`);
        });

        this.client.on('message', msg => {
            if (msg.content === 'question') {
                const question: Question = this.tasksService.getQuestion()
                msg.reply(question.message);;
            }
        });
    }

    findChannel(name: string): void {
        const guilds = this.client.guilds

        guilds.forEach(
            guild => guild.channels.forEach(
                channel => {
                    if (channel.name === name) {
                        this.channel = channel
                    }
                }
            )
        )
    }
}
