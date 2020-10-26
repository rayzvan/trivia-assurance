import React, { useContext } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Button, ColorValue } from "react-native";
import { Button as ElementButton } from 'react-native-elements';
import { StackNavigationProp } from '@react-navigation/stack';
// import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = ({ navigation }: any) => {
    //   const { signout } = useContext(AuthContext);

    return (
        <View style={styles.viewStyle}>
            <TouchableOpacity style={styles.buttonStyle} >
                <Button onPress={() => (navigation.push('Quiz'))} title="Start Quiz" />
            </TouchableOpacity>
            {/* <TouchableOpacity style={styles.buttonStyle} >
                <Button title="History" />
            </TouchableOpacity> */}
            {/* <Button style={styles.buttonStyle} title="History"/> */}
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        justifyContent: 'center',
        margin: 15,
        marginBottom: 250
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
