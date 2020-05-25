import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from "react-navigation";
import Home from '../screens/Home'
import MainScreen from '../screens/MainScreen';
import SideDrawer from '../components/global/SideDrawer';
import { createDrawerNavigator } from 'react-navigation-drawer';
import React from 'react';
import { Feather, AntDesign, MaterialIcons, FontAwesome } from "@expo/vector-icons";
import RequestsScreen from '../screens/RequestsScreen';
import HistoryScreen from '../screens/HistoryScreen';
import SupportScreen from '../screens/SupportScreen';
import WalletScreen from '../screens/WalletScreen';
import SettingsScreen from '../screens/SettingsScreen';
import AboutUsScreen from '../screens/AboutUsScreen';
import { Dimensions, Platform } from 'react-native';

const ApplicationNav = createStackNavigator(
    {
        MainScreen: {
            screen: MainScreen,

        },
        RequestsScreen: {
            screen: RequestsScreen
        },
        HistoryScreen: {
            screen: HistoryScreen
        },
        SupportScreen: {
            screen: SupportScreen
        },
        WalletScreen: {
            screen: WalletScreen
        },
        SettingsScreen: {
            screen: SettingsScreen
        },
        AboutUsScreen: {
            screen: AboutUsScreen
        }


    },

);


const MainNav = createDrawerNavigator(
    {
        MainScreen: {
            screen: ApplicationNav,
            navigationOptions: {
                drawerLabel: 'Home',
                drawerIcon: <Feather name="home" size={20} style={{ color: '#132641', opacity: 0.6 }}></Feather>,
            }
        },
        RequestsScreen: {
            screen: ApplicationNav,
            navigationOptions: {
                drawerLabel: 'Requests',
                drawerIcon: <AntDesign name="form" size={20} style={{ color: '#132641', opacity: 0.8 }}></AntDesign>,
            }

        },
        HistoryScreen: {
            screen: ApplicationNav,
            navigationOptions: {
                drawerLabel: 'History',
                drawerIcon: <Feather name="calendar" size={20} style={{ color: '#132641', opacity: 0.8 }}></Feather>
            }

        },
        SupportScreen: {
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
        contentComponent: props => <SideDrawer   {...props} />
        , contentOptions: {
            activeTintColor: '',
            activeBackgroundColor: 'Transparent',
            labelStyle: {
                fontFamily: 'Montserrat',
                fontWeight: 'normal',
                color: '#132641',
                marginLeft: -7,
                fontSize: 18,
                 marginVertical:Dimensions.get('window').height>600?16:10
            }
        },
        drawerWidth: '77%'
    }
);
export default createAppContainer(MainNav);