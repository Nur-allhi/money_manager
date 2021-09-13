import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import UpdateSubCatagories from '../Screens/UpdateSubCatagories';
import AddSubCatagories from './../Screens/AddSubCatagories';
import UpdateSubCatagories_v2 from './../Screens/test_v2';
import UserPorfile from './../Screens/userPorfile';
import HomeStackNavigation from './HomeStackNavigation';


const Drawer = createDrawerNavigator()

function DrawerNavigation() {
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeStackNavigation} />
            <Drawer.Screen name="Add Sub Catagory" component={AddSubCatagories} />
            <Drawer.Screen name="Update Sub Catagories" component={UpdateSubCatagories} />
            <Drawer.Screen name="Update Sub Catagories_v2" component={UpdateSubCatagories_v2} />
            <Drawer.Screen name="Profile" component={UserPorfile} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigation
