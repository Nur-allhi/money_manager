useEffect(() => {
    saveUserToken(loggedInUser)
}, [loggedInUser])

useEffect(() => {
    saveUserInfo(userLogInInfo)
}, [userLogInInfo])

useEffect(() => {
    getUserToken()
    getUserInfo()
}, [])


const saveUserToken = async (token) => {
    try {
        const userLogin = JSON.stringify(token)
        if (userLogin != null) {
            await AsyncStorage.setItem("IsUserlogin", userLogin)
        }
    } catch (error) {
        console.log(error)
    }
}

const saveUserInfo = async (info) => {
    try {
        const userInfo = JSON.stringify(info)
        if (userInfo != null) {
            await AsyncStorage.setItem("User-Log-IN-Info", userInfo)
            console.log("Data Saved")
        }
    } catch (error) {
        console.log(error)
    }
}



const getUserToken = async () => {
    try {
        const userLogin = await AsyncStorage.getItem("IsUserlogin")
        if (userLogin != null) {
            setLoggedInUser(JSON.parse(userLogin))
        }
    } catch (error) {
        console.log(error)
    }
}
const getUserInfo = async () => {
    try {
        const userinfo = await AsyncStorage.getItem("User-Log-IN-Info")
        if (userinfo != null) {
            setUserLogInInfo(JSON.parse(userinfo))
        }
    } catch (error) {
        console.log(error)
    }
}