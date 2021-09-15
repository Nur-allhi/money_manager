import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import EditChartOfAccount from '../Screens/EditChartOfAccount';
import ChartOfAccountList from './../Screens/ChartOfAccountList';


const Stack = createStackNavigator();
const UpdateChartOfAccountStack = () => {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="List" component={ChartOfAccountList} />
            <Stack.Screen name="Edit" component={EditChartOfAccount} />
        </Stack.Navigator>
    )
}

export default UpdateChartOfAccountStack
