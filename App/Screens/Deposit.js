import CheckBox from '@react-native-community/checkbox';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Alert, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';


const Deposit = () => {
    const [textInput, setTextInput] = useState()
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    const [dropDownOpen, setDropDownOpen] = useState(false);
    const [dropDownItem, setDropDownItem] = useState(null);

    const [parentCatagoryData, setParentCatagoryData] = useState([])
    const [parentCatagory, setParentCatagory] = useState([])

    useEffect(() => {
        axios.get("https://myaccount.accountingarif.com/api/v1/account/parent-without-cash")
            .then(res => setParentCatagoryData(res.data.data))
            .catch(error => console.log(error))
    }, [])


    useEffect(() => {
        setParentCatagory(
            parentCatagoryData.map((data) => ({
                label: data.name,
                value: data.id
            }))
        )
    }, [])

    const newSubCatagory = () => {
        if (textInput == "") {
            Alert.alert("Blank Input", "Please write amount and select catagory")
        } else {
            const newInput = {
                parentCatagory: dropDownItem,
                name: textInput.name,
                isActive: toggleCheckBox,
            }
            console.log(newInput)
        }
    }


    return (
        <View style={styles.container}>
            <View>
                <DropDownPicker
                    // style={{
                    //     borderColor: 0,
                    //     backgroundColor: "#EEEEEE",
                    // }}
                    // containerStyle={{
                    //     height: 70,

                    // }}
                    // dropDownContainerStyle={{
                    //     backgroundColor: "#EEEEEE",
                    //     borderColor: "#345B63"
                    // }}
                    // scrollViewProps={{
                    //     decelerationRate: "fast",
                    //     indicatorStyle: "white",
                    // }}
                    listMode="SCROLLVIEW"
                    closeAfterSelecting={true}
                    placeholder="Select catagory"
                    open={dropDownOpen}
                    value={dropDownItem}
                    items={parentCatagory}
                    setOpen={setDropDownOpen}
                    setValue={setDropDownItem}
                    setItems={setParentCatagory}
                />

                <TextInput
                    placeholder="Sub catagory name"
                    value={textInput}
                    onChangeText={text => setTextInput({ ...textInput, name: text })}
                />
                <CheckBox
                    disabled={false}
                    value={toggleCheckBox}
                    onValueChange={(newValue) => setToggleCheckBox(newValue)}
                />
                <TouchableOpacity onPress={() => newSubCatagory()}>
                    <Text>
                        Save
                    </Text>
                </TouchableOpacity>
            </View>


        </View>
    )
}

export default Deposit

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
    }
})
