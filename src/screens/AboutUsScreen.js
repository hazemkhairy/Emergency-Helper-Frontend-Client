import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import MainHeader from '../components/global/MainHeader';
import SubHeaderText from '../components/global/SubHeaderText';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/global/HeaderButton'


const AboutUsScreen = ({ navigation }) => {

    return (
        <View>
            <MainHeader headerText={'About Us'} name={'info-circle'}></MainHeader>
           
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
   
})
export default AboutUsScreen;