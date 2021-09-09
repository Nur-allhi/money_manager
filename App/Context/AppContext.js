import React, { createContext, useState } from 'react';

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
    const [loggedInUser, setLoggedInUser] = useState(true)
    const [userLogInfo, setUserLogInfo] = useState("")
    const [transactions, setTransactions] = useState([])
    const [incomeSubCatagories, setIncomeSubCatagories] = useState("")



    const [modal, setModal] = useState(false)

    return (
        <>
            <AppContext.Provider value={{
                loggedInUser, setLoggedInUser,
                userLogInfo, setUserLogInfo,
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
