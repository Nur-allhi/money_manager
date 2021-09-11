import React, { createContext, useState } from 'react';

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
    const [loggedInUser, setLoggedInUser] = useState(false)
    const [userLogInInfo, setUserLogInInfo] = useState(null)
    const [transactions, setTransactions] = useState([])
    const [incomeSubCatagories, setIncomeSubCatagories] = useState("")

    const [parentCatagoryData, setParentCatagoryData] = useState([])
    const [parentCatagory, setParentCatagory] = useState([])




    const [modal, setModal] = useState(false)

    return (
        <>
            <AppContext.Provider value={{
                loggedInUser, setLoggedInUser,
                userLogInInfo, setUserLogInInfo,
                transactions, setTransactions,
                incomeSubCatagories, setIncomeSubCatagories,
                parentCatagoryData, setParentCatagoryData,
                parentCatagory, setParentCatagory,

                modal, setModal
            }}>
                {children}
            </AppContext.Provider>
        </>
    )
}

export default AppContextProvider
