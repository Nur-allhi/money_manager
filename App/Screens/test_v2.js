import CheckBox from '@react-native-community/checkbox';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { commonStyle } from './../Config/DefaultCodes';
import { AppContext } from './../Context/AppContext';

const UpdateSubCatagories_v2 = ({ navigation }) => {
    const { parentCatagory, setParentCatagory, } = useContext(AppContext)
    const [dropDownOpen, setDropDownOpen] = useState(false);
    const [selectedMainCatagory, setSelectedMainCatagory] = useState(null);
    const [subCatagories, setSubCatagories] = useState('');
    const [subCatagoriesWithData, setSubCatagoriesWithData] = useState('')

    const [textInput, setTextInput] = useState(null);
    const [toggleCheckBox, setToggleCheckBox] = useState(false);
    const [defaultValue, setDefaultValue] = useState();
    const [editModeActive, setEditModeActive] = useState(false);



    // fetch-Sub-Catagories: 
    useEffect(() => {
        if (selectedMainCatagory != null) {
            const url = `https://myaccount.accountingarif.com/api/v1/account/sub-by-parent/${selectedMainCatagory}`
            axios.get(url)
                .then(res => {
                    setSubCatagoriesWithData(res.data.data)
                })
                .catch(error => console.log(error))
        }
    }, [selectedMainCatagory])

    useEffect(() => {
        if (subCatagoriesWithData.length > 0) {
            setSubCatagories(
                subCatagoriesWithData.map((data) => ({
                    name: data.name,
                    isActive: data.isActive,
                    id: data.id,
                    parentId: data.parentId,
                }))
            )
        }

    }, [subCatagoriesWithData])

    const editTheSubCatagory = (id, name, parentId) => {
        const update = {
            oldName: name,
            catagoryId: id,
            parentId: parentId,
        }
        setEditModeActive(true)
        setDefaultValue(update)
    }

    const updateCatagory = () => {
        const update = {
            name: textInput,
            isActive: toggleCheckBox,
            id: defaultValue.catagoryId,
            parentId: defaultValue.parentId
        }
        console.log(update)

        // const dataToSent = new FormData();
        // dataToSent.append("id", defaultValue.catagoryId);
        // dataToSent.append("name", textInput);
        // dataToSent.append("icon", null)
        // dataToSent.append("isParent", false);
        // dataToSent.append("parentId", selectedCatagory);
        // dataToSent.append("isCash", false);
        // dataToSent.append("isActive", toggleCheckBox);
        // console.log(dataToSent);
        // axios.post("https://myaccount.accountingarif.com/api/v1/account/update", dataToSent)
        //     .then(res => {
        //         console.log("server Res :", res.data)
        //         if (res.data.success == true) {
        //             setModal(true)
        //         }
        //     })
        //     .catch(error => console.log("Server Errr :", error))

        setDefaultValue(null)
        setEditModeActive(false)
    }


    return (
        <View style={commonStyle.container}>

            <View style={{
                position: "absolute",
                left: 10,
                top: 20,
            }}>
                <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                    <Image
                        style={{
                            height: 30,
                            width: 30,
                        }}
                        source={require("../assets/icons/menu.png")}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.formContainer}>
                <View style={styles.formWrapper}>
                    <View>
                        <Text style={commonStyle.pageTitle}>
                            Update sub catagories
                        </Text>
                    </View>
                    <View style={{ alignItems: "center" }}>
                        <View style={[commonStyle.dropDownContainer, dropDownOpen ? { minHeight: 260 } : null]}>
                            <DropDownPicker
                                open={dropDownOpen}
                                value={selectedMainCatagory}
                                items={parentCatagory}
                                setOpen={setDropDownOpen}
                                setValue={setSelectedMainCatagory}
                                setItems={setParentCatagory}
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
                                value={selectedMainCatagory}
                                items={parentCatagory}
                                setOpen={setDropDownOpen}
                                setValue={setSelectedMainCatagory}
                                setItems={setParentCatagory}
                            />
                        </View>
                    </View>

                    {editModeActive ?

                        <View style={{ marginTop: 10, alignItems: "center" }}>

                            <TextInput
                                style={commonStyle.textInput}
                                defaultValue={defaultValue.oldName}
                                value={textInput}
                                onChangeText={text => setTextInput(text)}
                            />

                            <View style={{
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center"
                            }}>
                                <CheckBox
                                    disabled={false}
                                    tintColors={{ true: '#F54748', false: 'black' }}
                                    value={toggleCheckBox}
                                    onValueChange={(newValue) => setToggleCheckBox(newValue)}
                                />
                                <Text style={{ fontSize: 18, }}>Active</Text>
                            </View>
                            <TouchableOpacity
                                style={[commonStyle.submitORsaveBtn, { width: "80%" }]}
                                onPress={() => updateCatagory()}>
                                <Text style={{ color: "#fff", fontSize: 18 }}>
                                    Update
                                </Text>
                            </TouchableOpacity>
                        </View>
                        : null}

                    <View style={{
                        maxHeight: 500,
                        width: "95%",
                        marginHorizontal: 10,
                    }}>
                        <Text style={{ textAlign: "center", marginTop: 10, fontSize: 17 }}>Available sub catagories</Text>
                        {subCatagories ? <FlatList

                            style={{
                                marginTop: 10,
                                paddingVertical: 10,
                                paddingHorizontal: 10,
                                borderWidth: 3,
                                borderRadius: 10,
                                borderColor: "#DDDDDD",
                            }}
                            data={subCatagories}
                            renderItem={({ item }) => (
                                <View style={{
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: 5,
                                    marginTop: 10,
                                }}>
                                    <View>
                                        <Text style={{
                                            fontSize: 20,
                                        }}>{item.name}</Text>
                                    </View>

                                    <TouchableOpacity style={commonStyle.smallButton}
                                        onPress={() => editTheSubCatagory(item.id, item.name, item.parentId)}
                                    >
                                        <Text style={{ color: "#fff" }}>Edit</Text>
                                    </TouchableOpacity>

                                </View>
                            )}
                            keyExtractor={(item, index) => index.toString()}
                        /> : nulls}
                    </View>


                </View>
            </View>

        </View >
    )
}

export default UpdateSubCatagories_v2;

const styles = StyleSheet.create({
    formContainer: {
        paddingHorizontal: 10,
    },
    formWrapper: {
        marginTop: 30,
        // alignItems: "center"
    }
})
