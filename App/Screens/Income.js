import React, { useContext, useState } from 'react';
import { Alert, Keyboard, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AppContext } from './../Context/AppContext';
import ModalForUser from './modal';

const Income = () => {
    const { modal, setModal } = useContext(AppContext)

    const [newCatagory, setNewCatagory] = useState("")
    const [subCatagories, setSubCatagories] = useState([])

    const addSubCatagory = () => {
        if (newCatagory == "") {
            Alert.alert("Blank Input", "Please write something")
        } else {
            const newSubCatagory = {
                id: Math.random(),
                name: newCatagory
            }
            Keyboard.dismiss();
            setSubCatagories([...subCatagories, newSubCatagory])
            setNewCatagory("")
        }
    }

    console.log(subCatagories)
    return (
        <View style={styles.container}>
            <Text style={styles.pageTitle}>
                Income
            </Text>

            <ModalForUser />
            <View style={styles.AddbtnContainer}>
                <TouchableOpacity style={styles.addTrasactionBtn}>
                    <Text style={styles.btnText}>
                        Add trasaction
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.addSubCatagorynBtn} onPress={() => setModal(true)}>
                    <Text style={styles.btnText}>
                        Add Sub Catagory
                    </Text>
                </TouchableOpacity>
            </View>

            {/* <View style={addmoreCatagoryWrapper}>
                <TextInput
                    style={styles.newSubCatagory}
                    placeholder="Add more sub catagory"
                    onChangeText={text => setNewCatagory(text)}
                    value={newCatagory}
                />
                <TouchableOpacity onPress={addSubCatagory}>
                    <Text>
                        Add sub catagory
                    </Text>
                </TouchableOpacity>
            </View> */}
        </View>

    )
}

export default Income

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
        backgroundColor: "white"
    },
    pageTitle: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "800"

    },
    AddbtnContainer: {
        position: "absolute",
        flexDirection: "row",
        alignSelf: "center",
        width: "90%",
        justifyContent: "space-around",
        bottom: 10,
    },
    addTrasactionBtn: {
        backgroundColor: "#DF2E2E",
        height: 50,
        borderRadius: 5,
        padding: 8,
        justifyContent: "center"

    },
    addSubCatagorynBtn: {
        backgroundColor: "#3D087B",
        height: 50,
        borderRadius: 5,
        padding: 8,
        justifyContent: "center"

    },
    btnText: {
        color: "#fff",
        fontSize: 18,


    },
})
