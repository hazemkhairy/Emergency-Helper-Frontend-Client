import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from "react-navigation";
import Home from '../screens/Home'
import MainScreen from '../screens/MainScreen';
import SideDrawer from '../components/global/SideDrawer';
import { createDrawerNavigator } from 'react-navigation-drawer';
import React from 'react';
import { Feather, MaterialIcons, FontAwesome } from "@expo/vector-icons";
import HistoryScreen from '../screens/HistoryScreen';
import WalletScreen from '../screens/WalletScreen';
import SettingsScreen from '../screens/Settings/SettingsScreen';
import AboutUsScreen from '../screens/AboutUs/AboutUsScreen';
import AvailableHelpersScreen from '../screens/AvailableHelpersScreen'
import SupportTicketScreen from '../screens/SupportTicketScreen'
import SavedAddressesScreen from '../screens/Settings/SavedAddressesScreen'
import AccountInfoScreen from '../screens/Settings/AccountInfoScreen'
import ChangePasswordScreen from '../screens/Settings/ChangePasswordScreen'
import TermsAndConditionsScreen from '../screens/AboutUs/TermsAndConditionsScreen'
import TicketScreen from '../screens/TicketScreen'
import RequestChat from '../screens/RequestChat'
import Main from '../screens/Main';

import { Dimensions } from 'react-native';

const ApplicationNav = createStackNavigator(
    {
        Main: {
            screen: Main
        },
        // Main: {
        //     screen: MainScreen
        // },
        HistoryScreen: {
            screen: HistoryScreen
        },
        SupportTicketScreen: {
            screen: SupportTicketScreen
        },
        WalletScreen: {
            screen: WalletScreen
        },
        SettingsScreen: {
            screen: SettingsScreen
        },
        AboutUsScreen: {
            screen: AboutUsScreen
        },
        AvailableHelpersScreen,
      
        SavedAddressesScreen,
        AccountInfoScreen,
        ChangePasswordScreen,
        TicketScreen,
        TermsAndConditionsScreen,
        RequestChat,
        
    },


);


const MainNav = createDrawerNavigator(
    {
        Main: {
            screen: ApplicationNav,
            navigationOptions: {
                drawerLabel: 'Home',
                drawerIcon: <Feather name="home" size={20} style={{ color: '#132641', opacity: 0.8 }}></Feather>,

            },

        },
        HistoryScreen: {
            screen: ApplicationNav,
            navigationOptions: {
                drawerLabel: 'History',
                drawerIcon: <Feather name="calendar" size={20} style={{ color: '#132641', opacity: 0.8 }}></Feather>
            }

        },
        SupportTicketScreen: {
            screen: ApplicationNav,
            navigationOptions: {
                drawerLabel: 'Support',
                drawerIcon: <MaterialIcons name="people" size={20} style={{ color: '#132641', opacity: 0.8 }}></MaterialIcons>
            }

        },
        WalletScreen: {
            screen: ApplicationNav,
            navigationOptions: {
                drawerLabel: 'Wallet',
                drawerIcon: <FontAwesome name="money" size={20} style={{ color: '#132641', opacity: 0.8 }}></FontAwesome>
            }
        },
        SettingsScreen: {
            screen: ApplicationNav,
            navigationOptions: {
                drawerLabel: 'Settings',
                drawerIcon: <Feather name="settings" size={20} style={{ color: '#132641', opacity: 0.8 }}></Feather>
            }

        },
        AboutUsScreen: {
            screen: ApplicationNav,
            navigationOptions: {
                drawerLabel: 'About Us',
                drawerIcon: <Feather name="info" size={20} style={{ color: '#132641', opacity: 0.8 }}></Feather>
            }
        }

    },

    {
        contentComponent: props => <SideDrawer   {...props} onItemPress={({ route, focused }) => { props.navigation.navigate(route) }} />
        , contentOptions: {
            activeTintColor: '',
            activeBackgroundColor: 'Transparent',
            labelStyle: {
                fontFamily: 'Montserrat',
                fontWeight: 'normal',
                color: '#132641',
                marginLeft: -7,
                fontSize: 18,
                marginVertical: Dimensions.get('window').height > 600 ? 18 : 13
            }
        },
        drawerWidth: '77%'
    }
);
export default createAppContainer(MainNav);