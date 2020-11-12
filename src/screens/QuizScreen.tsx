import React, { useEffect, useState } from "react";
import { View, StyleSheet, Button, Alert, Text } from "react-native";
import QuizHeader from "../components/quiz/QuizHeader";
import QuizPossibleAnswer from "../components/quiz/QuizPossibleAnswer";
import { useDispatch, useSelector } from 'react-redux';
import { Question } from "../models/Question";
import { NavigationProp, Route } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StackNavigationOptions } from "@react-navigation/stack";
import AlertContainer from "../components/alert/AlertContainer";
import { Answer } from "../models/Anwer";
import { UserAnswers } from "../models/UserAnswers";
import { userAnswersAddRightAnswer, userAnswersAddWrongAnswer } from "../store/actions/userAnswers";

const QuizScreen = ({ route, navigation }: any) => {

    const index: number = route.params?.questionIndex ?? 0;
    const wasCorrectAnswer = route.params?.wasCorrectAnswer;

    const dispatch = useDispatch();
    const [selectedAnswers, setSelectedAnswers] = useState([false, false, false]);
    const [wrongAnswerSelected, setWrongAnswerSelected] = useState(false);
    const { questions } = useSelector((state: { quiz: { questions: Array<Question> } }) => state.quiz);
    const { userAnswers } = useSelector((state: { userScore: { userAnswers: UserAnswers } }) => state.userScore);
    const [isAnswerSelected, setIsAnswerSelected] = useState(false);

    useEffect(() => {
        if (index > 0) {
            //TODO This should be switched. See why is not working proeprly
            wasCorrectAnswer === false
                ? dispatch(userAnswersAddRightAnswer())
                : dispatch(userAnswersAddWrongAnswer())
        }
    }, [dispatch])

    const selectedAnswerHandler = (selectedIndex: number) => {
        setSelectedAnswers(selectedAnswers.map((item, index: number) => index === selectedIndex));
        setIsAnswerSelected(true);
    }

    const possibleAnswers = questions[index].possibleAnswers.map((possibleAnswer: Answer, possibleAnserIndex: number) => {
        let wrongAnswerd;
        let isCorrectAnswer;
        if (wrongAnswerSelected) {
            wrongAnswerd = selectedAnswers[possibleAnserIndex];
            isCorrectAnswer = possibleAnserIndex === questions[index].correctIndexAnswer;
        }

        return (
            <QuizPossibleAnswer
                key={possibleAnswer.letter}
                onClick={selectedAnswerHandler}
                containerStyle={styles.quizAnswerStyle}
                selected={{ isSelected: selectedAnswers[possibleAnserIndex], index: possibleAnserIndex }}
                content={possibleAnswer.content}
                title={possibleAnswer.letter}
                wrong={wrongAnswerd}
                correct={isCorrectAnswer}
                disabled={wrongAnswerSelected}
            />
        )
    })

    const selectNextHandler = () => {
        if (questions.length === index + 1) {
            navigation.navigate('Home');
            return;
        }
        if (wrongAnswerSelected) {
            navigation.push('Quiz', { questionIndex: index + 1, wasCorrectAnswer: false });
            return;
        }
        const question = questions[index];
        let isWrongAnsweredSelected = false;
        selectedAnswers.forEach((answer, index: number) => {
            if (!answer && question.correctIndexAnswer === index && !wrongAnswerSelected) {
                isWrongAnsweredSelected = true;
            }
            if (answer && !(question.correctIndexAnswer === index) && !wrongAnswerSelected) {
                isWrongAnsweredSelected = true;
            }
        })
        if (!isWrongAnsweredSelected) {
            navigation.push('Quiz', { questionIndex: index + 1, wasCorrectAnswer: true });
            //TODO INVESTIAGETE WHY IF NO RETURN, THEN IS CALLED AGAIN? BECAUSE OF RE-RENDERS??
            return;
        }
        setWrongAnswerSelected(true);
    }

    return (
        <View style={styles.container}>
            <AlertContainer openModal={wrongAnswerSelected} />
            <QuizHeader
                containerStyle={styles.quizHeaderStyle}
                questionNumber={index + 1}
                noOfQuestions={questions.length}
                noOfCorrectAnswers={userAnswers.noOfCorrectAnswers}
                noOfWrongAnswers={userAnswers.noOfWrongAnswers} />
            <Text style={styles.descriptionStyle}>{questions[index].description}</Text>
            {possibleAnswers}
            <View style={styles.buttomStyle}>
                <TouchableOpacity disabled={!isAnswerSelected} onPress={selectNextHandler} style={styles.nextButtonStyle} >
                    <Button disabled={!isAnswerSelected} onPress={() => null} title="Next" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export const screenOptions = (navData: any): StackNavigationOptions => {
    return {
        headerTitle: 'Quiz',
        gestureEnabled: false,
        headerLeft: null as any,
        headerRight: () => (
            <Button title={'Cancel'} onPress={() => {
                Alert.alert(
                    'Warning',
                    'Are you sure you want to quit? All current progress will be lost',
                    [
                        {
                            text: 'Cancel',
                            onPress: () => null,
                            style: 'cancel'
                        },
                        {
                            text: 'Ok',
                            onPress: () => (navData.navigation.navigate('Home'))
                        }
                    ]
                )
            }} />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'flex-start',
        margin: 18
    },
    descriptionStyle: {
        marginVertical: 20,
        fontSize: 20,
        color: 'black',
        textAlign: 'center'
    },
    buttomStyle: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 36
    },
    nextButtonStyle: {
        height: 50,
        justifyContent: 'center',
        marginTop: 25,
        shadowOffset: {
            height: 2,
            width: 1
        },
        shadowOpacity: 0.5,
        // elevation: 10,
        shadowRadius: 2,
        borderRadius: 10,
        backgroundColor: '#FFFFFF'
    },
    quizHeaderStyle: {
        // marginTop: 18
    },
    quizAnswerStyle: {
        marginTop: 10
    }
});

export default QuizScreen;
