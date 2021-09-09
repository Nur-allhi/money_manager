import React, { useContext } from 'react';
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AppContext } from './../Context/AppContext';

const UserPorfile = ({ navigation }) => {
    const { setLoggedInUser, userLogInfo, setUserLogInfo } = useContext(AppContext)
    // const { email, fullName, phone } = userLogInfo.data

    const logoutUser = () => {
        setLoggedInUser(false)
    }

    return (
        <View style={styles.conatiner}>
            <StatusBar
                barStyle="dark-content"
                backgroundColor="#fff"
                translucent={true}
            />
            <View style={styles.details}>
                {/* {userLogInfo.data ? <View>
                    <Text>Email: {email}</Text>
                    <Text>Name: {fullName}</Text>
                    <Text>Phone: {phone}</Text>
                </View> : null} */}
                <TouchableOpacity onPress={() => logoutUser()} style={styles.logoutBtn}>
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
