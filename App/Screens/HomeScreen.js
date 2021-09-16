import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { commonStyle } from './../Config/DefaultCodes';
import ToggleDrawer from './ToggleDrawer';


export default function HomeScreen({ navigation }) {


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
            <Text style={{
                fontSize: 20,
                textAlign: "center",

            }}>
                Toggle The drawer
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({

})