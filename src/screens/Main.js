import React from 'react';
import { Text, View, Button } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/global/HeaderButton';
import MapDisplay from '../components/global/MapDisplay'
import SendRequest from '../components/Request/SendRequest';

const Main = ({ navigation }) => {

    return (
        <View style={{ flex: 1, justifyContent: 'flex-end' }}>

            <MapDisplay />
            <SendRequest />
        </View>
    )
}
Main.navigationOptions = (props) => {
    return {
        title: '',
        headerTransparent: true,
        headerLeft: () => {
            return (
                <HeaderButtons HeaderButtonComponent={HeaderButton}   >
                    <Item title="menu" iconName='menu' onPress={() => { props.navigation.toggleDrawer() }} />
                </HeaderButtons>
            )
        },

    }
}

export default Main;