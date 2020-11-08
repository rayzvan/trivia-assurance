import React, { useEffect, useState } from "react";
import { View, StyleSheet, Button, Alert } from "react-native";
import QuizHeader from "../components/quiz/QuizHeader";
import QuizPossibleAnswer from "../components/quiz/QuizPossibleAnswer";
import { useSelector } from 'react-redux';
import { Question } from "../models/Question";
import { NavigationProp, Route } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StackNavigationOptions } from "@react-navigation/stack";
import AlertContainer from "../components/alert/AlertContainer";

const QuizScreen = ({ route, navigation }: any) => {

    const index: number = route.params?.questionIndex ?? 0;

    const [selectedAnswers, setSelectedAnswers] = useState([false, false, false]);
    const [wrongAnswerSelected, setWrongAnswerSelected] = useState(false);
    const { questions } = useSelector((state: { quiz: { questions: Array<Question> } }) => state.quiz);
    const [isAnswerSelected, setIsAnswerSelected] = useState(false);

    const selectedAnswerHandler = (selectedIndex: number) => {
        setSelectedAnswers(selectedAnswers.map((item, index: number) => index === selectedIndex));
        setIsAnswerSelected(true);
    }

    const selectNextHandler = () => {
        if (!wrongAnswerSelected) {
            const question = questions[index];
            selectedAnswers.forEach((answer, index: number) => {
                if (!answer && question.correctIndexAnswers.find(item => item === index) && !wrongAnswerSelected) {
                    setWrongAnswerSelected(true);
                }
                if (answer && !question.correctIndexAnswers.find(item => item === index) && !wrongAnswerSelected) {
                    setWrongAnswerSelected(true);
                }
            })
        } else {
            // GO TO NEXT PAGE
        }
    }

    return (
        <View style={styles.container}>
            <AlertContainer openModal={wrongAnswerSelected} />
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
                title={"A"} />
            <QuizPossibleAnswer
                onClick={selectedAnswerHandler}
                containerStyle={styles.quizAnswerStyle}
                selected={{ isSelected: selectedAnswers[1], index: 1 }}
                description={questions[index].possibleAnswers[1]}
                title={"B"} />
            <QuizPossibleAnswer
                onClick={selectedAnswerHandler}
                containerStyle={styles.quizAnswerStyle}
                selected={{ isSelected: selectedAnswers[2], index: 2 }}
                description={questions[index].possibleAnswers[2]}
                title={"C"} />
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
