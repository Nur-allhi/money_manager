import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const TransactionList = ({ amount, entryDate, catagory, id, time }) => {
    return (
        <View style={styles.container}>

            <View>
                <Text style={{}}>{catagory}</Text>
            </View>

            <View>
                <Text style={{}}>{amount} $</Text>
            </View>

            <View>
                <Text style={{}}>{time}</Text>
            </View>

        </View>
    )
}

export default TransactionList

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-around",
        borderBottomWidth: 1,
        borderBottomColor: "#152D35",
        marginTop: 10,
    }
})
