import React from 'react';
import { TextInput, StyleSheet, View, Dimensions, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
const SearchTextInput = ({ value, setValue, search, close }) => {
    return <View style={styles.container}>
        <TouchableOpacity onPress={close} style={styles.leftIconContainer}>

            <AntDesign name="left" size={20} color="black" />
        </TouchableOpacity>
        <TextInput
            value={value}
            onChangeText={setValue}
            style={styles.textInput}
            placeholder="Location"
        />
        <TouchableOpacity style={styles.rightIconContainer} onPress={() => { search() }}>

            <AntDesign name="search1" size={20} color="black" />
        </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 12,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: '5%',
        height: 35 * (812 / Dimensions.get('screen').height),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.51,
        shadowRadius: 13.16,

        elevation: 20,
    },
    leftIconContainer: {
        borderRightColor: '#F4F4F6',
        borderRightWidth: 1,
        marginRight: '1%',
        width: '10%',
        alignItems: 'center'
    },
    rightIconContainer: {

        marginLeft: '1%',
        width: '10%',
        alignItems: 'center'
    },
    textInput: {

        fontFamily: 'Montserrat_SemiBold',
        fontSize: 16 * (812 / Dimensions.get('screen').height),

        textAlignVertical: 'center',
        width: '80%',
        height: '100%'
    }
});
export default SearchTextInput;