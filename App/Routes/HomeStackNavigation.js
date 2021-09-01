import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../Screens/HomeScreen';
import Deposit from './../Screens/Deposit';
import Expense from './../Screens/Expense';
import Income from './../Screens/Income';
import Loan from './../Screens/Loan';

const Stack = createStackNavigator()
const HomeStackNavigation = () => {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Income" component={Income} />
            <Stack.Screen name="Expense" component={Expense} />
            <Stack.Screen name="Deposit" component={Deposit} />
            <Stack.Screen name="Loan" component={Loan} />
        </Stack.Navigator>
    )
}

export default HomeStackNavigation
