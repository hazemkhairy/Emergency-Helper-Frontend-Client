import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, Text, TouchableOpacity } from 'react-native';
import MainHeader from '../components/global/MainHeader'
import SubHeaderText from '../components/global/SubHeaderText'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/global/HeaderButton'
import HelperCard from '../components/Helper/HelperCard';
import normalize from "react-native-normalize";
import { getOffers } from '../Utils/HelpersOffers';
import { FontAwesome } from '@expo/vector-icons';

const AvailableHelpersScreen = () => {

    const [helpersData, setHelpersData] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const [loading, setLoading] = useState(true);


    const loadHelpers = async () => {
        setIsFetching(true);
        setHelpersData([]);
        setLoading(true);
        await getOffers().then((result) => {
            setHelpersData(result);
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
            <FlatList
                showsVerticalScrollIndicator={false}
                data={helpersData}
                bounces={false}
                keyExtractor={(item, index) => index.toString()}
                refreshing={isFetching}
                onRefresh={() => loadHelpers()}
                renderItem={({ item }) => (
                    <HelperCard item={item}> </HelperCard>

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

})


export default AvailableHelpersScreen;
