import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import login from './../Screens/Auth/login';


const stack = createStackNavigator();

const AuthStack = () => {
    return (
        <stack.Navigator headerMode="none" initialRouteName="Login">
            <stack.Screen name="Login" component={login} />
        </stack.Navigator>
    )
}

export default AuthStack
