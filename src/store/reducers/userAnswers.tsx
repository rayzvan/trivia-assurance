import { UserAnswers } from '../../models/UserAnswers';
import { USER_ANSWERS_ADD_CORRECT_ANSWER, USER_ANSWERS_ADD_WRONG_ANSWER, USER_ANSWERS_CLEAR } from '../actions/actionTypes';
// import * as actionTypes from '../actions/actionTypes';

const initialState: { userAnswers: UserAnswers } = {
    userAnswers: { noOfCorrectAnswers: 0, noOfWrongAnswers: 0 }
};

const userAnswersClear = (state: { userAnswers: UserAnswers }, action: any): { userAnswers: UserAnswers } => {
    return { ...state, userAnswers: new UserAnswers(0, 0) }
}

const userAnswersAddCorrectAnswer = (state: { userAnswers: UserAnswers }, action: any): { userAnswers: UserAnswers } => {
    return { ...state, userAnswers: { noOfWrongAnswers: state.userAnswers.noOfWrongAnswers + 1, noOfCorrectAnswers: state.userAnswers.noOfCorrectAnswers } };
}

const userAnswersAddWrongAnswer = (state: { userAnswers: UserAnswers }, action: any): { userAnswers: UserAnswers } => {
    return { ...state, userAnswers: { noOfWrongAnswers: state.userAnswers.noOfWrongAnswers, noOfCorrectAnswers: state.userAnswers.noOfCorrectAnswers + 1 } };
}

const userAnswersReducer = (state = initialState, action: { type: string }): { userAnswers: UserAnswers } => {
    // console.log('REDUCER CALLED', action.type);
    switch (action.type) {
        case USER_ANSWERS_CLEAR: return userAnswersClear(state, action);
        case USER_ANSWERS_ADD_CORRECT_ANSWER: return userAnswersAddCorrectAnswer(state, action);
        case USER_ANSWERS_ADD_WRONG_ANSWER: return userAnswersAddWrongAnswer(state, action);
        default: return state;
    }
}

export default userAnswersReducer;
