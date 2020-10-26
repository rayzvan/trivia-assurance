import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';

const QuizPossibleAnswer = ({ description, title, containerStyle }: any) => {
    return (
        <View style={{ ...styles.mainContainer, ...containerStyle }}>
            <TouchableOpacity >
                <View style={styles.container}>
                    <Text style={styles.titleStyle}>A</Text>
                    <Text style={styles.descriptionStyle}>This is a text to test the answer posibilities bla bla and see how it looks in the screen if the txt is long because it may need to be long since this is what we discussed with Alin</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
};


const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: 'white',
        flexDirection: 'row',
        borderRadius: 10,
        borderWidth: 0.3,
        shadowOffset: {
            height: 2,
            width: 1
        },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        // flex:1,
        // flexWrap: 'wrap'
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    container: {
        // flex: 1,
        // flexGrow:1,
        // alignSelf: 'flex-start',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15
        // flexWrap: 'wrap'
    },
    titleStyle: {
        // flex: 1,
        color: 'black',
        fontSize: 18,
        // flexWrap: 'wrap'
    },
    descriptionStyle: {
        // flex: 1,
        marginLeft: 18,
        // flexWrap: 'wrap'
    }
})

export default QuizPossibleAnswer;