import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Dimensions } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Modal from 'react-native-modal';
import CategorySelect from './CategorySelect'
import SelectLocationInput from './SelectLocationInput';
import { createRequest } from '../../Utils/RequestUtils'

import LoadingModal from '../global/LoadingModal';
import SuccessModal from '../global/SuccessModal';
import ErrorModal from '../global/ErrorModal';

const SendRequestModal = ({ close, mV }) => {
    const [innerVisibility, setInnerVisibility] = useState(true);

    const [loadingModal, setLoadingModal] = useState(false);
    const [successModal, setSuccessModal] = useState(false);
    const [errorModal, setErrorModal] = useState(false);
    const [errorModalMessage, setErrorModalMessage] = useState('');

    const [descripition, setDescripition] = useState('');
    const [category, setCategory] = useState('');
    const [location, setLocation] = useState(null);
    const [descripitionError, setDescripitionError] = useState('');
    const [categoryError, setCategoryError] = useState('');
    const [locationError, setLocationError] = useState(null);



    const validateInput = () => {
        let valid = true;
        if (descripition.trim().length == 0) {
            setDescripitionError(true);
            valid = false
        }
        else
            setDescripitionError(false);
        if (category == null || category.trim().length == 0) {
            setCategoryError(true);
            valid = false
        }
        else
            setCategoryError(false);
        if (location == null) {
            setLocationError(true);
            valid = false
        }
        else
            setLocationError(false);
        return valid
    }
    const sendRequest = () => {

        if (validateInput()) {
            setLoadingModal(true);

            createRequest(descripition, location.location, category).then(
                (res) => {
                    console.log('done');
                    console.log(res)
                    setLoadingModal(false);
                    setSuccessModal(true);

                }
            ).catch(
                (err) => {
                    console.log(err.response.data);
                    setErrorModalMessage(err.response.data.message);
                    setLoadingModal(false);
                    setErrorModal(true);
                }
            )
        }
    }

    const animationTiming = 1000;
    const closeHandler = () => {
        setInnerVisibility(false);
        setTimeout(() => {
            close();
        }, animationTiming + 100);
    }
    let descripitionStyle = { ...styles.commonInput, ...styles.descripitionInput };
    if (descripitionError) {
        descripitionStyle = { ...descripitionStyle, ...styles.error }
    }
    if (!mV)
        return null;
    return (
        <Modal isVisible={innerVisibility} style={styles.modal} animationInTiming={animationTiming} animationOutTiming={animationTiming}>
            {loadingModal ? <LoadingModal modalVisible={loadingModal} /> : null}
            {errorModal ? <ErrorModal modalVisible={errorModal} message={errorModalMessage} closeModal={() => { setErrorModal(false) }} /> : null}
            {successModal ? <SuccessModal modalVisible={successModal} message={'Request created'} closeModal={() => { setSuccessModal(false) }} /> : null}
            <View style={styles.container}>
                <TouchableOpacity onPress={closeHandler} style={styles.innerContainer}>
                    <AntDesign name="down" size={24} color="black" />
                    <Text style={styles.headerText}>Enter Your Problem</Text>
                </TouchableOpacity>

                <View style={styles.inputsContainer} >
                    <TextInput
                        value={descripition}
                        onChangeText={(t) => setDescripition(t)}
                        placeholder="Enter Descripition"
                        multiline
                        style={descripitionStyle}
                    />
                    <View style={styles.inputContainer}>
                        <CategorySelect
                            value={category}
                            setValue={setCategory}
                            style={categoryError ? styles.error : null}

                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <SelectLocationInput style={locationError ? styles.error : null} value={location} setValue={setLocation} />
                    </View>
                    <View style={styles.buttonContainer}>

                        <TouchableOpacity
                            onPress={() => { sendRequest() }}
                            style={styles.button}
                        >
                            <Text style={styles.buttonText} >Make Request</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modal: {
        justifyContent: 'flex-end',
        margin: 0,
        marginHorizontal: '3%',
    },
    container: {
        width: '100%',
        height: '60%',
        backgroundColor: 'rgba(255,255,255,0.7)',
        overflow: 'hidden',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        paddingTop: '5%'
    },
    innerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText: {
        fontSize: 20,
        marginLeft: '2%',
        fontFamily: 'Montserrat_SemiBold'
    },
    inputsContainer: {
        marginTop: '5%',
        paddingHorizontal: '9%',
    },
    commonInput: {
        backgroundColor: 'white',
        borderRadius: 12,
        paddingVertical: 10,
        fontFamily: 'Montserrat_SemiBold',
        fontSize: 16,
        paddingHorizontal: 20,
        textAlignVertical: 'top',
    },
    inputContainer: {
        marginTop: '5%',
    },
    descripitionInput: {
        height: Dimensions.get('window').height * 0.13,
    },
    buttonContainer: {
        width: '100%',
        marginTop: '10%',
        justifyContent: 'center'
    },
    button: {
        backgroundColor: '#132641',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 35,
        height: Dimensions.get('screen').height * 0.07
    },
    buttonText: {

        fontFamily: 'Montserrat_SemiBold',
        fontSize: 16 * (812 / Dimensions.get('screen').height),
        color: '#FFF',
        textAlignVertical: 'center'
    },
    error: {
        borderColor: 'red',
        borderWidth: 2
    }
})

export default SendRequestModal;