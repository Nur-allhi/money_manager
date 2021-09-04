import React, { createContext, useState } from 'react';

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
    const [loggedInUser, setLoggedInUser] = useState(false)
    const [modal, setModal] = useState(false)

    return (
        <>
            <AppContext.Provider value={{
                loggedInUser,
                setLoggedInUser,
                modal,
                setModal
            }}>
                {children}
            </AppContext.Provider>
        </>
    )
}

export default AppContextProvider
