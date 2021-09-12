import React, { useContext } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { AppContext } from '../Context/AppContext';
import ModalForUser from './modal';

const successModal = () => {
    const { setModal } = useContext(AppContext)

    return (
        <>
            <ModalForUser>
                <View>
                    <TouchableOpacity onPress={() => setModal(false)} style={{
                        width: '100%',
                        height: 20,
                        alignItems: 'flex-end',
                        justifyContent: 'center',
                    }}>
                        <Image
                            style={{
                                width: 30,
                                height: 30,
                            }}
                            source={require("../assets/icons/modal/x.png")} />
                    </TouchableOpacity>
                    <Image
                        style={{
                            height: 150,
                            width: 150,
                        }}
                        source={require("../assets/icons/modal/checked.png")} />
                </View>
            </ModalForUser>
        </>
    )
}

export default successModal;
