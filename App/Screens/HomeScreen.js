import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useContext, useEffect } from 'react';
import { Image, StatusBar, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AppContext } from './../Context/AppContext';


export default function HomeScreen({ navigation }) {
    const { setParentCatagory } = useContext(AppContext)

    useEffect(() => {
        getMainCatagoriesFromDevice()
    }, [])



    const getMainCatagoriesFromDevice = async () => {
        try {
            const mainCatagories = await AsyncStorage.getItem("mainCatagories")
            if (mainCatagories != null) {
                setParentCatagory(JSON.parse(mainCatagories))

            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View style={styles.container}>
            <StatusBar
                barStyle="dark-content"
                backgroundColor="#fff"
                translucent={true}
            />
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

            <Text style={{
                fontSize: 20,
                textAlign: "center",

            }}>
                Toggle The drawer
            </Text>


            {/* <View style={styles.cashSection}>
                <Text style={styles.cashAmount}>
                    $ 1350
                </Text>
                <Text style={styles.cashTitle}>
                    Cash Available
                </Text>
            </View> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
        paddingHorizontal: 10,
    },
    cashSection: {
        paddingTop: 20,
        paddingBottom: 20,
        justifyContent: "center",
        // backgroundColor: "#6B7AA1",
        borderRadius: 10,
    },
    cashTitle: {
        textAlign: "center",
        color: "black",
        fontSize: 16,
    },
    cashAmount: {
        textAlign: "center",
        color: "black",
        fontSize: 35,
    },
})