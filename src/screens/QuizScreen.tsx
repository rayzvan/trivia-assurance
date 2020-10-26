import React, { useCallback, useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import QuizHeader from "../components/quiz/QuizHeader";
import QuizPossibleAnswer from "../components/quiz/QuizPossibleAnswer";
import { useSelector, useDispatch } from 'react-redux';
import { Question } from "../models/Question";
import { fetchQuestions } from "../store/actions/questions";

const QuizScreen = (props: { question: Question }) => {

    const [selectedAnswers, setSelectedAnswers] = useState([]);

    const questions = useSelector((state: { questions: Question }) => state.questions);
    const dispatch = useDispatch();
    console.log(questions);

    const loadQuestions = useCallback(async () => {
        await dispatch(fetchQuestions());
    }, [dispatch]);

    useEffect(() => {
        loadQuestions()
    }, [dispatch]);


    return (
        <View style={styles.container}>
            <QuizHeader
                containerStyle={styles.quizHeaderStyle}
                questionNumber={12}
                noOfCorrectAnswers={0}
                noOfWrongAnswers={0} />
            <QuizPossibleAnswer containerStyle={styles.quizAnswerStyle} />
            <QuizPossibleAnswer containerStyle={styles.quizAnswerStyle} />
            <QuizPossibleAnswer containerStyle={styles.quizAnswerStyle} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'flex-start',
        margin: 18
    },
    quizHeaderStyle: {
        // marginTop: 18
    },
    quizAnswerStyle: {
        marginTop: 10
    }
});

export default QuizScreen;
