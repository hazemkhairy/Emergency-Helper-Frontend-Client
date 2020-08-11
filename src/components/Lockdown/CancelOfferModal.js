import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TextInput, Dimensions, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import Modal from 'react-native-modal';
import { cancelOffer } from '../../Utils/LockdownUtils';
import LoadingModal from '../global/LoadingModal';


const CancelOfferModal = ({ mv, close }) => {
    let mount = useRef(true);
    if (!mv)
        return null;
    const [reason, setReason] = useState('');
    const [reasonError, setReasonError] = useState('');
    const [loading, setLoading] = useState(false);
    useEffect(
        () => {
            mount.current = true;
            return () => { mount.current = false; }
        }, []
    )
    const validInput = () => {
        if (mount.current && reason.trim().length) {
            setReasonError('');
            return true;
        }
        else if (mount.current)
            setReasonError('Please enter valid Text');
        return false;
    }
    const handleSubmit = async () => {
        if (mount.current && validInput()) {
            setLoading(true)
            cancelOffer(reason).then(
                () => {
                }
            )
                .catch(
                    err => {
                        console.log('error in canceling offer');
                    }
                )
        }
    }
    if (loading)
        return <LoadingModal modalVisible={loading} />
    return <Modal isVisible={mv} >
        <KeyboardAvoidingView
            behavior={Platform.OS == "android" ? "postion" : "padding"}
            style={{ height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <View style={styles.outerContainer}>
                <View style={styles.closeRow}>
                    <TouchableOpacity
                        onPress={() => { close() }}
                    >
                        <AntDesign
                            name="close"
                            size={20}
                            color="black"
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.innerContainer}>
                    <View style={styles.titleRow}>
                        <Text style={styles.titleText}>
                            What is your problem?
                    </Text>
                    </View>
                    <View style={styles.inputRow}>
                        <TextInput
                            style={reasonError ? { ...styles.input, ...styles.errorInput } : styles.input}
                            value={reason}
                            onChangeText={(t) => { setReason(t) }}
                            placeholderTextColor={"#78849E"}
                            multiline
                            placeholder={"Tell Us what happened"}
                        />
                        <Text style={styles.errorText}>{reasonError}</Text>
                    </View>
                    <View style={styles.infoRow}>
                        <Text style={styles.infoText}>
                            We are sorry for the inconvenience
                    </Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button} onPress={() => { handleSubmit() }}>
                            <Text style={styles.buttonText}>Submit</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        </KeyboardAvoidingView>
    </Modal>
}

const styles = StyleSheet.create({
    outerContainer: {
        backgroundColor: 'white',
        borderRadius: 40,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
        width: '100%',

        height: Dimensions.get('screen').height * 0.4,
        paddingTop: '3%',
        paddingHorizontal: '5%',
        borderWidth: 1
    },
    innerContainer: {
        flex: 10,
        paddingHorizontal: '10%',
        justifyContent: 'space-between'
    },
    closeRow: {
        alignSelf: 'flex-end',
        flex: 1,
        marginRight: '7%',
        justifyContent: 'center',
    },
    titleRow: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleText: {
        fontSize: 20 * (375 / Dimensions.get('screen').width),
        fontFamily: 'Montserrat_SemiBold',
        color: '#132641',
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    inputRow: {
        flex: 7,

    },
    input: {
        flex: 1,
        borderRadius: 12,
        borderColor: '#707070',
        borderWidth: 0.2,
        backgroundColor: 'white',
        color: '#132641',
        fontSize: 12,
        fontFamily: 'Montserrat_SemiBold',
        textAlignVertical: 'top',
        padding: '5%'
    },
    infoRow: {
        flex: 3
    },
    infoText: {
        fontSize: 10,
        fontFamily: 'Montserrat',
        color: '#132641',
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 4,

    },
    button: {
        backgroundColor: '#132641',
        paddingVertical: Dimensions.get('screen').height * 0.01,
        paddingHorizontal: Dimensions.get('screen').width * 0.05,
        borderRadius: 100,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontFamily: 'Montserrat',

    },
    errorInput: {
        borderColor: 'red',
        borderWidth: 1,
    },
    errorText: {
        color: 'red',
        fontSize: 14 * (375 / Dimensions.get('screen').width),
        fontFamily: 'Montserrat_SemiBold',
        textAlign: 'center'
    }
});

export default CancelOfferModal;