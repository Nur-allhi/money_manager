import React, { createContext, useState } from 'react';

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
    const [userLogInInfo, setUserLogInInfo] = useState(null)
    const [transactions, setTransactions] = useState([])
    const [incomeSubCatagories, setIncomeSubCatagories] = useState("")

    const [parentCatagoryData, setParentCatagoryData] = useState([])
    const [parentCatagory, setParentCatagory] = useState([])

    const [loadingScreen, setLoadingScreen] = useState(false)

    const [wrongLoginInfo, setWrongLoginInfo] = useState(false)


    const [modal, setModal] = useState(false)

    return (
        <>
            <AppContext.Provider value={{
                userLogInInfo, setUserLogInInfo,
                transactions, setTransactions,
                parentCatagoryData, setParentCatagoryData,
                parentCatagory, setParentCatagory,
                loadingScreen, setLoadingScreen,
                wrongLoginInfo, setWrongLoginInfo,
                modal, setModal
            }}>
                {children}
            </AppContext.Provider>
        </>
    )
}

export default AppContextProvider
