import React, { useRef, useState } from 'react'
import { Animated, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'

const FloatingButton = () => {
    const [isFABopen, setFABopen] = useState(false)
    const toggleAnimation = useRef(new Animated.Value(0)).current


    const startAnimation = () => {
        const toValue = isFABopen ? 0 : 1;
        Animated.timing(toggleAnimation, {
            toValue: toValue,
            duration: 300,
            useNativeDriver: false
        }).start();
        setFABopen(!isFABopen)

    }
    return (
        <View style={{
            position: "absolute",
            alignItems: "center",
            bottom: 10,
            right: 10,
        }}>
            <TouchableWithoutFeedback >
                <Animated.View style={{
                    transform: [
                        {
                            translateY: toggleAnimation.interpolate({
                                inputRange: [0, 1],
                                outputRange: [40, -10]
                            })
                        }
                    ],
                    backgroundColor: "red",
                    width: 100,
                    height: 40,
                    borderRadius: 30,
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                    <Text style={{ color: "#fff", fontSize: 15, textAlign: "center" }}>
                        Add catagory
                    </Text>
                </Animated.View>
            </TouchableWithoutFeedback>

            <TouchableOpacity onPress={() => {
                startAnimation();
            }}>
                <Animated.View style={{
                    // transform: [
                    //     {
                    //         rotate: toggleAnimation.interpolate({
                    //             inputRange: [0, 1],
                    //             outputRange: ["0deg", "360deg"]
                    //         })
                    //     }
                    // ],
                    backgroundColor: "red",
                    width: 100,
                    height: 40,
                    borderRadius: 30,
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                    <Text style={{ color: "#fff", fontSize: 20, textAlign: "center" }}>
                        Add
                    </Text>
                </Animated.View>
            </TouchableOpacity>
        </View>
    )
}

export default FloatingButton


