import React, { useContext } from 'react';
import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AppContext } from '../Context/AppContext';
import { AuthContext } from '../Context/AuthContext';
import { commonStyle } from './../Config/DefaultCodes';
import ToggleDrawer from './ToggleDrawer';


const Porfile = ({ navigation }) => {
    const { userLogInInfo } = useContext(AppContext)
    const { logout } = useContext(AuthContext)
    console.log(userLogInInfo)

    return (
        <View style={styles.conatiner}>
            <StatusBar
                barStyle="dark-content"
                backgroundColor="#fff"
                translucent={true}
            />
            <ToggleDrawer
                navigation={navigation}
            />
            <View style={{ alignItems: "center" }}>
                <Image
                    style={{ width: 100, height: 100, marginTop: 50, }}
                    source={require('../assets/icons/userProfile.png')}
                />
                <View style={{ alignItems: "center", marginTop: 50, }}>
                    <Text style={{ fontSize: 20 }}>{userLogInInfo.data.email}</Text>
                    <Text style={{ fontSize: 20 }}>{userLogInInfo.data.fullName}</Text>
                    <Text style={{ fontSize: 20 }}>{userLogInInfo.data.phone}</Text>
                </View>
            </View>
            <View style={{ marginHorizontal: 20, }}>
                <TouchableOpacity
                    onPress={() => logout()}
                    style={[commonStyle.submitORsaveBtn, { backgroundColor: "#3DB2FF" }]}>
                    <Text style={{ fontSize: 20, color: "#fff" }}>Logout</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default Porfile

const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
    },

})
