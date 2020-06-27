import {Injectable} from '@nestjs/common';
import questions from "../repositories/questions";
import Question from "../interfaces/Question";

@Injectable()
export class TasksService {
    private readonly questions: Question[]
    private readonly questionsN: number

    constructor() {
        this.questions = questions
        this.questionsN = questions.length
    }

    getQuestion(): Question {
        const index = Math.floor(Math.random() * this.questionsN)
        return this.questions[index]
    }
}
