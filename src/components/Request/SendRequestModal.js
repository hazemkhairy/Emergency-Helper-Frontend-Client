import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Dimensions } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Modal from 'react-native-modal';
import CategorySelect from './CategorySelect'
import SelectLocationInput from './SelectLocationInput';
const SendRequestModal = ({ close }) => {
    const [innerVisibility, setInnerVisibility] = useState(true);
    const [descripition, setDescripition] = useState('');
    const [category, setCategory] = useState('');
    const [location, setLocation] = useState(null);


    const animationTiming = 1000;
    const closeHandler = () => {
        setInnerVisibility(false);
        setTimeout(() => {
            close();
        }, animationTiming + 100);
    }
    return (
        <Modal isVisible={innerVisibility} style={styles.modal} animationInTiming={animationTiming} animationOutTiming={animationTiming}>
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
                        style={{ ...styles.commonInput, ...styles.descripitionInput }}
                    />
                    <View style={styles.inputContainer}>

                        <CategorySelect value={category} setValue={setCategory} />
                    </View>
                    <View style={styles.inputContainer}>
                        <SelectLocationInput toggle={setInnerVisibility} />
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
    }
})

export default SendRequestModal;