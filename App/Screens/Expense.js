import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'

const Expense = () => {
    return (
        <View style={styles.container}>
            <Text>
                Expense
            </Text>
        </View>
    )
}

export default Expense

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
    }
})
