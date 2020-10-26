export class Question {
    id: number;
    description: string;
    possibleAnswers: Array<{ [key: string]: string }>;
    correctAnswers: Array<string>;

    constructor(id: number, description: string, questions: Array<{ [key: string]: string }>, correctAnswers: Array<string>) {
        this.id = id;
        this.description = description;
        this.possibleAnswers = questions;
        this.correctAnswers = correctAnswers;
    }
}