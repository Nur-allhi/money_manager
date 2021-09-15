import CheckBox from '@react-native-community/checkbox';
import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { commonStyle } from './../Config/DefaultCodes';

const EditChartOfAccount = ({ defaultValue, setTextInput,
    textInput, toggleCheckBox, setToggleCheckBox,
    updateCatagory }) => {
    return (

        <View style={{ marginTop: 10, alignItems: "center" }
        } >
            <TextInput
                style={commonStyle.textInput}
                defaultValue={defaultValue?.oldName}
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
                style={[commonStyle.submitORsaveBtn, { width: "80%" }]}
                onPress={() => updateCatagory()}>
                <Text style={{ color: "#fff", fontSize: 18 }}>
                    Update
                </Text>
            </TouchableOpacity>
        </View >

    )
}

export default EditChartOfAccount
