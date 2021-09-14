import { StatusBar, StyleSheet } from 'react-native'



export const commonStyle = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
    },
    formContainer: {
        paddingHorizontal: 10,
    },
    formWrapper: {
        marginTop: 10,
    },
    pageTitle: {
        fontSize: 25,
        textAlign: "center",
    },
    dropDownContainer: {
        width: "80%",
        marginTop: 10,
    },

    // TextInput:
    textInput: {
        width: "80%",
        height: 60,
        marginBottom: 10,
        paddingLeft: 10,
        fontSize: 18,
        borderWidth: 2,
        borderColor: "#DDDDDD",
        borderRadius: 10,
        backgroundColor: "#fff",
    },

    // CheckBox:
    checkBox: {
        flexDirection: "row",
        alignItems: "center",
    },

    // Button:
    smallButton: {
        width: 50,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        backgroundColor: "#22577A"
    },
    submitORsaveBtn: {
        alignItems: "center",
        justifyContent: "center",
        height: 40,
        marginTop: 10,
        borderRadius: 10,
        backgroundColor: "#8236CB",
    },
})