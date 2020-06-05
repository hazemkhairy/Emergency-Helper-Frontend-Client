
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import MainHeader from '../components/global/MainHeader'
import SubHeaderText from '../components/global/SubHeaderText'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/global/HeaderButton'
import HelperCard from '../components/Helper/HelperCard';

import { getOffers } from '../Utils/HelpersOffers';

const AvailableHelpersScreen = () => {

    const [helpersData, setHelpersData] = useState([]);
    useEffect(() => {
        getOffers().then((res) => {
            setHelpersData(res);
        });
    }, []);
    console.log('screen',helpersData)

    const test = [
        {
            img: 'https://emergencyhelper.s3.eu-west-3.amazonaws.com/profilePictureTemplate.png',
            name: 'Aya Eissa',
            price: '50~100 EGP',
            category: 'Medical',
            skills: ' skill 1, skill 2, skill 3, skill 4  ',
            offer: 'I will try helping you in the current problem.'


        },
        {
            img: 'https://emergencyhelper.s3.eu-west-3.amazonaws.com/profilePictureTemplate.png',
            name: 'Alaa Sadek',
            price: '50~100 EGP',
            category: 'Medical',
            skills: ' skill 1, skill 2, skill 3, skill 4 ',
            offer: 'I will try helping you in the current problem.I will try helping you in the current problem.I will try helping you in the current problem.I will try helping you'


        }, {
            img: 'https://emergencyhelper.s3.eu-west-3.amazonaws.com/profilePictureTemplate.png',
            name: 'Mai Sherif',
            price: '50~100 EGP',
            category: 'Medical',
            skills: ' skill 1, skill 2, skill 3, skill 4 skill 1, skill 2, skill 3, skill 4 skill 1, skill 2, skill 3, skill 4',
            offer: 'I will try helping you in the current problem.'


        },
        {
            img: 'https://emergencyhelper.s3.eu-west-3.amazonaws.com/profilePictureTemplate.png',
            name: 'Omar Khaled',
            price: '50~100 EGP',
            category: 'Medical',
            skills: ' skill 1, skill 2, skill 3, skill 4 ',
            offer: 'I will try helping you in the current problem.'


        },
        {
            img: 'https://emergencyhelper.s3.eu-west-3.amazonaws.com/profilePictureTemplate.png',
            name: 'Aly Mahmoud',
            price: '50~100 EGP',
            category: 'Medical',
            skills: ' skill 1, skill 2, skill 3, skill 4 ',
            offer: 'I will try helping you in the current problem.'


        },

    ]
    return (
        <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
            <MainHeader headerText={'Available Helpers'} ></MainHeader>
            <SubHeaderText SubHeaderText={'Helpers'}></SubHeaderText>

            <FlatList
                showsVerticalScrollIndicator={false}
                data={helpersData}
                keyExtractor={(item, index) => index.toString()}
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
        headerLeft: () => {
            return (
                <HeaderButtons HeaderButtonComponent={HeaderButton} styles={{}}>
                    <Item title="back" iconName='arrow-back' onPress={() => { props.navigation.goBack() }} />
                </HeaderButtons>
            )
        },
        headerStyle: {
            shadowColor: 'transparent',
            elevation: 0,
            backgroundColor: '#7598BA'

        },
        headertransparent: true,
    }
}



export default AvailableHelpersScreen;
