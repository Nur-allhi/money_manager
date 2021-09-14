import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import AddSubCatagories from './../Screens/AddSubCatagories';
import Porfile from './../Screens/Porfile';
import UpdateSubCatagories from './../Screens/UpdateSubCatagories';
import HomeStackNavigation from './HomeStackNavigation';


const Drawer = createDrawerNavigator()

function DrawerNavigation() {
    return (
        <Drawer.Navigator initialRouteName="Home" drawerPosition="right">
            <Drawer.Screen name="Home" component={HomeStackNavigation} />
            <Drawer.Screen name="Add Sub Catagory" component={AddSubCatagories} />
            <Drawer.Screen name="Update Sub Catagories" component={UpdateSubCatagories} />
            <Drawer.Screen name="Profile" component={Porfile} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigation
