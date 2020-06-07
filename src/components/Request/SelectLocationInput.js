import React, { useState } from 'react';
import { TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import SelectLocationModal from './SelectLocationModal';
const SelectLocationInput = ({ value, setValue, style }) => {
    const [nextModal, setNextModal] = useState(false);

    let containerStyle = { ...styles.container };
    if (style) {
        containerStyle = { ...containerStyle, ...style }
    }

    return <TouchableOpacity
        onPress={() => { setNextModal(true); }}
        style={containerStyle}
    >
        <TextInput
            style={styles.input}
            placeholder="Problem's Destination"
            value={value ? value.name : ''}
            editable={false}
        />
        <TouchableOpacity
            onPress={() => { setValue(null) }}
            style={styles.iconsContainer}>
            <AntDesign name="close" size={16} color="black" />
        </TouchableOpacity>
        {
            nextModal ?
                <SelectLocationModal selectLocation={setValue} mv={nextModal} close={() => { setNextModal(false) }} /> : null
        }
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        borderRadius: 12,
        backgroundColor: 'white',
        paddingHorizontal: 20,
        justifyContent: 'space-between'
    },
    input: {
        paddingVertical: 10,
        fontFamily: 'Montserrat_SemiBold',
        fontSize: 16,
        width: '90%'
    },
    iconsContainer: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
export default SelectLocationInput;