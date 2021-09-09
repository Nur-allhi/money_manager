import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useContext, useEffect } from 'react';
import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Colors from '../Config/Colors';
import { AppContext } from './../Context/AppContext';


export default function HomeScreen({ navigation }) {
    const {setUserLogInfo } = useContext(AppContext)


    useEffect(() => {
        getUserInfo()
    }, [])

    const getUserInfo = async () => {
        try {
            const userinfo = await AsyncStorage.getItem("User-Info")
            if (userinfo != null) {
                setUserLogInfo(userinfo)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View style={styles.container}>
            <StatusBar
                barStyle="dark-content"
                backgroundColor="#fff"
                translucent={true}
            />
            {/* <View style={styles.dateContainer}>
                <Text style={styles.dateText}>
                    31-08-2021
                </Text>
            </View> */}
            <View style={styles.cashSection}>
                <Text style={styles.cashAmount}>
                    $ 1350
                </Text>
                <Text style={styles.cashTitle}>
                    Cash Available
                </Text>
            </View>
            <View style={styles.catagoryWrapper}>
                <Text style={styles.catagoryHeading}>
                    Your main catagories
                </Text>
                <View style={styles.catagoryIconContainer}>
                    <TouchableOpacity style={styles.catagory} onPress={() => navigation.push('Income')}>
                        <View style={styles.catagoryIcon}>
                            <Image
                                style={{ height: 45, width: 45 }}
                                source={require('../assets/icons/catagory/income.png')} />
                        </View>
                        <View style={styles.catagoryName}>
                            <Text
                                style={{ fontSize: 16, textAlign: "center", fontWeight: "600" }}>
                                Income
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.catagory} onPress={() => navigation.push('Deposit')}>
                        <View style={styles.catagoryIcon}>
                            <Image
                                style={{ height: 45, width: 45 }}
                                source={require('../assets/icons/catagory/deposit.png')} />
                        </View>
                        <View style={styles.catagoryName}>
                            <Text
                                style={{ fontSize: 16, textAlign: "center", fontWeight: "600" }}>
                                Deposit
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.catagory} onPress={() => navigation.push('Expense')}>
                        <View style={styles.catagoryIcon}>
                            <Image
                                style={{ height: 45, width: 45 }}
                                source={require('../assets/icons/catagory/expense.png')} />
                        </View>
                        <View style={styles.catagoryName}>
                            <Text
                                style={{ fontSize: 16, textAlign: "center", fontWeight: "600" }}>
                                Expense
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.catagory} onPress={() => navigation.push('Loan')}>
                        <View style={styles.catagoryIcon}>
                            <Image
                                style={{ height: 45, width: 45 }}
                                source={require('../assets/icons/catagory/loan.png')} />
                        </View>
                        <View style={styles.catagoryName}>
                            <Text
                                style={{ fontSize: 16, textAlign: "center", fontWeight: "600" }}>
                                Loan
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
        paddingHorizontal: 10,
    },
    dateContainer: {
        flexDirection: "row",
        justifyContent: "flex-end",
    },
    dateText: {
        color: Colors.dateText,
    },
    cashSection: {
        paddingTop: 20,
        paddingBottom: 20,
        justifyContent: "center",
        backgroundColor: "#6B7AA1",
        borderRadius: 10,

    },
    cashTitle: {
        textAlign: "center",
        color: Colors.cashTitle,
        fontSize: 16,
    },
    cashAmount: {
        textAlign: "center",
        color: Colors.cashAmount,
        fontSize: 35,

    },
    catagoryWrapper: {
        alignItems: "center",
        marginTop: 10,

    },
    catagoryHeading: {
        fontSize: 20,
        color: Colors.catagoryHeading
    },
    catagoryIconContainer: {
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "space-around",
        width: "90%",
    },
    catagory: {
        backgroundColor: "#CEE5D0",
        padding: 5,
        alignItems: "center",
        borderRadius: 15,

    },
    catagoryIcon: {
        backgroundColor: "#fff",
        padding: 5,
        borderRadius: 10,
    },
    catagoryName: {
        // padding: 3,
        borderRadius: 10,
    },
})