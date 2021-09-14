import { useRoute } from '@react-navigation/core';
import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';

const ToggleDrawer = ({ navigation }) => {
    const routeName = useRoute()
    return (
        <View style={{
            marginTop: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginHorizontal: 10,
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
