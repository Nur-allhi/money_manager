import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useContext, useEffect } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import Colors from '../Config/Colors';
import { AppContext } from './../Context/AppContext';


export default function HomeScreen() {
    const {setParentCatagory} = useContext(AppContext)

    useEffect(() => {
        getMainCatagoriesFromDevice()
    }, [])

    

    const getMainCatagoriesFromDevice = async () => {
        try {
            const mainCatagories = await AsyncStorage.getItem("mainCatagories")
            if (mainCatagories != null) {
                setParentCatagory(JSON.parse(mainCatagories))

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
            <View style={styles.cashSection}>
                <Text style={styles.cashAmount}>
                    $ 1350
                </Text>
                <Text style={styles.cashTitle}>
                    Cash Available
                </Text>
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
})