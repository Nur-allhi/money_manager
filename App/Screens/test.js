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
                            listMode="SCROLLVIEW"
                            // maxHeight={600}
                            // showTickIcon={true}
                            closeAfterSelecting={true}
                            placeholder="Select catagory"
                            open={dropDownOpen}
                            setOpen={setDropDownOpen}
                            value={selectedCatagory}
                            setValue={setSelectedCatagory}
                            items={parentCatagory}
                            setItems={setParentCatagory}
                        />