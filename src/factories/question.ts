import Question from "../interfaces/Question";

const questionFactory = (message: string, name: string, hourOfDay: number): Question => ({
    message,
    name,
    timing: `* * ${hourOfDay} * * *`
})

export default questionFactory
