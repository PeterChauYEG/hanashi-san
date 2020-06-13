import * as Discord from 'discord.js'

const TOKEN = process.env.TOKEN;

export default class Bot {
    public client: Discord.Client
    public channel

    constructor() {
        this.client = new Discord.Client();
    }

    async init(): Promise<void> {
        await this.client.login(TOKEN);

        this.findChannel('testing')

        this.client.on('ready', () => {
            console.info(`Logged in as ${this.client.user.tag}!`);
        });

        this.client.on('message', msg => {
            if (msg.content === 'ping') {
                msg.reply('pong');
                msg.channel.send('pong');
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
