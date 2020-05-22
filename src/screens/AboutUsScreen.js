import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, FlatList, Button } from 'react-native';
import MainHeader from '../components/global/MainHeader';
import SubHeaderText from '../components/global/SubHeaderText';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/global/HeaderButton'
import AboutUsCard from '../components/global/AboutUsCard';
import { getAboutUs } from '../Utils/AboutUsData';
import { TouchableOpacity } from 'react-native-gesture-handler';
const AboutUsScreen = (props) => {

    const [dataset, setDataset] = useState([]);
    useEffect(() => {
        getAboutUs().then((result) => {
            setDataset(result);
        });
    }, []);

    return (
        <View>
            <MainHeader headerText={'About Us'} name={'info-circle'}></MainHeader>
            <SubHeaderText SubHeaderText={'About Us'}></SubHeaderText>
            <View >
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={dataset}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <AboutUsCard
                            title={item.title}
                            description={item.description}
                        >
                        </AboutUsCard>

                    )}
                />

            </View>
            <TouchableOpacity>
                <Text style={styles.termsConditions} >Terms and Conditions</Text>
            </TouchableOpacity>

        </View>
    )
}

AboutUsScreen.navigationOptions = (props) => {
    return {
        title: '',
        headerLeft: () => {
            return (
                <HeaderButtons HeaderButtonComponent={HeaderButton} styles={{}}>
                    <Item title="menu" iconName='menu' onPress={() => { props.navigation.toggleDrawer() }} />
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
const styles = StyleSheet.create({

    termsConditions: {
        marginTop: '3%',
        textAlign: 'center',
        textDecorationLine: 'underline',
        color: '#132641',
        fontSize: 13,
        fontFamily: "Montserrat_SemiBold",
    },
});
export default AboutUsScreen;