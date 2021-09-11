import CheckBox from '@react-native-community/checkbox';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { ActivityIndicator, Alert, Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { AppContext } from './../Context/AppContext';
import ModalForUser from './modal';

const UpdateSubCatagories = () => {
    const { parentCatagoryData, setModal } = useContext(AppContext)
    const [subCatagories, setSubCatagories] = useState('')
    const [loading, setLoading] = useState(false)
    const [textInput, setTextInput] = useState("")
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    const [selectedCatagory, setSelectedCatagory] = useState();
    const [seletedSubCatagory, setSeletedSubCatagory] = useState();

    useEffect(() => {
        if (selectedCatagory != null) {
            const url = `https://myaccount.accountingarif.com/api/v1/account/sub-by-parent/${selectedCatagory}`
            axios.get(url)
                .then(res => setSubCatagories(res.data.data))
                .catch(error => console.log(error))
        }
    }, [selectedCatagory])

    const updateCatagory = () => {

        const name = textInput.name
        if (seletedSubCatagory == null) {
            Alert.alert("Catagory Null", "Please select Catagory")
        } else if (name == "") {
            Alert.alert("No name", "Please write a name")
        } else {
            setLoading(true)
            const dataToSent = new FormData()
            dataToSent.append("id", seletedSubCatagory)
            dataToSent.append("name", textInput.name)
            dataToSent.append("icon", null)
            dataToSent.append("isParent", false)
            dataToSent.append("parentId", selectedCatagory)
            dataToSent.append("isCash", false)
            dataToSent.append("isActive", toggleCheckBox)
            console.log(dataToSent)
            axios.put("https://myaccount.accountingarif.com/api/v1/account/update", dataToSent)
                .then(res => {
                    console.log("server Res :", res.data)
                    if (res.data.success == true) {
                        setModal(true)
                    }
                })
                .catch(error => console.log("Server Errr :", error))
        }
        console.log("tip dise")
    }
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [loading])

    if (loading) {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <ActivityIndicator size="large" color="grey" />
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <ModalForUser>
                <View>
                    <TouchableOpacity onPress={() => setModal(false)} style={{
                        width: '100%',
                        height: 20,
                        alignItems: 'flex-end',
                        justifyContent: 'center',
                    }}>
                        <Image
                            style={{
                                width: 30,
                                height: 30,
                            }}
                            source={require("../assets/icons/modal/x.png")} />
                    </TouchableOpacity>
                    <Image
                        style={{
                            height: 150,
                            width: 150,
                        }}
                        source={require("../assets/icons/modal/checked.png")} />
                </View>
            </ModalForUser>
            <View style={{ alignItems: "center", marginVertical: 20, }}>
                <Text style={{ fontSize: 25, }}>Update sub catagory</Text>
                <View style={styles.addSubCatagories}>
                    <View style={{
                        borderRadius: 10,
                        padding: 5,
                        borderColor: "#DDDDDD",
                        borderWidth: 2,
                        marginBottom: 10,
                    }}>
                        <Text style={{ fontSize: 18, marginLeft: 5, }}>Main catagory</Text>
                        <Picker
                            style={{
                                height: 40,
                                marginTop: 10,
                                marginBottom: 10,
                            }}
                            dropdownIconColor="#5C527F"
                            mode="dropdown"
                            selectedValue={selectedCatagory}
                            onValueChange={(itemValue, itemIndex) =>
                                setSelectedCatagory(itemValue)
                            }>
                            <Picker.Item label='Please select an catagory' value={null} />
                            {
                                parentCatagoryData.map(data => {
                                    return <Picker.Item
                                        key={data.id}
                                        label={data.name}
                                        value={data.id}
                                        enabled={true}
                                        style={{
                                            color: "#5C527F",
                                            fontSize: 22,
                                        }} />
                                })
                            }
                        </Picker>
                    </View>
                    <View>
                        {subCatagories ? <View style={{
                            borderRadius: 10,
                            padding: 5,
                            borderColor: "#DDDDDD",
                            borderWidth: 2,
                            marginBottom: 10,

                        }}>
                            <Text style={{
                                fontSize: 18,
                                marginLeft: 5,
                            }}>Sub catagory which will update</Text>
                            <Picker
                                style={{
                                    height: 40,
                                    marginTop: 10,
                                    marginBottom: 10,
                                }}
                                dropdownIconColor="#5C527F"
                                mode="dropdown"
                                selectedValue={seletedSubCatagory}
                                onValueChange={(itemValue, itemIndex) =>
                                    setSeletedSubCatagory(itemValue)
                                }>
                                <Picker.Item label='Please select sub catagory' value={null} />

                                {
                                    subCatagories.map(data => {
                                        return (
                                            <Picker.Item
                                                key={data.id}
                                                label={data.name}
                                                value={data.id}
                                                enabled={true}
                                                style={{
                                                    color: "#5C527F",
                                                    fontSize: 22,
                                                }} />
                                        )
                                    })
                                }
                            </Picker>
                        </View> : null}
                    </View>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Sub catagory name"
                        value={textInput.name}
                        onChangeText={text => setTextInput({ ...textInput, name: text })}
                    />

                    <View style={styles.checkBox}>
                        <CheckBox
                            disabled={false}
                            tintColors={{ true: '#F54748', false: 'black' }}
                            value={toggleCheckBox}
                            onValueChange={(newValue) => setToggleCheckBox(newValue)}
                        />
                        <Text style={{ fontSize: 16 }}>Active this sub catagory</Text>
                    </View>

                    <TouchableOpacity style={styles.submitBtn} onPress={() => updateCatagory()}>
                        <Text style={{ color: "#fff", fontSize: 18 }}>
                            Update
                        </Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    )
}

export default UpdateSubCatagories


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
    },
    addSubCatagories: {
        // marginHorizontal: 10,
        padding: 10,
        width: "80%",
    },
    textInput: {
        height: 60,
        marginBottom: 10,
        paddingLeft: 10,
        fontSize: 18,
        borderWidth: 2,
        borderColor: "#DDDDDD",
        borderRadius: 10,
        backgroundColor: "#fff",
    },
    checkBox: {
        flexDirection: "row",
        alignItems: "center",
        fontSize: 20,
        marginTop: 10,
    },
    submitBtn: {
        alignItems: "center",
        justifyContent: "center",
        height: 40,
        marginTop: 10,
        borderRadius: 10,
        backgroundColor: "#8236CB",
    },
})