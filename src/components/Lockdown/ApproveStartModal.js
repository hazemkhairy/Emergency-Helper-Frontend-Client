import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import LoadingModal from '../global/LoadingModal'
import { confirmHelpStart } from '../../Utils/LockdownUtils'
import CancelOfferModal from './CancelOfferModal';
const ApproveStartModal = () => {
    let mount = useRef(true);
    let loading = useRef(false);
    const [cancelModal, setCancelModal] = useState(false);
    useEffect(
        () => {
            loading.current = false;
            mount.current = true;
            return () => {
                mount.current = false;
                loading.current = false;
            }
        }, []
    )
    const handleConfirm = async () => {
        loading.current = true;
        confirmHelpStart().then(
            (res) => {
            }
        ).catch(
            err => {
            }
        )
    }
    if (loading.current)
        return <LoadingModal modalVisible={loading.current} />

    if (cancelModal)
        return <CancelOfferModal mv={cancelModal} close={() => { setCancelModal(false) }} />
    return <Modal isVisible={mount.current} >
        <View style={styles.outerContainer}>
            <View style={styles.innerContainer}>
                <View style={styles.titleRow}>
                    <Text style={styles.titleText}>
                        Your Helper started the request, Please confirm.
                    </Text>
                </View>
                <View style={styles.buttonsRow}>
                    <TouchableOpacity onPress={handleConfirm}>
                        <Text style={{ ...styles.buttonText, color: '#1F7B13' }}>
                            Confirm Start
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { setCancelModal(true) }}>
                        <Text style={{ ...styles.buttonText, color: '#B72020' }}>
                            I have a problem
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </Modal>
}

const styles = StyleSheet.create({
    outerContainer: {
        backgroundColor: 'white',
        borderRadius: 40,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
        flex: 1,
        maxHeight: Dimensions.get('screen').height * 0.2,
        paddingVertical: '3%',
        paddingHorizontal: '7%',
        borderWidth: 1
    },
    innerContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleRow: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonsRow: {
        flex: 2,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%'
    },
    titleText: {
        fontSize: 18 * (Dimensions.get('screen').width / 375),
        fontFamily: 'Montserrat_bold',
        textAlignVertical: 'center',
        textAlign: 'center',
    },
    buttonText: {
        fontFamily: 'Montserrat_SemiBold',
        fontSize: 12
    },

});

export default ApproveStartModal;