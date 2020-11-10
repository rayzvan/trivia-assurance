import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';

const QuizPossibleAnswer = ({ content, title, containerStyle, correct, wrong, selected: { isSelected, index }, onClick }: any) => {

    const mainStyle = isSelected ? styles.selectedContainer : styles.mainContainer;
    let backgroundColor = 'white';
    if (isSelected && wrong) {
        backgroundColor = '#E53935';
    } else if (correct) {
        backgroundColor = '#66BB6A';
    }
    else if (isSelected) {
        backgroundColor = '#BBDEFB';
    }

    return (
        <View style={{ ...mainStyle, ...containerStyle, backgroundColor }}>
            <TouchableOpacity activeOpacity={1} onPress={() => onClick(index)}>
                <View style={styles.container}>
                    <Text style={styles.titleStyle}>{title}</Text>
                    <Text style={styles.descriptionStyle}>{content}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
};


const styles = StyleSheet.create({
    selectedContainer: {
        marginLeft: -3,
        marginRight: -3,
        flexDirection: 'row',
        borderRadius: 10,
        borderWidth: 0.3,
        shadowOffset: {
            height: 4,
            width: 3
        },
        shadowOpacity: 0.6,
        shadowRadius: 2
    },
    mainContainer: {
        flexDirection: 'row',
        borderRadius: 10,
        borderWidth: 0.3,
        shadowOffset: {
            height: 2,
            width: 1
        },
        shadowOpacity: 0.3,
        shadowRadius: 2
    },
    container: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15
    },
    titleStyle: {
        color: 'black',
        fontSize: 18
    },
    descriptionStyle: {
        marginLeft: 18
    }
})

export default QuizPossibleAnswer;