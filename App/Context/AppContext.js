import React, { createContext, useState } from 'react';


export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
    const [modal, setModal] = useState(false)


    return (
        <>
            <AppContext.Provider value={{
                modal,
                setModal
            }}>

                {children}
            </AppContext.Provider>

        </>
    )
}

export default AppContextProvider
