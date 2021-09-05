import React from 'react'
import { Text, View } from 'react-native'

const TransactionList = ({ amount, entryDate, catagory, id, time }) => {
    return (
        <View>
            <Text>{amount}</Text>
            <Text>{catagory}</Text>
            <Text>{time}</Text>
        </View>
    )
}

export default TransactionList
