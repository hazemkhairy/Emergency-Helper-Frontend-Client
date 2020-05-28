import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import PickLocationModal from './PickLocationModal'
const AddressesList = ({ addresses, onSelectLocation }) => {
    const [nextModal, setNextModal] = useState(false);
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>SEARCH RESULTS</Text>
            <PickLocationModal
                close={() => setNextModal(false)}
                mv={nextModal}
                selectLocation={onSelectLocation}
            />
            <FlatList
                ListEmptyComponent={
                    () => {
                        return <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Text>Found no search result</Text>
                        </View>
                    }
                }
                data={addresses}
                //change key to id
                keyExtractor={(item, index) => { return index.toString() }}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity style={styles.itemContainer} onPress={() => { onSelectLocation(item) }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ maxWidth: '80%' }}>
                                    <Text style={styles.itemNameText}>{item.name}</Text>
                                    <Text style={styles.itemAddressNameText}>{item.addressName}</Text>
                                </View>
                                <View style={{ justifyContent: 'center' }}>
                                    <AntDesign name="right" size={20} color="black" />
                                </View>
                            </View>
                        </TouchableOpacity>
                    )
                }}
                ListFooterComponent={
                    () => {
                        return (
                            <TouchableOpacity
                                style={styles.itemContainer}
                                onPress={() => { setNextModal(true); }}
                            >
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                                    <View style={{ maxWidth: '80%', flexDirection: 'row' }}>
                                        <View style={{ justifyContent: 'center', marginRight: '5%' }}>
                                            <AntDesign name="pushpin" size={20} color="black" />
                                        </View>
                                        <Text style={styles.itemNameText}>Pick location</Text>
                                    </View>
                                    <View style={{ justifyContent: 'center' }}>
                                        <AntDesign name="right" size={20} color="black" />
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )
                    }
                }
            />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: '4%',
    },
    headerText: {
        fontFamily: 'Montserrat_Medium',
        fontSize: 12,
        color: '#78849E',
        paddingBottom: 10
    },
    itemContainer: {
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(120,132,158,0.08)'
    },
    itemNameText: {
        fontSize: 16,
        fontFamily: 'Montserrat_Medium',
    },
    itemAddressNameText: {
        fontSize: 12,
        fontFamily: 'Montserrat',
        color: '#959DAD'
    }
});
export default AddressesList;