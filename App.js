import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import AppContextProvider from './App/Context/AppContext';
import AuthStack from './App/Routes/AuthStack';


export default function App() {
  // const { loggedInUser, setLoggedInUser } = useContext(AppContext)


  return (
    <AppContextProvider>
      <NavigationContainer>
        <AuthStack />
      </NavigationContainer>
    </AppContextProvider>
  );
}


