export class UserAnswers {
    noOfCorrectAnswers: number;
    noOfWrongAnswers: number;

    constructor(noOfCorrectAnswers: number, noOfWrongAnswers: number) {
        this.noOfCorrectAnswers = noOfCorrectAnswers;
        this.noOfWrongAnswers = noOfWrongAnswers;
    }
}