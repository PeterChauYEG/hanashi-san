import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return "I'm a bot for japanese conversations!";
  }
}
