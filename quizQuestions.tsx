import { Question } from "./src/models/Question";

export default [
    {
        id: Math.random() * 100,
        description: 'THis is the first question',
        possibleAnswers: [
            { 'A': 'This is the first possible answer to the dilema' },
            { 'B': 'This is the second possible answer to the dilema' },
            { 'C': 'This is the third possible answer to the dilema' }
        ],
        correctAnswers: ['B']
    },
    {
        id: Math.random() * 100,
        description: 'THis is the second question',
        possibleAnswers: [
            { 'A': 'This is the second for the first possible answer to the dilema' },
            { 'B': 'This is the second for the second possible answer to the dilema' },
            { 'C': 'This is the second for the third possible answer to the dilema' }
        ],
        correctAnswers: ['A', 'C']
    }
] as Array<Question>;