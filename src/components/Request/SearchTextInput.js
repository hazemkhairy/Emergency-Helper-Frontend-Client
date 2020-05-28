import React from 'react';
import { TextInput, StyleSheet, View, Dimensions, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
const SearchTextInput = ({ value, setValue, search }) => {
    return <View style={styles.container}>
        <View style={styles.leftIconContainer}>

            <AntDesign name="search1" size={20} color="black" />
        </View>
        <TextInput
            value={value}
            onChangeText={setValue}
            style={styles.textInput}
            placeholder="Location"
            onEndEditing={search}
        />
        <TouchableOpacity style={styles.rightIconContainer} onPress={() => { setValue('') }}>

            <AntDesign name="close" size={20} color="black" />
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
    }
});
export default SearchTextInput;