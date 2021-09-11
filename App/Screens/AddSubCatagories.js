import CheckBox from '@react-native-community/checkbox';
import React, { useContext, useState } from 'react';
import { Alert, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { AppContext } from './../Context/AppContext';

const AddSubCatagories = () => {

    const { parentCatagory, setParentCatagory } = useContext(AppContext)
    const [textInput, setTextInput] = useState("")
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    const [dropDownOpen, setDropDownOpen] = useState(false);
    const [dropDownItem, setDropDownItem] = useState(null);


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
            <View style={{ alignItems: "center", marginVertical: 20, }}>
                <Text style={{ fontSize: 18, }}>Create sub catagory</Text>
                <View style={styles.addSubCatagories}>
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
                            backgroundColor: "#fff",
                            borderColor: "#DDDDDD",
                            borderWidth: 2,
                        }}

                        dropDownContainerStyle={{
                            marginTop: 5,
                            backgroundColor: "#fff",
                            borderColor: "#DDDDDD",
                            borderWidth: 3,
                            paddingHorizontal: 10,
                            paddingVertical: 10,
                            borderRadius: 20,
                        }}
                        selectedItemContainerStyle={{
                            backgroundColor: "#FFF1F1",
                            borderRadius: 10,
                            height: 50,
                        }}
                        maxHeight={400}
                        showTickIcon={true}
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
                        <Text style={{ fontSize: 16}}>Active this sub catagory</Text>
                    </View>
                    <TouchableOpacity style={styles.submitBtn} onPress={() => newSubCatagory()}>
                        <Text style={{ color: "#fff", fontSize: 18 }}>
                            Save
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default AddSubCatagories

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
    },
    addSubCatagories: {
        marginHorizontal: 10,
        padding: 10,
        width: "80%",
    },
    textInput: {
        height: 60,
        marginTop: 10,
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
        backgroundColor: "#FF6B6B",
    },
})