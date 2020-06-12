
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import MainHeader from '../components/global/MainHeader'
import SubHeaderText from '../components/global/SubHeaderText'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/global/HeaderButton'
import HelperCard from '../components/Helper/HelperCard';
import HelperModal from '../components/Request/HelperModal';

import { getOffers } from '../Utils/HelpersOffers';

const AvailableHelpersScreen = () => {

    const [helpersData, setHelpersData] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const [loading, setLoading] = useState(true);
    const [helperModal, setHelperModal] = useState(false);


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

    useEffect(() => {
        loadHelpers();
    }, []);




    return (
        <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>

            <MainHeader headerText={'Available Helpers'} ></MainHeader>
            <SubHeaderText SubHeaderText={'Helpers'}></SubHeaderText>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={helpersData}
                keyExtractor={(item, index) => index.toString()}
                refreshing={isFetching}
                onRefresh={() => loadHelpers()}
                renderItem={({ item }) => (
                    <HelperCard item={item}> </HelperCard>

                )}
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



export default AvailableHelpersScreen;
