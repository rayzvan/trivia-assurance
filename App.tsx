import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import { NavigationContainer, NavigationAction } from '@react-navigation/native'
import QuizScreen, { screenOptions } from './src/screens/QuizScreen';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import questionsReducer from './src/store/reducers/questions';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';//Enables us to use asynchornous code in redux actions
import { Alert, Button, Text, TouchableOpacity } from 'react-native';

const Stack = createStackNavigator();

const rootReducer = combineReducers({
  quiz: questionsReducer
})

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const RootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Home' }} />
      <Stack.Screen
        name="Quiz"
        component={QuizScreen}
        options={screenOptions} />
    </Stack.Navigator>
  )
}

// export default RootStack;

export default () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </Provider>
  )
}