import React, { createContext, useState } from 'react';

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
    const [loggedInUser, setLoggedInUser] = useState(true)
    const [transactions, setTransactions] = useState([])
    const [incomeSubCatagories, setIncomeSubCatagories] = useState("")



    const [modal, setModal] = useState(false)

    return (
        <>
            <AppContext.Provider value={{
                loggedInUser, setLoggedInUser,
                transactions, setTransactions,
                incomeSubCatagories, setIncomeSubCatagories,
                modal, setModal
            }}>
                {children}
            </AppContext.Provider>
        </>
    )
}

export default AppContextProvider
