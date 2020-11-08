import quizQuestions from "../../../quizQuestions"
import { Question } from "../../models/Question"
import { FETCH_QUESTIONS_FAILED, FETCH_QUESTIONS_START, FETCH_QUESTIONS_SUCCESS } from "./actionTypes"

export const fetchQuestionsStart = () => {
    return {
        type: FETCH_QUESTIONS_START
    }
}

export const fetchQuestionsSuccess = (questions: Array<Question>) => {
    return {
        type: FETCH_QUESTIONS_SUCCESS,
        questions: questions
    }
}

export const fetchQuestionsFailed = (error: any) => {
    return {
        type: FETCH_QUESTIONS_FAILED,
        error: error
    }
}

export const fetchQuestions = () => {
    return async(dispatch: any) => {
        //await get data from server
        await sleep(300);
        // console.log('***** FETCH START WAS CALLED *****');
        dispatch(fetchQuestionsSuccess(quizQuestions))
    }
}


//TODO Delete this after using redux to get data from server
const sleep = (milliseconds: number) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}