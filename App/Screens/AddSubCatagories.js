import CheckBox from '@react-native-community/checkbox';
import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Alert, StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { AppContext } from '../Context/AppContext';
import { commonStyle } from './../Config/DefaultCodes';
import SuccessModal from './SuccessModal';
import ToggleDrawer from './ToggleDrawer';

const AddSubCatagories = ({ navigation }) => {
    const { parentCatagory, setParentCatagory, setSuccessModal } = useContext(AppContext)

    const [textInput, setTextInput] = useState("")
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [dropDownOpen, setDropDownOpen] = useState(false);
    const [selectedMainCatagory, setSelectedMainCatagory] = useState();



    const newSubCatagory = () => {
        const name = textInput.name
        if (selectedMainCatagory == undefined) {
            Alert.alert("Catagory Null", "Please select Catagory")
        } else if (name == "") {
            Alert.alert("No name", "Please write a name")
        } else {
            const dataToSent = new FormData()
            dataToSent.append("name", textInput.name)
            dataToSent.append("parentId", selectedMainCatagory)
            dataToSent.append("isParent", false)
            dataToSent.append("isActive", toggleCheckBox)
            dataToSent.append("isCash", false)
            dataToSent.append("icon", null)
            axios.post("https://myaccount.accountingarif.com/api/v1/account/insert", dataToSent)
                .then(res => {
                    if (res.data.success == true) {
                        setSuccessModal(true);
                        setSelectedMainCatagory();
                        setToggleCheckBox(false);
                        setTextInput("")
                    }
                })
                .catch(error => console.log("Server Errr :", error))
        }
    }

    return (
        <View style={commonStyle.container}>
            <StatusBar
                barStyle="dark-content"
                backgroundColor="#fff"
                translucent={true}
            />
            <ToggleDrawer
                navigation={navigation}
            />
            <SuccessModal />
            <View style={commonStyle.formContainer}>
                <View>
                    <View style={commonStyle.formWrapper}>
                        <View >
                            <Text style={commonStyle.pageTitle}>Create sub catagory</Text>
                        </View>
                        <View style={{ alignItems: "center" }}>
                            <View style={[commonStyle.dropDownContainer,
                            dropDownOpen ? { minHeight: 260 } : null]}>
                                <DropDownPicker
                                    placeholderStyle={{
                                        color: "#5C527F",
                                        fontWeight: "bold"
                                    }}
                                    textStyle={{
                                        fontSize: 18
                                    }}
                                    labelStyle={{
                                        fontWeight: "bold"
                                    }}
                                    style={{
                                        borderColor: "#DDDDDD",
                                        borderWidth: 2,
                                    }}
                                    dropDownContainerStyle={{
                                        zIndex: 1000,
                                        elevation: 1000,
                                        marginTop: 5,
                                        paddingHorizontal: 10,
                                        paddingVertical: 10,
                                        borderWidth: 3,
                                        borderRadius: 20,
                                        borderColor: "#DDDDDD",
                                    }}
                                    selectedItemContainerStyle={{
                                        backgroundColor: "#79B4B7",
                                        borderRadius: 10,
                                        height: 50,
                                    }}
                                    placeholder="Select catagory"



                                    open={dropDownOpen}
                                    setOpen={setDropDownOpen}
                                    items={parentCatagory}
                                    setItems={setParentCatagory}
                                    value={selectedMainCatagory}
                                    setValue={setSelectedMainCatagory}
                                />
                            </View>
                        </View>
                        <View style={{ marginTop: 10, alignItems: "center" }}>
                            <TextInput
                                style={commonStyle.textInput}
                                placeholder="Sub catagory name"
                                value={textInput.name}
                                onChangeText={text => setTextInput({ ...textInput, name: text })}
                            />

                            <View style={commonStyle.checkBox}>
                                <CheckBox
                                    disabled={false}
                                    tintColors={{ true: '#F54748', false: 'black' }}
                                    value={toggleCheckBox}
                                    onValueChange={(newValue) => setToggleCheckBox(newValue)}
                                />
                                <Text style={{ fontSize: 16 }}>Active this sub catagory</Text>
                            </View>

                            <TouchableOpacity style={[commonStyle.submitORsaveBtn, { width: "80%" }]}
                                onPress={() => newSubCatagory()}>
                                <Text style={{ color: "#fff", fontSize: 18 }}>
                                    Save
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default AddSubCatagories;