import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import ToggleDrawer from './ToggleDrawer';


export default function HomeScreen({ navigation }) {
    // const { setParentCatagory } = useContext(AppContext)

    // useEffect(() => {
    //     getMainCatagoriesFromDevice()
    // }, [])


    // const getMainCatagoriesFromDevice = async () => {
    //     try {
    //         const mainCatagories = await AsyncStorage.getItem("mainCatagories")
    //         if (mainCatagories != null) {
    //             setParentCatagory(JSON.parse(mainCatagories))

    //         }
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    return (
        <View style={styles.container}>
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