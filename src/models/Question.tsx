import { Answer } from "./Anwer";

export class Question {
    id: number;
    description: string;
    possibleAnswers: Array<Answer>;
    correctIndexAnswer: number;

    constructor(id: number, description: string, possibleAnswers: Array<Answer>, correctIndexAnswer: number) {
        this.id = id;
        this.description = description;
        this.possibleAnswers = possibleAnswers;
        this.correctIndexAnswer = correctIndexAnswer;
    }
}