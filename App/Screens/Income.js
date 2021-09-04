import React, { useContext, useState } from 'react';
import { Alert, Image, Keyboard, KeyboardAvoidingView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { AppContext } from './../Context/AppContext';
import ModalForUser from './modal';

const Income = () => {
    const { modal, setModal } = useContext(AppContext)
    const [newCatagory, setNewCatagory] = useState("")
    const [subCatagories, setSubCatagories] = useState("")

    const [transactioninput, setTransactionInput] = useState({
        amount: "",
        catagory: "",
    })

    const [catagoryModalActive, setCatagoryModalActive] = useState(false)
    const [trasactionModalActive, setTrasactionModalActive] = useState(false)

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Efty', value: 'efty' },
        { label: 'namira', value: 'namira' },
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' },
        { label: 'Mahib', value: 'mahib' },
        { label: 'Arpa', value: 'arpa' },
        { label: 'Fariha', value: 'fariha' },
        { label: 'Dorin', value: 'dorin' },

    ]);

    console.log("Selected catagory", value)

    function formatAMPM(date) {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        const ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        const strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    }
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
        setCatagoryModalActive(true)
        setModal(true)
    }
    const SubCatagoryAddbuttonFunction = () => {
        addSubCatagory()
        setModal(false);
        setCatagoryModalActive(false);
    }

    const transactionAddButtonFunction = () => {
        if (transactioninput == "") {
            Alert.alert("Blank Input", "Please fill this reg form")
        } else {
            const newEntry = {
                id: Math.random(),
                date: new Date(),
                time: formatAMPM(new Date),
                amount: parseFloat(transactioninput.amount),
                catagory: value,
            }
            console.log(newEntry)
            setTransactionInput("")
            setValue("")
            setModal(false)
            setTrasactionModalActive(false)
        }

    }
    const addTranactionBtn = () => {
        setTrasactionModalActive(true);
        setModal(true)

    }
    const cancelModal = () => {
        setModal(false),
            setCatagoryModalActive(false);
        setTrasactionModalActive(false)
    }

    console.log(subCatagories)
    return (
        <View style={styles.container}>
            <Text style={styles.pageTitle}>
                Income
            </Text>


            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.addCatagoryBtn}>
                    <Text style={{ color: "#fff", textAlign: "center" }} onPress={() => addCatagory()}>Add Catagory</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.addTransactionBtn}>
                    <Text style={{ color: "#fff", textAlign: "center", }} onPress={() => addTranactionBtn()}>Add Transaction</Text>
                </TouchableOpacity>
            </View>

            <View style={{ marginTop: 40 }}>
                <Text style={{ textAlign: "center", fontSize: 20 }}>You have selected {value} as catagory </Text>
            </View>

            {catagoryModalActive ? <ModalForUser>
                <View style={styles.headerBtn}>
                    <TouchableOpacity onPress={() => cancelModal()}>
                        <Image
                            source={require("../assets/icons/modal/x.png")}
                            style={{ height: 30, width: 30 }}
                        />
                    </TouchableOpacity>
                </View>
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


            {trasactionModalActive ? <ModalForUser>
                <View style={styles.headerBtn}>
                    <TouchableOpacity onPress={() => cancelModal()}>
                        <Image
                            source={require("../assets/icons/modal/x.png")}
                            style={{ height: 30, width: 30 }}
                        />
                    </TouchableOpacity>
                </View>
                <Text style={{ textAlign: "center", fontSize: 20 }}>New Transaction</Text>

                <View style={styles.transactionAddForm}>
                    <TextInput
                        style={styles.transactionInput}
                        placeholder="Amount"
                        onChangeText={text => setTransactionInput({ ...transactioninput, amount: text })}
                    />
                    <DropDownPicker
                        style={{
                            borderColor: 0,
                            backgroundColor: "#FFF8E5",
                            padding: 5,
                        }}
                        containerStyle={{
                            marginTop: 10,
                            height: 60,
                        }}
                        dropDownContainerStyle={{
                            borderColor: 0,
                            backgroundColor: "#E8F6EF",
                            height: 150,
                        }}
                        scrollViewProps={{
                            decelerationRate: "fast",
                            indicatorStyle: "white",
                        }}
                        listMode="SCROLLVIEW"
                        dropDownDirection="TOP"
                        closeAfterSelecting={true}
                        placeholder="Select catagory"
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                    />
                    <TouchableOpacity
                        onPress={() => transactionAddButtonFunction()}
                        style={styles.tarnsactionSubmitbtn}>
                        <Text style={styles.tarnsactionSubmitbtnText}>
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
    buttonContainer: {
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "space-around",
    },
    addCatagoryBtn: {
        backgroundColor: "#345B63",
        width: 150,
        height: 40,
        justifyContent: "center",
        borderRadius: 5
    },
    addTransactionBtn: {
        backgroundColor: "#00A19D",
        width: 150,
        height: 40,
        justifyContent: "center",
        borderRadius: 5
    },
    headerBtn: {
        width: '100%',
        height: 20,
        alignItems: 'flex-end',
        justifyContent: 'center',
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
    transactionAddForm: {
        marginTop: 10,

    },
    transactionInput: {
        marginTop: 10,
        backgroundColor: "#EEEEEE",
        width: "100%",
        height: 60,
        padding: 10,
        fontSize: 18,
        borderRadius: 10,
    },
    tarnsactionSubmitbtn: {
        marginTop: 20,
        backgroundColor: "#262A53",
        height: 40,
        borderRadius: 5,
        width: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
    tarnsactionSubmitbtnText: {
        color: "white",
        fontSize: 15,
    },
})
