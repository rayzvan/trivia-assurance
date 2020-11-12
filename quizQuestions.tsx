import { Question } from "./src/models/Question";

export default [
    {
        id: Math.ceil(Math.random() * 10000),
        description: 'THis is the first question',
        possibleAnswers: [
            {
                letter: 'A',
                content: 'This is the first possible answer to the dilema'
            },
            {
                letter: 'B',
                content: 'This is the second possible answer to the dilema'
            },
            {
                letter: 'C',
                content: 'This is the third possible answer to the dilema'
            }
        ],
        correctIndexAnswer: 1
    },
    {
        id: Math.ceil(Math.random() * 10000),
        description: 'THis is the second question',
        possibleAnswers: [
            {
                letter: 'A',
                content: 'This is the second for the first possible answer to the dilema'
            },
            {
                letter: 'B',
                content: 'This is the second for the second possible answer to the dilema'
            },
            {
                letter: 'C',
                content: 'This is the second for the third possible answer to the dilema'
            }
        ],
        correctIndexAnswer: 0
    },
    {
        id: Math.ceil(Math.random() * 10000),
        description: 'THis is the third question',
        possibleAnswers: [
            {
                letter: 'A',
                content: 'This is the third for the first possible answer to the dilema'
            },
            {
                letter: 'B',
                content: 'This is the third for the second possible answer to the dilema'
            },
            {
                letter: 'C',
                content: 'This is the third for the third possible answer to the dilema'
            }
        ],
        correctIndexAnswer: 1
    },
    {
        id: Math.ceil(Math.random() * 10000),
        description: 'THis is the fourth question',
        possibleAnswers: [
            {
                letter: 'A',
                content: 'This is the fourth for the first possible answer to the dilema'
            },
            {
                letter: 'B',
                content: 'This is the fourth for the second possible answer to the dilema'
            },
            {
                letter: 'C',
                content: 'This is the fourth for the third possible answer to the dilema'
            }
        ],
        correctIndexAnswer: 2
    },
    {
        id: Math.ceil(Math.random() * 10000),
        description: 'THis is the fifth question',
        possibleAnswers: [
            {
                letter: 'A',
                content: 'This is the fifth for the first possible answer to the dilema'
            },
            {
                letter: 'B',
                content: 'This is the fifth for the second possible answer to the dilema'
            },
            {
                letter: 'C',
                content: 'This is the fifth for the third possible answer to the dilema'
            }
        ],
        correctIndexAnswer: 0
    },
    {
        id: Math.ceil(Math.random() * 10000),
        description: 'THis is the sixth question',
        possibleAnswers: [
            {
                letter: 'A',
                content: 'This is the sixth for the first possible answer to the dilema'
            },
            {
                letter: 'B',
                content: 'This is the sixth for the second possible answer to the dilema'
            },
            {
                letter: 'C',
                content: 'This is the sixth for the third possible answer to the dilema'
            }
        ],
        correctIndexAnswer: 0
    }
] as Array<Question>;