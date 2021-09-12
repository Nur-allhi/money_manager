import React, { useContext } from 'react';
import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AppContext } from './../Context/AppContext';
import { AuthContext } from './../Context/AuthContext';

const UserPorfile = ({ navigation }) => {
    const { userLogInInfo } = useContext(AppContext)
    const { logout } = useContext(AuthContext)

    // const logoutUser = () => {
    //     setLoggedInUser(false)
    // }

    return (
        <View style={styles.conatiner}>
            <StatusBar
                barStyle="dark-content"
                backgroundColor="#fff"
                translucent={true}
            />
             <View style={{
                position: "absolute",
                left: 10,
                top: 20,
            }}>
                <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                    <Image
                        style={{
                            height: 30,
                            width: 30,
                        }}
                        source={require("../assets/icons/menu.png")}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.details}>
                <View>
                    <Text>Email: {userLogInInfo.data.email}</Text>
                    <Text>Name: {userLogInInfo.data.fullName}</Text>
                    <Text>Phone: {userLogInInfo.data.phone}</Text>
                </View>
                <TouchableOpacity onPress={() => logout()} style={styles.logoutBtn}>
                    <Text style={styles.logoutBtnText}>
                        Logout
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default UserPorfile

const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
        alignItems: "center",
        justifyContent: "center"
    },
    details: {
        padding: 10,
        width: "60%",
        borderRadius: 10,
    },
    logoutBtn: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        width: "100%",
        height: 40,
        borderRadius: 10,
        backgroundColor: "#345B63",
    },
    logoutBtnText: {
        fontSize: 18,
        color: "#fff",
        textAlign: "center"
    },
})
