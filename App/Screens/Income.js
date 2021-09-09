import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import {
    Alert, FlatList, Image, Keyboard, StatusBar, StyleSheet, Text, TextInput,
    TouchableOpacity, View
} from 'react-native';
import Collapsible from 'react-native-collapsible';
import DropDownPicker from 'react-native-dropdown-picker';
import { AppContext } from './../Context/AppContext';
import ModalForUser from './modal';
import TransactionList from './TransactionList';



const Income = () => {
    const [isCollapsed, setIsCollapsed] = useState(false)
    const { setModal, transactions, setTransactions,
        incomeSubCatagories, setIncomeSubCatagories, } = useContext(AppContext)
    const [catagoryModalActive, setCatagoryModalActive] = useState(false)

    useEffect(() => {
axios
    }, [])


    useEffect(() => {

        if (transactions.length > 0) {
            saveIncomeDataToDevice(transactions);
        }
    }, [transactions])

    useEffect(() => {
        getIncomeDataFromDevice();
    }, [])

    useEffect(() => {
        if (incomeSubCatagories.length > 0) {
            saveIncomeSubCatagoriesToDevice(incomeSubCatagories);

        }
    }, [incomeSubCatagories])

    useEffect(() => {
        getIncomeSubCatagoriesFromDevice();
    }, [])


    const [catagoryInput, setCatagoryInput] = useState("")
    const [transactioninput, setTransactionInput] = useState("")

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);



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

    const transactionAddButtonFunction = () => {
        const amount = transactioninput
        if (amount == "") {
            Alert.alert("Blank Input", "Please write amount and select catagory")
        } else {
            const newEntry = {
                id: Math.random(),
                entryDate: new Date(),
                time: formatAMPM(new Date),
                amount: parseFloat(transactioninput.amount),
                catagory: value,
            }
            setTransactions([...transactions, newEntry])
            setTransactionInput("")
            setValue("")
            setModal(false)
        }

    }

    const SubCatagoryAddbuttonFunction = () => {
        if (catagoryInput == "") {
            Alert.alert("Blank Input", "Please write something")
        } else {
            const newCatagory = {
                label: catagoryInput.toUpperCase(), value: catagoryInput.toLowerCase()
            }
            Keyboard.dismiss();
            setIncomeSubCatagories([...incomeSubCatagories, newCatagory])
            setCatagoryInput("")
            setModal(false);
            setCatagoryModalActive(false);
        }
    }
    const cancelModal = () => {
        setModal(false)
        setCatagoryModalActive(false)
    }

    const addCatagory = () => {
        setCatagoryModalActive(true)
        setModal(true)

    }

    // Store to device:
    const saveIncomeDataToDevice = async (transactions) => {
        try {
            const stringyfyData = JSON.stringify(transactions)

            if (stringyfyData != null) {
                await AsyncStorage.setItem("IncomeData", stringyfyData)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const saveIncomeSubCatagoriesToDevice = async (incomeSubCatagories) => {
        try {
            const stringyfyData = JSON.stringify(incomeSubCatagories)
            if (stringyfyData != null) {
                await AsyncStorage.setItem("IncomeSubCatagories", stringyfyData)
            }
        } catch (error) {
            console.log(error)
        }
    }

    // Get stored data:
    const getIncomeDataFromDevice = async () => {
        try {
            const incomes = await AsyncStorage.getItem("IncomeData");
            if (incomes != null) {
                setTransactions(JSON.parse(incomes))
            }
        } catch (error) {
            console.log(error)
        }
    }

    const getIncomeSubCatagoriesFromDevice = async () => {
        try {
            const incomeSubCatagories = await AsyncStorage.getItem("IncomeSubCatagories")
            if (incomeSubCatagories != null) {
                setIncomeSubCatagories(JSON.parse(incomeSubCatagories))
            }
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <View style={styles.container}>
            {/* <ScrollView> */}
            <Text style={styles.pageTitle}>
                Income
            </Text>

            <Text style={{ textAlign: "center", fontSize: 20 }}>New Transaction</Text>

            <View style={styles.transactionAddForm}>
                <View style={{ alignItems: "center" }}>
                    <TextInput
                        style={styles.transactionInput}
                        placeholder="Amount"
                        keyboardType="numeric"
                        onChangeText={text => setTransactionInput({ ...transactioninput, amount: text })}
                        value={transactioninput.amount}
                    />
                </View>
                <View style={styles.catagoryDropdownContainer}>
                    <View style={{ width: "45%" }}>
                        {incomeSubCatagories ? <DropDownPicker
                            style={{
                                borderColor: 0,
                                backgroundColor: "#EEEEEE",
                            }}
                            containerStyle={{
                                height: 70,

                            }}
                            dropDownContainerStyle={{
                                backgroundColor: "#EEEEEE",
                                borderColor: "#345B63"
                            }}
                            scrollViewProps={{
                                decelerationRate: "fast",
                                indicatorStyle: "white",
                            }}
                            listMode="SCROLLVIEW"
                            closeAfterSelecting={true}
                            placeholder="Select catagory"
                            open={open}
                            value={value}
                            items={incomeSubCatagories}
                            setOpen={setOpen}
                            setValue={setValue}
                            setItems={setIncomeSubCatagories}
                        /> : <View style={{
                            borderColor: 0,
                            alignItems: "center",
                        }}>
                            <Text style={{ textAlign: "center" }}>Add Catagory Here</Text>
                        </View>
                        }
                    </View>

                    <TouchableOpacity style={styles.addCatagoryBtn}>
                        <Text style={{ color: "#000", textAlign: "center" }} onPress={() => addCatagory()}>Add Catagory</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ alignItems: "center" }}>
                    <TouchableOpacity
                        onPress={() => transactionAddButtonFunction()}
                        style={styles.tarnsactionSubmitbtn}>
                        <Text style={styles.tarnsactionSubmitbtnText}>
                            Save to the list
                        </Text>
                    </TouchableOpacity>
                </View>
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
                <Text style={{ textAlign: "center", fontSize: 20 }}>Add Sub catagory</Text>

                <View style={styles.addSubCatagoryWrapper}>
                    <TextInput
                        style={styles.subCatagoryInput}
                        placeholder="Add Catagory"
                        placeholderTextColor="#787A91"
                        onChangeText={text => setCatagoryInput(text)}
                        value={catagoryInput}
                    />
                    <TouchableOpacity style={styles.subCatagoryAddBtn}
                        onPress={() => SubCatagoryAddbuttonFunction()}>
                        <Text style={styles.subCatagoryAddBtnText}>
                            Save
                        </Text>
                    </TouchableOpacity>
                </View>

            </ModalForUser> : null}


            <View>
                <TouchableOpacity
                    onPress={() => setIsCollapsed(!isCollapsed)}
                    style={styles.seeTransaction}>
                    <Text style={styles.seeTransactionText}>
                        See Income Data
                    </Text>
                </TouchableOpacity>
                <View>
                    <Collapsible collapsed={isCollapsed}>
                        <FlatList
                            style={{
                                marginTop: 10,
                                borderWidth: 1,
                                borderRadius: 10,
                                maxHeight: 445
                            }}
                            data={transactions}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) =>
                                <TransactionList
                                    amount={item.amount}
                                    catagory={item.catagory}
                                    entryDate={item.entryDate}
                                    id={item.id}
                                    time={item.time}
                                />
                            }
                        />
                    </Collapsible>
                </View>
            </View>
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
        height: "100%",
    },
    pageTitle: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "800"
    },


    transactionAddForm: {

    },
    transactionInput: {
        marginTop: 10,
        marginBottom: 20,
        backgroundColor: "#EEEEEE",
        width: "90%",
        height: 60,
        padding: 10,
        fontSize: 18,
        borderRadius: 10,
    },
    catagoryDropdownContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
    },
    addCatagoryBtn: {
        justifyContent: "center",
        marginTop: -20,
        height: 47,
        width: "45%",
        borderRadius: 5,
        backgroundColor: "#EEEEEE",
    },
    tarnsactionSubmitbtn: {
        alignItems: "center",
        justifyContent: "center",
        height: 40,
        width: "90%",
        borderRadius: 5,
        backgroundColor: "#E05D5D",
    },
    tarnsactionSubmitbtnText: {
        color: "white",
        fontSize: 15,
    },



    headerBtn: {
        height: 20,
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    addSubCatagoryWrapper: {
        alignItems: "center",
        marginBottom: 10,
        marginTop: 10,
    },
    subCatagoryInput: {
        marginTop: 10,
        backgroundColor: "#EEEEEE",
        width: 200,
        height: 50,
        padding: 10,
        fontSize: 18,
        borderRadius: 10,
    },
    subCatagoryAddBtn: {
        marginTop: 10,
        backgroundColor: "#57CC99",
        height: 40,
        borderRadius: 5,
        width: 200,
        alignItems: "center",
        justifyContent: "center"
    },
    subCatagoryAddBtnText: {
        color: "white",
        fontSize: 15,
    },
    seeTransaction: {
        marginTop: 20,
        backgroundColor: "#6B7AA1",
        height: 40,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center"
    },
    seeTransactionText: {
        color: "white",
        fontSize: 18,
    },
})
