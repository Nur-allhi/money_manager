import { NavigationContainer } from '@react-navigation/native';
import React, { useContext } from 'react';
import { AppContext } from './App/Context/AppContext';
import AuthStack from './App/Routes/AuthStack';
import DrawerNavigation from './App/Routes/DrawerNavigation';

const Index = () => {
    const { loggedInUser, setLoggedInUser } = useContext(AppContext)

    return (
        <NavigationContainer>
            {
                loggedInUser ? <DrawerNavigation /> : <AuthStack/>
            }
        </NavigationContainer>
    )
}

export default Index
