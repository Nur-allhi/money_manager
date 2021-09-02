import React, { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { AppContext } from './../Context/AppContext';

const IncomeCatagories = ({ item }) => {
    const { modal, setModal } = useContext(AppContext)

    return (
        <TouchableOpacity style={styles.container} >
            <Text style={styles.text}>{item}</Text>
        </TouchableOpacity >
    )
}

export default IncomeCatagories

const styles = StyleSheet.create({
    container: {
        margin: 5,
        padding: 3,
        backgroundColor: "#fff",
        borderRadius: 10,
    },
    text: {
        textAlign: "center"
    },
})
