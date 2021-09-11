import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import axios from 'axios';
import React, { useContext, useEffect, useMemo, useReducer } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { AppContext } from './App/Context/AppContext';
import { AuthContext } from './App/Context/AuthContext';
import AuthStack from './App/Routes/AuthStack';
import DrawerNavigation from './App/Routes/DrawerNavigation';

const Index = () => {
    const {
        parentCatagoryData, setParentCatagoryData,
        parentCatagory, setParentCatagory,
    } = useContext(AppContext)

   

    const initialLoginState = {
        isLoading: true,
        userToken: null,
    };

    loginReducer = (prevState, action) => {
        switch (action.type) {
            case 'RETRIVE_TOKEN':
                return {
                    ...prevState,
                    userToken: action.token,
                    isLoading: false,
                };
            case 'LOGIN':
                return {
                    ...prevState,
                    userToken: action.token,
                    isLoading: false,
                };
            case 'LOGOUT':
                return {
                    ...prevState,
                    userToken: null,
                    isLoading: false,
                };
            case 'REGISTER':
                return {
                    ...prevState,
                    userToken: action.token,
                    isLoading: false,
                };
        }
    }
    const [loginState, dispatch] = useReducer(loginReducer, initialLoginState);

    const authFunctions = useMemo(() => ({
        login: async (email, password) => {
            let userToken;
            userToken = null;
            const loginInputs = new FormData();
            loginInputs.append('email', email);
            loginInputs.append('passwodText', password);

            await axios.post("https://myaccount.accountingarif.com/api/v1/user/login", loginInputs)
                .then(res => {
                    
                    userToken = res.data.data.securityToken
                    if (userToken != null) {
                        try {
                             AsyncStorage.setItem("userToken", userToken)
                        } catch (error) {
                            console.log("🚀 ~ file: Index.js ~ line 68 ~ login: ~ error", error)
                        }
                    }
                    dispatch({ type: "LOGIN", token: userToken })
                })
                .catch(e => console.log(e))
        },

        regestration: () => {
            setUserLogInInfo("jdjsd");
            setIsLoading(false);
        },

        logout: async () => {
            try {
                await AsyncStorage.removeItem("userToken");
            } catch (error) {
                console.log("🚀 ~ file: Index.js ~ line 81 ~ logout: ~ error", error);
            }
            dispatch({ type: "LOGOUT" });
        },
    }), []);


    useEffect(() => {
        axios.get("https://myaccount.accountingarif.com/api/v1/account/parent-without-cash")
            .then(res => setParentCatagoryData(res.data.data))
            .catch(error => console.log(error))
    }, [])

    useEffect(() => {
        setParentCatagory(
            parentCatagoryData.map((data) => ({
                label: data.name,
                value: data.id
            }))
        )
        if (parentCatagory.length > 0) {
            saveMainCatagoriesToDevice(parentCatagory)
        }
    }, [])

    const saveMainCatagoriesToDevice = async (parentCatagory) => {
        try {
            const mainCatagories = JSON.stringify(parentCatagory)
            if (mainCatagories != null) {
                await AsyncStorage.setItem("mainCatagories", mainCatagories)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        setTimeout(async () => {
            let userToken;
            userToken = null;
            try {
                userToken = await AsyncStorage.getItem("userToken")
            } catch (error) {
                console.log("🚀 ~ file: Index.js ~ line 124 ~ setTimeout ~ error", error);
            }
            dispatch({ type: "REGISTER", token: userToken });
        }, 1000);
    }, []);

    if (loginState.isLoading) {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <ActivityIndicator size="large" color="grey" />
            </View>
        );
    }



    return (
        <AuthContext.Provider value={authFunctions}>
            <NavigationContainer>
                {
                    loginState.userToken !== null ? <DrawerNavigation /> : <AuthStack />
                }
            </NavigationContainer>
        </AuthContext.Provider>
    )
}

export default Index
