import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'

const Deposit = () => {
    return (
        <View style={styles.container}>
            <Text>
                Deposit
            </Text>
        </View>
    )
}

export default Deposit

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
    }
})
