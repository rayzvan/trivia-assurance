import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';

const QuizHeader = ({ questionNumber, noOfCorrectAnswers, noOfWrongAnswers, containerStyle }: any) => {
    return (
        <View style={{ ...styles.container, ...containerStyle }}>
            <Text style={styles.titleStyle}>{questionNumber}/50</Text>
            <Text style={styles.correctStyle}>{noOfCorrectAnswers}</Text>
            <Text style={styles.wrongStyle}>{noOfWrongAnswers}</Text>
        </View>
    )
};


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flexDirection: 'row'
    },
    titleStyle: {
        color: 'black',
        fontSize: 18
    },
    correctStyle: {
        color: 'green',
        fontSize: 18,
        marginLeft: 18
    },
    wrongStyle: {
        color: 'red',
        fontSize: 18,
        marginLeft: 18
    },
})

export default QuizHeader;