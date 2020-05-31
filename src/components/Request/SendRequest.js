import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import SendRequestModal from './SendRequestModal';
const SendRequest = () => {
    const [modalVisiblity, setModalVisibility] = useState(false);
    if (modalVisiblity) {
        return <SendRequestModal mV={modalVisiblity} close={() => { setModalVisibility(false); }} />
    } 
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => setModalVisibility(true)} style={styles.innerContainer}>
                <AntDesign name="up" size={24} color="black" />
                <Text style={styles.text}>Enter Your Problem</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        height: '10%',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        marginHorizontal: '3%'
    },
    innerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 20,
        marginLeft: '2%',
        fontFamily: 'Montserrat_SemiBold'
    }
})

export default SendRequest;