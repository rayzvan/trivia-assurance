import { USER_ANSWERS_ADD_CORRECT_ANSWER, USER_ANSWERS_ADD_WRONG_ANSWER, USER_ANSWERS_CLEAR } from "./actionTypes"

export const userAnswersClear = () => {
    return {
        type: USER_ANSWERS_CLEAR
    }
}

export const userAnswersAddRightAnswer = () => {
    return {
        type: USER_ANSWERS_ADD_CORRECT_ANSWER
    }
}

export const userAnswersAddWrongAnswer = () => {
    return {
        type: USER_ANSWERS_ADD_WRONG_ANSWER
    }
}