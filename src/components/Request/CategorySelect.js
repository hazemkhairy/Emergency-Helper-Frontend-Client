import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { getAllCategories } from '../../Utils/CategoryUtils'
import RNPickerSelect from 'react-native-picker-select';

import { Ionicons } from '@expo/vector-icons'
const CategorySelect = ({ value, setValue, style }) => {

    const [allCategories, setAllCategories] = useState([]);

    useEffect(
        () => {
            const pre = async () => {
                const cat = await getAllCategories();
                setAllCategories(cat.map(o => { return { label: o.name, value: o.name } }));
            }
            pre();
        }
        , []
    )

    return <View style={styles.container}>
        <RNPickerSelect
            placeholder={{ label: 'Problem Category', value: null }}
            value={value}
            onValueChange={(item) => { setValue(item) }}
            items={allCategories}
            useNativeAndroidPickerStyle={false}
            style={{
                placeholder: { ...styles.multiSelectPlaceholder },
                iconContainer: { ...styles.iconContainer },
                inputAndroid: { ...styles.input },
                inputIOS: { ...styles.input }
            }}
            Icon={() => { return <Ionicons name="ios-arrow-down" size={24} color="#132641" /> }}
        />
    </View>
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 12,
        justifyContent: 'center',
        paddingHorizontal: 20,
        height: Dimensions.get('window').height * 0.07,
    },
    multiSelectPlaceholder: {
        fontFamily: 'Montserrat_SemiBold',
        fontSize: 16,
        fontWeight: 'normal'
    },
    iconContainer: {
        alignSelf: 'center'
    },
    input: {
        fontFamily: 'Montserrat_SemiBold',
        fontSize: 16,
    }
});

export default CategorySelect;