import React, { useContext, useState } from 'react';
import { Alert, Button, FlatList, Keyboard, KeyboardAvoidingView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { AppContext } from './../Context/AppContext';
import IncomeCatagories from './IncomeCatagories';
import ModalForUser from './modal';

const Income = () => {
    const { modal, setModal } = useContext(AppContext)
    const [newCatagory, setNewCatagory] = useState("")
    const [subCatagories, setSubCatagories] = useState("")

    const [addCatagoryModalactive, setAddCatagoryModalactive] = useState(false)
    const [addTrasactionModalActive, setAddTrasactionModalActive] = useState(false)

    const addSubCatagory = () => {
        if (newCatagory == "") {
            Alert.alert("Blank Input", "Please write something")
        } else {
            Keyboard.dismiss();
            setSubCatagories([...subCatagories, newCatagory])
            setNewCatagory("")
        }
    }

    const addCatagory = () => {
        setAddCatagoryModalactive(true)
        setModal(true)


    }
    const SubCatagoryAddbuttonFunction = () => {
        addSubCatagory()
        setModal(false);
        setAddCatagoryModalactive(false);
    }



    const transactionAddButtonFunction = () => {
        setModal(false)
        setAddTrasactionModalActive(false)
    }

    const addTranactionBtn = () => {
        setAddTrasactionModalActive(true);
        setModal(true)

    }

    const cancelModal = () => {
        setModal(false),
            setAddCatagoryModalactive(false);
        setAddTrasactionModalActive(false)
    }

    console.log(subCatagories)
    return (
        <View style={styles.container}>
            <Text style={styles.pageTitle}>
                Income
            </Text>

            {/* Add buttons */}
            <View style={{ marginTop: 10, width: "40%" }}>
                <Button
                    onPress={() => addCatagory()}
                    title="Add catagory"
                    color="#262A53"
                />
            </View>
            <View style={{ marginTop: 10, width: "40%", }}>
                <Button
                    title="Add transaction"
                    color="#38A3A5"
                    onPress={() => addTranactionBtn()}
                />
            </View>

            {/* Sub catagories */}
            {
                subCatagories ? <View>
                    <FlatList
                        style={styles.catagoryList}
                        horizontal={true}
                        data={subCatagories}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) =>
                            <IncomeCatagories item={item} />
                        }
                    />
                </View> : null
            }


            {/* Add sub catagory Modal */}
            {addCatagoryModalactive ? <ModalForUser>
                <Button
                    onPress={() => cancelModal()}
                    title="Cancel modal"
                    color="red"
                    accessibilityLabel="Learn more about this purple button"
                />
                <Text style={{ textAlign: "center" }}>Add Sub catagory</Text>
                <KeyboardAvoidingView>
                    <View style={styles.addmoreCatagoryWrapper}>
                        <TextInput
                            style={styles.newSubCatagoryInput}
                            placeholder="Add more sub catagory"
                            placeholderTextColor="#787A91"
                            onChangeText={text => setNewCatagory(text)}
                            value={newCatagory}
                        />
                        <TouchableOpacity style={styles.subCatagoryAddBtn}
                            onPress={() => SubCatagoryAddbuttonFunction()}>
                            <Text style={styles.subCatagoryAddBtnText}>
                                Save
                            </Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </ModalForUser> : null}

            {/* Add transaction Modal */}
            {addTrasactionModalActive ? <ModalForUser>
                <Button
                    onPress={() => cancelModal()}
                    title="Cancel modal"
                    color="red"
                    accessibilityLabel="Learn more about this purple button"
                />
                <Text style={{ textAlign: "center" }}>Add new Transaction</Text>

                <View style={styles.addTransactionContainer}>
                    <TextInput
                        style={styles.addTransactionInput}
                        placeholder="Amount"
                    />
                    <TouchableOpacity onPress={() => transactionAddButtonFunction()} style={styles.addTransactionBtn}>
                        <Text style={styles.addTransactionBtnText}>
                            Save
                        </Text>
                    </TouchableOpacity>
                </View>
            </ModalForUser> : null}

        </View>

    )
}

export default Income

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
        backgroundColor: "white",
        paddingHorizontal: 10,
    },
    pageTitle: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "800"

    },
    catagoryList: {
        flexDirection: "row",
        borderRadius: 10,
        paddingHorizontal: 10,
        backgroundColor: "#FFE3E3",
        height: 40,
    },
    addmoreCatagoryWrapper: {
        alignItems: "center",
        marginBottom: 10,
    },
    newSubCatagoryInput: {
        marginTop: 10,
        backgroundColor: "#EEEEEE",
        width: "100%",
        height: 40,
        padding: 10,
        fontSize: 15,
        borderRadius: 10,
    },
    subCatagoryAddBtn: {
        marginTop: 10,
        backgroundColor: "#262A53",
        height: 40,
        borderRadius: 5,
        width: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
    subCatagoryAddBtnText: {
        color: "white",
        fontSize: 15,
    },
    addTransactionContainer: {

    },
    addTransactionInput: {
        marginTop: 10,
        backgroundColor: "#EEEEEE",
        width: "100%",
        height: 50,
        padding: 10,
        fontSize: 15,
        borderRadius: 10,
    },
    addTransactionBtn: {
        marginTop: 10,
        backgroundColor: "#262A53",
        height: 40,
        borderRadius: 5,
        width: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
    addTransactionBtnText: {
        color: "white",
        fontSize: 15,
    },
})
