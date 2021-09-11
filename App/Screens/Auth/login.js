import axios from 'axios';
import React, { useContext, useState } from 'react';
import { StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { AppContext } from '../../Context/AppContext';
import { AuthContext } from './../../Context/AuthContext';


const login = () => {
    const { setUserLogInInfo } = useContext(AppContext)
    const { regestration, login } = useContext(AuthContext)

    const [checkAuthDetails, setCheckAuthDetails] = useState(false)
    const [newUser, setNewUser] = useState(false)
    const [passwordDidMatch, setPasswordDidMatch] = useState(true)


    const [oldUserInput, setOldUserInput] = useState({
        email: '',
        password: '',
    })
    const [newUserInput, setNewUserInput] = useState({
        name: '',
        email: '',
        password: '',
        confrimPassword: ''
    })

    const handleLogin = (email, password) => {
        login(email, password);
    }

    // const oldUserLogin = async () => {
    //     const userData = new FormData();
    //     userData.append('email', oldUserInput.email);
    //     userData.append('passwodText', oldUserInput.password);

    //     axios.post("https://myaccount.accountingarif.com/api/v1/user/login", userData)
    //         .then(res => {
    //             // setUserLogInInfo(res.data)
    //             console.log("Login infos :", res.data)
    //         })
    //         .catch(error => console.log("Error: ", error))
    // }

    const newUserLogin = () => {
        const newUserData = new FormData();
        newUserData.append("email", newUserInput.email);
        newUserData.append("passwodText", newUserInput.password);
        newUserData.append("fullName", newUserInput.name);
        newUserData.append("phone", "0181346789");
        console.log(newUserData)

        axios.post("https://myaccount.accountingarif.com/api/v1/user/registration", newUserData)
            .then(res => {
                console.log("Reg infos :", res.data)
            })
            .catch(error => console.log("Error:", error))
    }



    return (
        <View style={styles.container}>
            {newUser ? <Text style={{ textAlign: "center", fontSize: 20, }}>
                Create New Account
            </Text> : <Text style={{ textAlign: "center", fontSize: 20, }}>
                Login
            </Text>
            }

            {
                newUser
                    ?
                    // New user signup
                    <View style={styles.RegForm}>
                        <TextInput
                            style={styles.inputs}
                            onChangeText={text => setNewUserInput({ ...newUserInput, name: text })}
                            placeholder="Your full name"
                            value={newUserInput.name}
                        />
                        <TextInput
                            style={styles.inputs}
                            onChangeText={text => setNewUserInput({ ...newUserInput, email: text })}
                            placeholder="New email"
                            value={newUserInput.email}
                        />
                        <TextInput
                            secureTextEntry={true}
                            style={styles.inputs}
                            onChangeText={text => setNewUserInput({ ...newUserInput, password: text })}
                            placeholder="Password"
                            value={newUserInput.password}
                        />
                        {
                            passwordDidMatch ? null : <Text style={{ color: "red" }}>Your password didnot match</Text>
                        }
                        <TextInput
                            secureTextEntry={true}
                            style={styles.inputs}
                            onChangeText={text => setNewUserInput({ ...newUserInput, confrimPassword: text })}
                            placeholder="Confrim password"
                            value={newUserInput.confrimPassword}
                        />
                        <TouchableOpacity style={styles.loginBtn} onPress={newUserLogin}>
                            <Text style={styles.loginBtnText}>
                                Sign Up
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.toggleFormBtn} onPress={() => !setNewUser(false)}>
                            <Text style={styles.toggleFormBtnText}>You have account ? Login here</Text>
                        </TouchableOpacity>
                    </View>
                    :
                    // Login page
                    <View style={styles.loginForm}>
                        <TextInput
                            style={styles.inputs}
                            placeholder="Your email"
                            onChangeText={text => setOldUserInput({ ...oldUserInput, email: text })}
                            value={oldUserInput.email}

                        />
                        <TextInput
                            style={styles.inputs}
                            placeholder="Your Password"
                            onChangeText={text => setOldUserInput({ ...oldUserInput, password: text })}
                            value={oldUserInput.password}


                        />
                        {
                            checkAuthDetails ? <Text style={{ textAlign: "center" }}>Email and password {"\n"} is incorrect. Please try again</Text> : null
                        }
                        <TouchableOpacity style={styles.loginBtn}
                            onPress={() => { handleLogin(oldUserInput.email, oldUserInput.password) }}>
                            <Text style={styles.loginBtnText}>
                                Login
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.toggleFormBtn}
                            onPress={() => !setNewUser(true)}>
                            <Text style={styles.toggleFormBtnText}>You have no account ? Sign up here</Text>
                        </TouchableOpacity>
                    </View>
            }
        </View>
    )
}

export default login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
        paddingHorizontal: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    loginForm: {
        alignItems: "center",
        borderRadius: 10,
        paddingVertical: 20,
        width: 300,
        justifyContent: "center",
        backgroundColor: "#B8DFD8"
    },
    RegForm: {
        alignItems: "center",
        paddingVertical: 20,
        borderRadius: 10,
        width: 300,
        justifyContent: "center",
        backgroundColor: "#B8DFD8"
    },
    inputs: {
        width: "80%",
        padding: 5,
        marginTop: 10,
        height: 50,
        backgroundColor: "#fff",
        borderRadius: 10,
    },
    loginBtn: {
        justifyContent: "center",
        marginTop: 10,
        backgroundColor: "#38A3A5",
        width: "40%",
        height: 40,
        borderRadius: 10,
    },
    loginBtnText: {
        textAlign: "center",
        fontSize: 18,
        color: "#fff"
    },
    toggleFormBtn: {
        marginTop: 20,
    },
    toggleFormBtnText: {
        color: "#5E454B",
    },
})
