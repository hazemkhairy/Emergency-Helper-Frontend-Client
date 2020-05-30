import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import MapDisplay from '../global/MapDisplay';
import Modal from 'react-native-modal';
import AddressesList from './AddressesList'
import { getAllSavedAddresses, getAddressesByName } from '../../Utils/AddressesUtils'
import SearchTextInput from './SearchTextInput';

const SelectLocationModal = ({ mv, close, selectLocation }) => {

    const [addresses, setAddresses] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const selectLoc = async (item) => {
        selectLocation(item);
        close();
    }
    useEffect(
        () => { getAddresses(); }, []
    )
    const getAddresses = async () => {
        if (searchValue)
            getAddressesByName(searchValue).then(res => setAddresses(res));
        else
            getAllSavedAddresses().then(res => setAddresses(res))
    }
    return (
        <Modal isVisible={mv} style={styles.container}>
            <View style={{ flex: 3 }}>
                <MapDisplay />
            </View>
            <View style={styles.componentsContainer}>
                <View style={styles.searchInputContainer} >
                    <SearchTextInput close={close} search={getAddresses} value={searchValue} setValue={setSearchValue} />
                </View>
                <View style={styles.addressesListContainer}>
                    <AddressesList addresses={addresses} onSelectLocation={selectLoc} />
                </View>
            </View>
        </Modal>
    );

}
const styles = StyleSheet.create({
    container: {
        margin: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'white'
    },
    componentsContainer: {
        position: "absolute",
        width: '100%',
        height: '100%',
        justifyContent: 'space-between'
    },
    searchInputContainer: {
        height: '10%',
        justifyContent: 'center',
        paddingHorizontal: '4%'
    },
    addressesListContainer: {
        maxHeight: '60%',
        justifyContent: 'flex-end'
    }
});
export default SelectLocationModal;