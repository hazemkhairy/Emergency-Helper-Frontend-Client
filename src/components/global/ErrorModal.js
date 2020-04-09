import React, { useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Modal from 'react-native-modal';
import { Ionicons } from '@expo/vector-icons'
const ErrorModal = ({ modalVisible, closeModal, message }) => {
    
    return (
        <Modal isVisible={modalVisible} >
            <View style={styles.container}>

                <View style={styles.modalHeader}>
                    <Ionicons
                        size={Math.min(Dimensions.get('window').width * 0.2, Dimensions.get('window').height * 0.1)}
                        name="md-close-circle"
                        color='white'
                    />
                </View>

                <View style={styles.modalBody}>
                    <Text style={styles.errorText}>ERROR!!!</Text>
                    <Text style={styles.messageText}>{message ? message.replace(/, /g, '\n') : 'There is some error'}</Text>
                </View>

                <View style={styles.modalFooter}>
                    <TouchableOpacity style={styles.button} onPress={() => { closeModal() }}>
                        <View >
                            <Text style={styles.buttonText}>OK</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
        </Modal>
    );
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        margin: 22,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 75,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        minHeight: '30%',
        maxHeight: '50%',
        overflow: 'hidden'
    },
    modalHeader: {
        height: '25%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 0, 0, 0.70)',

    },
    modalFooter: {
        height: '25%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalBody: {
        height: '50%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,

    },
    button: {
        height: '70%',
        width: '40%',
        borderRadius: 75,
        backgroundColor: 'rgba(255, 0, 0, 0.6)',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 3,
        borderColor: 'rgba(255,0,0,0.3)'
    },
    buttonText: {
        fontSize: 25,
        color: 'white'
    },
    errorText: {
        fontSize: 25, marginBottom: 10
    },
    messageText: {
        fontSize: 15,
    }
})
export default ErrorModal