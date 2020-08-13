import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, FlatList, Text, TouchableOpacity } from 'react-native';
import normalize from "react-native-normalize";
import { FontAwesome } from '@expo/vector-icons';
import Modal from 'react-native-modal';
import MainHeader from '../global/MainHeader';
import HelperCard from '../Helper/HelperCard';
import CancelModal from '../Request/CancelModal';
import { getOffers } from '../../Utils/HelpersOffers';

const AvailableHelpersModal = () => {
    let mount = useRef(true);
    const [helpersData, setHelpersData] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const [radius, setRadius] = useState('')
    const [cancelModal, setCancelModal] = useState(false);


    const loadHelpers = async () => {
        setIsFetching(true);
        setHelpersData([]);
        await getOffers().then((result) => {
            if (mount.current) {

                setHelpersData(result.offers);
                setRadius(result.radius);
                setIsFetching(false);
            }

        }).catch(
            err => {
                if (mount.current) {
                    setHelpersData([]);
                    setIsFetching(false);
                }
            }
        );
    };
    const reload = () => {
        loadHelpers();
    };
    const onCancel = () => {
        setCancelModal(true);
    };
    useEffect(() => {
        mount.current = true;
        reload();
        const time=setTimeout(getOffers, 60000);
        return () => { clearTimeout(time);
            mount.current = false; }
    }, []);

    return (
        <Modal isVisible={true} style={styles.modal}>
            <CancelModal CancelModalVisble={cancelModal} close={() => setCancelModal(false)} />
            <View style={styles.container}>
                <MainHeader headerText={'Available Helpers'} ></MainHeader>
                <View style={styles.btnContainer}>
                    <Text style={styles.subHeader}>Helpers</Text>
                    <View style={{ flexDirection: 'row-reverse', justifyContent: 'space-around' }} >
                        <View style={styles.btnCon}>
                            <TouchableOpacity
                                style={styles.cancelBTN}
                                onPress={() => { onCancel() }}
                            >
                                <Text style={styles.cancelBTNtxt}> Cancel</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.refreshbtnCon}>
                            <TouchableOpacity
                                style={styles.refreshButton}
                                onPress={() => reload()}
                            >
                                <FontAwesome name='refresh' size={23} color='#132641' />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                {
                    helpersData.length ?
                        <Text style={styles.radiusTXT}>KM: {radius} </Text>
                        : null
                }
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={helpersData}
                    keyExtractor={(item, index) => index.toString()}
                    refreshing={isFetching}
                    onRefresh={() => reload()}
                    renderItem={({ item }) => (
                        <View>

                            <HelperCard item={item}> </HelperCard>
                        </View>

                    )}
                    ListEmptyComponent={
                        () => {
                            return <Text style={styles.NoItems}>No nearby helpers at this moment</Text>
                        }
                    }
                />
            </View>
        </Modal>

    );
}
const styles = StyleSheet.create({
    modal: {
        padding: 0,
        margin: 0
    },
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },
    NoItems: {
        fontSize: 17,
        fontFamily: "Montserrat_SemiBold",
        color: "#132641",
        alignSelf: 'center',
        marginTop: "5%",
    },

    subHeader: {
        fontSize: normalize(24),
        color: "#132641",
        marginBottom: "4%",
        fontFamily: "Montserrat_SemiBold",
        marginTop: "10%",
    },
    refreshbtnCon: {
        justifyContent: "center",
        alignSelf: "center",
        marginRight: '1%',
        marginLeft: '45%'
    },
    refreshButton: {
        marginTop: "77%",
        marginLeft: "3%",
        alignSelf: "center",
    },

    btnContainer: {
        flexDirection: "row",
        marginLeft: "13%",
    },
    btnCon: {
        justifyContent: "center",
        alignSelf: "center",
    },
    radiusTXT: {
        fontFamily: "Montserrat_SemiBold",
        color: "#132641",
        fontSize: normalize(14),
        marginLeft: '15%'
    },
    cancelBTN: {
        backgroundColor: "#B22222",
        borderRadius: 35,
        borderColor: '#132641',
        alignSelf: "center",
        paddingHorizontal: "5%",
        paddingBottom: "2%",
        paddingTop: "2%",
        marginTop: "8%",
        marginLeft: "15%",
        marginRight: '40%'
    },
    cancelBTNtxt: {
        color: "white",
        fontSize: normalize(10),
        fontFamily: "Montserrat_bold",
        justifyContent: "center",
    },

})


export default AvailableHelpersModal;
