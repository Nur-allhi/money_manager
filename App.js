import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import AppContextProvider from './App/Context/AppContext';
import DrawerNavigation from './App/Routes/DrawerNavigation';

export default function App() {

  return (
    <AppContextProvider>
      <NavigationContainer>
        <DrawerNavigation />
      </NavigationContainer>
    </AppContextProvider>
  );
}


