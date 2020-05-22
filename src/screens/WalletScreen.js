import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import MainHeader from '../components/global/MainHeader';
import SubHeaderText from '../components/global/SubHeaderText';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/global/HeaderButton'


const WalletScreen = ({ navigation }) => {

    const test = {
        balance: "100"
    }
    return (
        <View>
            <MainHeader headerText={'Wallet'} name={'money'}></MainHeader>
            <SubHeaderText SubHeaderText={'Your available balance'}></SubHeaderText>
            <Text style={styles.Balance} >  {test.balance} EGP</Text>

        </View>
    )
}
WalletScreen.navigationOptions = (props) => {
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
    Balance: {
        fontFamily: 'Montserrat',
        fontSize: 24,
        marginLeft: '8%',
        color: '#132641'
    }

})

export default WalletScreen;