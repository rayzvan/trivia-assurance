export class Question {
    id: number;
    description: string;
    possibleAnswers: Array<string>;
    correctIndexAnswers: Array<number>;

    constructor(id: number, description: string, questions: Array<string>, correctIndexAnswers: Array<number>) {
        this.id = id;
        this.description = description;
        this.possibleAnswers = questions;
        this.correctIndexAnswers = correctIndexAnswers;
    }
}