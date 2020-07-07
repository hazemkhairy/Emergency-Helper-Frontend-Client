import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, Text, TouchableOpacity } from 'react-native';
import MainHeader from '../components/global/MainHeader'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/global/HeaderButton'
import HelperCard from '../components/Helper/HelperCard';
import normalize from "react-native-normalize";
import { getOffers } from '../Utils/HelpersOffers';
import { FontAwesome } from '@expo/vector-icons';
import LoadingModal from '../components/global/LoadingModal'
const AvailableHelpersScreen = () => {

    const [helpersData, setHelpersData] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const [loading, setLoading] = useState(true);
    const [radius, setRadius] = useState('')


    const loadHelpers = async () => {
        setIsFetching(true);
        setHelpersData([]);
        setLoading(true);
        await getOffers().then((result) => {
            setHelpersData(result.offers);
            setRadius(result.radius);
            setLoading(false);
            setIsFetching(false);

        });
    };
    const reload = () => {
        loadHelpers();
    };
    useEffect(() => {
        loadHelpers();
    }, []);
    return (
        <View style={styles.container}>
            <LoadingModal modalVisible={loading} />
            <MainHeader headerText={'Available Helpers'} ></MainHeader>
            <View style={styles.btnContainer}>
                <Text style={styles.subHeader}>Helpers</Text>
                <View style={styles.btnCon}>
                    <TouchableOpacity
                        style={styles.refreshButton}
                        onPress={() => reload()}
                    >
                        <FontAwesome name='refresh' size={27} color='#132641' />
                    </TouchableOpacity>
                </View>
            </View>
            {helpersData.length ? <Text style={styles.radiusTXT}>Radius: {radius} KM</Text> : null}
            <FlatList
                showsVerticalScrollIndicator={false}
                data={helpersData}
                keyExtractor={(item, index) => index.toString()}
                refreshing={isFetching}
                onRefresh={() => loadHelpers()}
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
    );
}
AvailableHelpersScreen.navigationOptions = (props) => {
    return {
        title: '',
        headerTransparent: true,
        headerLeft: () => {
            return (
                <HeaderButtons HeaderButtonComponent={HeaderButton} >
                    <Item title="back" iconName='arrow-back' onPress={() => { props.navigation.goBack() }} />
                </HeaderButtons>
            )
        },

    }
}

const styles = StyleSheet.create({
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
    refreshButton: {
        marginTop: "10%",
        flexDirection: "row",
        marginLeft: "13%",
        alignSelf: "center",
        paddingHorizontal: "38%",
        paddingBottom: "3.5%",
        paddingTop: "1%",
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
    }

})


export default AvailableHelpersScreen;
