import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import React, { useContext } from 'react';
import { Image, Text, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ChartOfAccountList from '../Screens/ChartOfAccountList';
import { AppContext } from './../Context/AppContext';
import { AuthContext } from './../Context/AuthContext';
import AddChartOfAccount from './../Screens/AddChartOfAccount';
import Porfile from './../Screens/Porfile';
import HomeStackNavigation from './HomeStackNavigation';

const Drawer = createDrawerNavigator()


const UserView = () => {
    const { userLogInInfo } = useContext(AppContext)

    return (
        <View style={{
            height: 100,
            marginTop: 50,
            alignItems: "center",
            justifyContent: "center"
        }}>
            <Image
                style={{ width: 50, height: 50, marginBottom: 10 }}
                source={require('../assets/icons/user.png')}
            />
            <Text style={{ fontSize: 17, fontWeight: "bold" }}>{userLogInInfo.data.fullName}</Text>
        </View>
    )
}

const CustomDrawer = (props) => {
    const { logout } = useContext(AuthContext)
    return (
        <View style={{ flex: 1, }}>
            <UserView />
            <DrawerContentScrollView>
                <DrawerItemList {...props}
                    activeTintColor="#00A19D"
                />
            </DrawerContentScrollView>
            <DrawerItem
                onPress={() => logout()}
                label="Logout"
                icon={({ size, color }) => (
                    <MaterialIcons name="logout" size={size} color={color} />
                )}
            />
        </View>
    )
}


function DrawerNavigation() {
    return (
        <Drawer.Navigator initialRouteName="Home" drawerPosition="right"
            drawerType="slide"
            edgeWidth={100}
            drawerContentOptions={{
                labelStyle: { fontSize: 17, fontWeight: "bold" }
            }}
            drawerContent={(props) => <CustomDrawer {...props} />}
            drawerStyle={{
                width: 250,
            }}
        >
            <Drawer.Screen name="Home" component={HomeStackNavigation}
                options={{
                    drawerIcon: ({ size, color }) => (
                        <Feather name="home" size={size} color={color} />
                    )
                }}
            />
            <Drawer.Screen name="Add" component={AddChartOfAccount}
                options={{
                    drawerIcon: ({ size, color }) => (
                        <MaterialIcons name="add" size={size} color={color} />
                    )
                }}
            />
            <Drawer.Screen name="List" component={ChartOfAccountList}
                options={{
                    drawerIcon: ({ size, color }) => (
                        <Feather name="list" size={size} color={color} />
                    )
                }}
            />
            <Drawer.Screen name="Profile" component={Porfile}
                options={{
                    drawerIcon: ({ size, color }) => (
                        <Feather name="user" size={size} color={color} />
                    )
                }}
            />
        </Drawer.Navigator>
    )
}
export default DrawerNavigation
