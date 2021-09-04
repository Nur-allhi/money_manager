import React, { useContext, useState } from 'react';
import { Alert, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { AppContext } from '../../Context/AppContext';


const login = () => {
    const { setLoggedInUser } = useContext(AppContext)
    const [checkAuthDetails, setCheckAuthDetails] = useState(false)
    const [newUser, setNewUser] = useState(false)
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
    const [passwordDidMatch, setPasswordDidMatch] = useState(true)

    const oldUserLogin = () => {
        if (oldUserInput == "") {
            Alert.alert("Blank Input", "Please fill this login form")
        } if (oldUserInput.email === "noorefty1@gmail.com") {
            if (oldUserInput.password === "efty1234") {
                console.log(oldUserInput)
                setOldUserInput("")
                setLoggedInUser(true)
            } else {
                console.log("Wrong password")
            }
        } else {
            console.log("Email and password is incorrect. Please try again")
            setCheckAuthDetails(true);
        }
    }

    const newUserLogin = () => {
        if (newUserInput == "") {
            Alert.alert("Blank Input", "Please fill this reg form")
        } if (newUserInput.password === newUserInput.confrimPassword) {
            console.log(newUserInput)
            console.log("yeaaaaa Its matched")
            setPasswordDidMatch(true)
            setNewUserInput("")
        }
        else {
            setPasswordDidMatch(false)
            console.log("Your password didnt match")
        }
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
                            checkAuthDetails ? <Text style={{textAlign:"center"}}>Email and password {"\n"} is incorrect. Please try again</Text> : null
                        }
                        <TouchableOpacity style={styles.loginBtn}
                            onPress={oldUserLogin}>
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
