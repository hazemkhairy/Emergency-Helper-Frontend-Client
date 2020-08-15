import React from 'react';
import { Text, View, Button } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import MenuHeaderButton from '../components/global/MenuHeaderButton';
import MapDisplay from '../components/global/MapDisplay'
import SendRequest from '../components/Request/SendRequest';
import LockdownManager from '../components/Lockdown/LockdownManager';
import { listenForNotifications, registerPushNotification } from '../Utils/PushNotificationUtils'
const Main = ({ navigation }) => {
    const handleNotification = () => {
        registerPushNotification();
        listenForNotifications(navigation);
    }
    handleNotification();
    return (
        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
            <LockdownManager />
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
                <HeaderButtons HeaderButtonComponent={MenuHeaderButton}   >
                    <Item title="menu" iconName='menu' onPress={() => { props.navigation.toggleDrawer() }} />
                </HeaderButtons>
            )
        },

    }
}

export default Main;