import React from 'react';
import { StyleSheet } from 'react-native';
import PickableLocationMap from '../global/PickableLocationMap'
import Modal from 'react-native-modal';

const PickLocationModal = ({ mv, close, selectLocation }) => {
    const pickLocation = async (location) => {
        await selectLocation(location);
        close();
    }
    return (
        <Modal isVisible={mv} style={styles.container}>
            <PickableLocationMap submitLocation={pickLocation} />
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
});
export default PickLocationModal;