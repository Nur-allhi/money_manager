import React from 'react';
import AppContextProvider from './App/Context/AppContext';
import Index from './Index';



export default function App() {

  return (
    <AppContextProvider>
      <Index />
    </AppContextProvider>
  );

}

