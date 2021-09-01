import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'

const Loan = () => {
    return (
        <View style={styles.container}>
            <Text>
                Loan
            </Text>
        </View>
    )
}

export default Loan

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
    }
})
