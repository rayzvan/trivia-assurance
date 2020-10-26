export class Answer {
    id: number;
    correctAnswers: Array<string>;

    constructor(id: number, correctAnswers: Array<string>) {
        this.id = id;
        this.correctAnswers = correctAnswers;
    }
}