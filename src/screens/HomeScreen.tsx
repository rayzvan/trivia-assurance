import React, { useCallback, useContext, useEffect, useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Button, ColorValue, ActivityIndicator } from "react-native";
import { Button as ElementButton } from 'react-native-elements';
import { StackNavigationProp } from '@react-navigation/stack';
import { useDispatch, useSelector } from "react-redux";
import { fetchQuestions } from "../store/actions/questions";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Question } from "../models/Question";
import AlertContainer from "../components/alert/AlertContainer";
import { userAnswersClear } from "../store/actions/userAnswers";
// import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = ({ navigation }: any) => {
    const [isLoading, setIsLoading] = useState(false);//use from reducer
    const dispatch = useDispatch();

    const { questions, isLoding } = useSelector((state: { quiz: { questions: Array<Question>, isLoding: boolean } }) => state.quiz);

    const loadQuestions = useCallback(async () => {
        setIsLoading(true);
        try {
            await dispatch(fetchQuestions());
            // dispatch(userAnswersClear());
        } catch (err) {

        }
        setIsLoading(false);
    }, [dispatch, setIsLoading]);

    useEffect(() => {
        loadQuestions();
    }, [dispatch, loadQuestions]);

    if (isLoading) {
        return <View style={styles.container}>
            <ActivityIndicator size='large' color={Colors.primpary} />
        </View>
    }

    if (!isLoading && questions.length === 0) {
        return <View style={styles.container}>
            <Text>The questions could not be retrieved</Text>
        </View>
    }

    return (
        <View style={{ ...styles.container, marginBottom: 250 }}>
            <TouchableOpacity style={styles.buttonStyle} >
                <Button
                    title="Start Quiz"
                    onPress={() => {
                        dispatch(userAnswersClear());
                        navigation.push('Quiz')
                    }}
                />
            </TouchableOpacity>
            {/* <TouchableOpacity style={styles.buttonStyle} >
                <Button title="History" />
            </TouchableOpacity> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        margin: 15,
    },
    buttonStyle: {
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
    }
});

export default HomeScreen;
