import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import HomeStackNavigation from './HomeStackNavigation';


const Drawer = createDrawerNavigator()

function DrawerNavigation() {
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeStackNavigation} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigation
