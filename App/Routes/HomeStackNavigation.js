import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../Screens/HomeScreen';

const Stack = createStackNavigator()
const HomeStackNavigation = () => {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
    )
}

export default HomeStackNavigation
