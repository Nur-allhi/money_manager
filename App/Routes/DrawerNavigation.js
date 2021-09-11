import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import AddSubCatagories from '../Screens/AddSubCatagories';
import UserPorfile from './../Screens/userPorfile';
import HomeStackNavigation from './HomeStackNavigation';


const Drawer = createDrawerNavigator()

function DrawerNavigation() {
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeStackNavigation} />
            <Drawer.Screen name="Add Sub Catagory" component={AddSubCatagories} />
            <Drawer.Screen name="Profile" component={UserPorfile} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigation
