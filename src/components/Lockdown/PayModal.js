import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import LoadingModal from '../global/LoadingModal';
import { getReceiptInfo, payReceipt } from '../../Utils/LockdownUtils';
import RateModal from '../Request/RatingModal'
const PayModal = () => {
    let mount = useRef(true);
    const [loading, setLoading] = useState(true);
    const [cost, setCost] = useState(0);
    const [rateModal, setRateModal] = useState(false);
    const getCost = () => {
        setLoading(true);
        getReceiptInfo().then(
            res => {
                setCost(res.totalPrice);
                setLoading(false);
            }
        ).catch(
            err => {
                console.log("couldn't get receipt info")
                getCost();
            }
        )
    }
    useEffect(
        () => {
            mount.current = true;
            getCost();

            return () => {
                mount.current = false;
            }
        }, []
    )
    const finishRequest = async () => {
        setLoading(true);
        setRateModal(false);
        payReceipt().then(
            (res) => {
                if (mount.current)
                    setLoading(false);
            }
        )
            .catch(
                (err) => { console.log(err) }
            )
    }
    if (loading)
        return <LoadingModal modalVisible={loading} />
    if (rateModal)
        return <RateModal modalVisible={rateModal} close={finishRequest} />
    return <Modal isVisible={mount.current} >
        <View style={styles.outerContainer}>
            <View style={styles.innerContainer}>
                <View style={styles.titleRow}>
                    <Text style={styles.titleText}>
                        Please pay your helper {'\n'} {cost} EGP
                    </Text>
                </View>
                <View style={styles.buttonsRow}>
                    <TouchableOpacity style={styles.buttonContainer} onPress={() => {
                        if (mount.current)
                            setRateModal(true)
                    }
                    }
                    >
                        <Text style={styles.buttonText}>
                            Ok
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </Modal >
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
        justifyContent: 'center',
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
        fontSize: 13,
        color: '#FFFFFF'
    },
    buttonContainer: {
        backgroundColor: '#132641',
        borderRadius: 30,
        paddingHorizontal: '12%',
        paddingVertical: '3%'
    }

});

export default PayModal;