import React, { useContext, useEffect, useRef, useState } from 'react';
import { Animated, Image, Modal, StyleSheet, TouchableOpacity, View } from 'react-native';
import { AppContext } from '../Context/AppContext';

const SuccessModal = () => {
    const { successModal, setSuccessModal } = useContext(AppContext)
    const [showModal, setShowModal] = useState(successModal)

    const scaleValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        toggleModal();
    }, [successModal])

    const toggleModal = () => {
        if (successModal) {
            setShowModal(true);
            Animated.spring(scaleValue, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
            }).start()
        } else {
            setTimeout(() => setShowModal(false), 200);
            Animated.timing(scaleValue, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }).start();
        }
    };

    return (
        <Modal transparent visible={showModal}>
            <View style={styles.modalBackGround}>
                <Animated.View style={[styles.modalContianer, { transform: [{ scale: scaleValue }] }]}>
                    
                    <View>
                        <View style={{
                            width: '100%',
                            height: 20,
                            alignItems: "flex-end",
                            justifyContent: 'center',
                        }}>
                            <TouchableOpacity onPress={() => setSuccessModal(false)} >
                                <Image
                                    style={{
                                        width: 30,
                                        height: 30,
                                    }}
                                    source={require("../assets/icons/modal/x.png")} />
                            </TouchableOpacity>
                        </View>
                        <Image
                            style={{
                                height: 150,
                                width: 150,
                            }}
                            source={require("../assets/icons/modal/checked.png")} />
                    </View>

                </Animated.View>
            </View>
        </Modal>
    )
}

export default SuccessModal;

const styles = StyleSheet.create({
    modalBackGround: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContianer: {
        // width: "95%",
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderRadius: 20,
        elevation: 20,
    },
})