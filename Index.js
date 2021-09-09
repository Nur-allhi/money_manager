import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import React, { useContext, useEffect } from 'react';
import { AppContext } from './App/Context/AppContext';
import AuthStack from './App/Routes/AuthStack';
import DrawerNavigation from './App/Routes/DrawerNavigation';

const Index = () => {
    const { loggedInUser, setLoggedInUser, userLogInfo, setUserLogInfo } = useContext(AppContext)
    console.log("userToken:", loggedInUser)

    useEffect(() => {
        saveUserToken()
    }, [loggedInUser])

    useEffect(() => {
        getUserToken()
    }, [])


    // const saveUserInfo = async () => {
    //     try {
    //         const userInfo = JSON.stringify(userLogInfo)
    //         if (userInfo != null) {
    //             await AsyncStorage.setItem("User-Info", userInfo)
    //         }
    //     } catch (error) {
    //         console.log("userInfosetitem", error)
    //     }
    // }

    const saveUserToken = async () => {
        try {
            const userData = JSON.stringify(loggedInUser)
            if (userData != null) {
                await AsyncStorage.setItem("IsUserlogin", userData)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const getUserToken = async () => {
        try {
            const userData = await AsyncStorage.getItem("IsUserlogin")
            if (userData != null) {
                setLoggedInUser(JSON.parse(userData))
            }
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <NavigationContainer>
            {
                loggedInUser ? <DrawerNavigation /> : <AuthStack />
            }
        </NavigationContainer>
    )
}

export default Index
