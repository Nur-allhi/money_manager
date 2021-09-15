import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import AddChartOfAccount from './../Screens/AddChartOfAccount';
import Porfile from './../Screens/Porfile';
import HomeStackNavigation from './HomeStackNavigation';
import UpdateChartOfAccountStack from './UpdateChartOfAccountStack';


const Drawer = createDrawerNavigator()

function DrawerNavigation() {
    return (
        <Drawer.Navigator initialRouteName="Home" drawerPosition="right">
            <Drawer.Screen name="Home" component={HomeStackNavigation} />
            <Drawer.Screen name="Add" component={AddChartOfAccount} />
            <Drawer.Screen name="List" component={UpdateChartOfAccountStack} />
            <Drawer.Screen name="Profile" component={Porfile} />
        </Drawer.Navigator>
    )
}
export default DrawerNavigation
