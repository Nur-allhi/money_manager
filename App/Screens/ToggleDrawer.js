import { useRoute } from '@react-navigation/core';
import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';

const ToggleDrawer = ({ navigation }) => {
    const routeName = useRoute()
    return (
        <View style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#79B4B7",
            paddingHorizontal: 15,
            marginHorizontal: 5,
            paddingVertical: 10,
            borderRadius: 5,
        }}>
            <View>
                {routeName.name == "Home" ? null :
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image
                            style={{
                                height: 30,
                                width: 30,
                            }}
                            source={require("../assets/icons/back.png")}
                        />
                    </TouchableOpacity>}
            </View>
            <View>
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


        </View >
    )
}

export default ToggleDrawer;
