import { Question } from "./src/models/Question";

export default [
    {
        id: Math.ceil(Math.random() * 10000),
        description: 'THis is the first question',
        possibleAnswers: [
            'This is the first possible answer to the dilema',
            'This is the second possible answer to the dilema',
            'This is the third possible answer to the dilema'
        ],
        correctIndexAnswers: [1]
    },
    {
        id:  Math.ceil(Math.random() * 10000),
        description: 'THis is the second question',
        possibleAnswers: [
            'This is the second for the first possible answer to the dilema',
            'This is the second for the second possible answer to the dilema',
            'This is the second for the third possible answer to the dilema'
        ],
        correctIndexAnswers: [0, 2]
    }
] as Array<Question>;