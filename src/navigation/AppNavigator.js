import { createStackNavigator } from 'react-navigation-stack'
import MainScreen from '../screens/MainScreen';
import SettingsScreen from '../screens/Settings/SettingsScreen';
import AccountInfoScreen from '../screens/Settings/AccountInfoScreen';
import ChangePasswordScreen from '../screens/Settings/ChangePasswordScreen';
import SavedAddressesScreen from '../screens/Settings/SavedAddressesScreen';

import HistoryScreen from '../screens/HistoryScreen';
import SupportTicketScreen from '../screens/SupportTicketScreen';
import TicketScreen from '../screens/TicketScreen'
export default createStackNavigator(
    {
        MainScreen,
        SettingsScreen,
        AccountInfoScreen,
        ChangePasswordScreen,
        SavedAddressesScreen,
        
        HistoryScreen,
        SupportTicketScreen,
        TicketScreen
    }
)