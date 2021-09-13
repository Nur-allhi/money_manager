import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

const Edit_SubCatagories = ({ item }) => {
    console.log(item)
    return (
        <View style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 5,
            marginTop: 10,
        }}>
            <Text>Its working</Text>
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
    )
}

export default Edit_SubCatagories
