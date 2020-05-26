import React, { useState } from 'react';
import { TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from 'react-navigation-hooks'
import SelectLocationModal from './SelectLocationModal';
const SelectLocationInput = ({ value, setValue }) => {
    const { navigate } = useNavigation();
    const [nextModal, setNextModal] = useState(false);
    return <TouchableOpacity
        onPress={() => {
            navigate('PickLocationScreen');
            console.log('xx')
        }}
        style={styles.container}>
        <TextInput
            style={styles.input}
            placeholder="Problem's Destination"
            value={value}
            editable={false}
        />
        <TouchableOpacity onPress={() => { console.log('x'); setNextModal(true); }} style={styles.iconsContainer}>
            <AntDesign name="close" size={16} color="black" />
        </TouchableOpacity>
        <SelectLocationModal mv={nextModal} close={()=>{setNextModal(false)}} />
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    input: {
        backgroundColor: 'white',
        borderRadius: 12,
        paddingVertical: 10,
        fontFamily: 'Montserrat_SemiBold',
        fontSize: 16,
        paddingHorizontal: 20,
        textAlignVertical: 'top',
        width: '100%'
    },
    iconsContainer: {
        position: 'absolute',
        alignSelf: 'center',
        height: '100%',
        right: 0,
        marginRight: '3%',
        alignItems: 'center',
        justifyContent: 'center', borderWidth: 1
    }
});
export default SelectLocationInput;