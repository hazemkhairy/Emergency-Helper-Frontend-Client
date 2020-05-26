import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import Modal from 'react-native-modal';
const SelectLocationModal = ({ mv, close }) => {
    return (
        <Modal isVisible={mv} style={styles.container}>
            <Button title="hello" onPress={close} />
        </Modal>
    );

}
const styles = StyleSheet.create({
    container: {
        borderWidth: 5,
        borderColor:'red',
        maxHeight: '50%',
        backgroundColor: 'white',
    }
});
export default SelectLocationModal;