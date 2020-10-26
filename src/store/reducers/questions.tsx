import { Question } from '../../models/Question';
import { FETCH_QUESTIONS_FAILED, FETCH_QUESTIONS_START, FETCH_QUESTIONS_SUCCESS } from '../actions/actionTypes';
// import * as actionTypes from '../actions/actionTypes';

const initialState: { questions: Array<Question>, isLoading: boolean } = {
    questions: [],
    isLoading: false
};

const fetchQuestionsStart = (state: { questions: Array<Question>, isLoading: boolean }, action: any): { questions: Array<Question>, isLoading: boolean } => {
    return { ...state, isLoading: true };
}

const fetchQuestionsSuccess = (state: { questions: Array<Question>, isLoading: boolean }, action: any): { questions: Array<Question>, isLoading: boolean } => {
    console.log('******* SUCCESS WAS CALLED *******')
    return { ...state, questions: action.questions, isLoading: false };
}

const fetchQuestionsFailed = (state: { questions: Array<Question>, isLoading: boolean }, actions: any): { questions: Array<Question>, isLoading: boolean } => {
    return { ...state, isLoading: false };
}

const questionsReducer = (state = initialState, action: { type: string }): { questions: Array<Question>, isLoading: boolean } => {
    switch (action.type) {
        case FETCH_QUESTIONS_START: return fetchQuestionsStart(state, action);
        case FETCH_QUESTIONS_SUCCESS: return fetchQuestionsSuccess(state, action);
        case FETCH_QUESTIONS_FAILED: return fetchQuestionsFailed(state, action);
        default: return state;
    }
}

export default questionsReducer;
