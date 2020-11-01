import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import QuizHeader from "../components/quiz/QuizHeader";
import QuizPossibleAnswer from "../components/quiz/QuizPossibleAnswer";
import { useSelector } from 'react-redux';
import { Question } from "../models/Question";
import { Route } from "@react-navigation/native";

const QuizScreen = ({ route }: any) => {

    const index: number = route.params?.questionIndex ?? 0;

    const [selectedAnswers, setSelectedAnswers] = useState([false, false, false]);

    const { questions } = useSelector((state: { quiz: { questions: Array<Question> } }) => state.quiz);
    console.log(questions)

    const selectedAnswerHandler = (selectedIndex: number) => {
        setSelectedAnswers(selectedAnswers.map((item: boolean, index: number) => index === selectedIndex ? !item : item))
    }

    return (
        <View style={styles.container}>
            <QuizHeader
                containerStyle={styles.quizHeaderStyle}
                questionNumber={index + 1}
                noOfCorrectAnswers={0}
                noOfWrongAnswers={0} />
            <QuizPossibleAnswer
                onClick={selectedAnswerHandler}
                containerStyle={styles.quizAnswerStyle}
                selected={{ isSelected: selectedAnswers[0], index: 0 }}
                description={questions[index].possibleAnswers[0]}
                title={"A"}/>
            <QuizPossibleAnswer
                onClick={selectedAnswerHandler}
                containerStyle={styles.quizAnswerStyle}
                selected={{ isSelected: selectedAnswers[1], index: 1 }}
                description={questions[index].possibleAnswers[1]} 
                title={"B"}/>
            <QuizPossibleAnswer
                onClick={selectedAnswerHandler}
                containerStyle={styles.quizAnswerStyle}
                selected={{ isSelected: selectedAnswers[2], index: 2 }}
                description={questions[index].possibleAnswers[2]}
                title={"C"} />
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
