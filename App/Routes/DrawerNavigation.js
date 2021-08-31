import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import HomeScreen from '../Screens/HomeScreen';
import Income from '../Screens/Income';


const Drawer = createDrawerNavigator()

function DrawerNavigation() {
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Income" component={Income} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigation
