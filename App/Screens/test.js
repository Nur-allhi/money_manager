{
    subCatagories ?
        <View style={{
            width: "95%",
            marginHorizontal: 10,
        }}>
            <Text style={{
                textAlign: "center",
                marginTop: 10,
                fontSize: 17
            }}>Available sub catagories</Text>
            <View style={{
                flex: 1,
            }}>
                <FlatList
                    style={{
                        marginTop: 10,
                        paddingVertical: 10,
                        paddingHorizontal: 10,
                        borderWidth: 3,
                        borderRadius: 10,
                        borderColor: "#DDDDDD",
                    }}
                    data={subCatagories}
                    keyExtractor={(item, index) => index.toString()}
                    ItemSeparatorComponent={ItemSeprator}
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
                />
            </View>
        </View> : null
}






{
    editModeActive ?
        <View style={{ marginTop: 10, alignItems: "center" }}>

            <TextInput
                style={commonStyle.textInput}
                defaultValue={defaultValue.oldName}
                value={textInput}
                onChangeText={text => setTextInput(text)}
            />
            <View style={commonStyle.checkBox}>
                <CheckBox
                    disabled={false}
                    tintColors={{ true: '#F54748', false: 'black' }}
                    value={toggleCheckBox}
                    onValueChange={(newValue) => setToggleCheckBox(newValue)}
                />
                <Text style={{ fontSize: 18, }}>Active</Text>
            </View>
            <TouchableOpacity
                style={[commonStyle.submitORsaveBtn, { width: "80%", backgroundColor: "#00A19D" }]}
                onPress={() => cancelUpdate()}
            >
                <Text style={{ color: "#fff", fontSize: 18 }}>
                    Cancel
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[commonStyle.submitORsaveBtn, { width: "80%" }]}
                onPress={() => updateCatagory()}>
                <Text style={{ color: "#fff", fontSize: 18 }}>
                    Update
                </Text>
            </TouchableOpacity>

        </View>
        : null
}