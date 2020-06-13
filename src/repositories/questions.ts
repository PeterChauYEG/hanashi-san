import Question from "../interfaces/Question";
import questionFactory from "../factories/question";

const questions: Question[] = [
    questionFactory('きょうはなんですか?', 'WDH', 9),
    questionFactory('今日は何ですか?', 'WDK', 9),
    questionFactory('てんきはなんですか?', 'HWH', 12),
    questionFactory('天気は何ですか?', 'HWK', 12),
]

export default questions
