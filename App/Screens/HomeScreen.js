import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'
import Colors from '../Config/Colors'
import DefaultCodes from '../Config/DefaultCodes'

export default function HomeScreen() {
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
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: DefaultCodes.marginTopForContainer,
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
