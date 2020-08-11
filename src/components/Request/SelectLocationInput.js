import React, { useState } from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import SelectLocationModal from './SelectLocationModal';
import { color } from 'react-native-reanimated';
const SelectLocationInput = ({ value, setValue, style }) => {
    const [nextModal, setNextModal] = useState(false);

    let containerStyle = { ...styles.container };
    if (style) {
        containerStyle = { ...containerStyle, ...style }
    }
    if (nextModal)
        return <SelectLocationModal selectLocation={setValue} mv={nextModal} close={() => { setNextModal(false) }} />

    return <TouchableOpacity
        onPress={() => { setNextModal(true); }}
        style={containerStyle}
    >
        <View style={styles.inputContainer}>

            <Text
                style={value && value.name ? styles.input : { ...styles.input, color: 'rgba(11,11,11,0.2)' }}
            >
                {value ? value.name : "Problem's Destination"}

            </Text>

        </View>
        <TouchableOpacity
            onPress={() => { setValue(null) }}
            style={styles.iconsContainer}>
            <AntDesign name="close" size={16} color="black" />
        </TouchableOpacity>
    </TouchableOpacity >
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        borderRadius: 12,
        backgroundColor: 'white',
        paddingHorizontal: 20,
        justifyContent: 'space-between',
    },
    input: {
        paddingVertical: 10,
        fontFamily: 'Montserrat_SemiBold',
        fontSize: 16,
        width: '100%'
    },
    inputContainer: {
        flex: 9
    },
    iconsContainer: {
        flex: 1,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
export default SelectLocationInput;