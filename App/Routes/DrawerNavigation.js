import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import AddCatagories from '../Screens/AddCatagories';
import UpdateSubCatagories from '../Screens/UpdateSubCatagories';
import UserPorfile from './../Screens/userPorfile';
import HomeStackNavigation from './HomeStackNavigation';


const Drawer = createDrawerNavigator()

function DrawerNavigation() {
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeStackNavigation} />
            <Drawer.Screen name="Add Sub Catagory" component={AddCatagories} />
            <Drawer.Screen name="Update Sub Catagories" component={UpdateSubCatagories} />
            <Drawer.Screen name="Profile" component={UserPorfile} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigation
