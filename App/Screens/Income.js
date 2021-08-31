import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';

const Income = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.pageTitle}>
                Income
            </Text>
        </View>

    )
}

export default Income

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
    },
    pageTitle: {
        textAlign: "center"
    },
})
