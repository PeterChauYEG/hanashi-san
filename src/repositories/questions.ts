import Question from "../interfaces/Question";
import questionFactory from "../factories/question";

const questions: Question[] = [
    questionFactory('きょうはなんですか?'),
    questionFactory('今日は何ですか?'),
    questionFactory('てんきはなんですか?'),
    questionFactory('天気は何ですか?'),
]

export default questions
