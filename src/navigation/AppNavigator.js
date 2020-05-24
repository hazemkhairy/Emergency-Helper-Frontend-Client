import { createStackNavigator } from 'react-navigation-stack'
import Home from '../screens/Home'
import MainScreen from '../screens/MainScreen';
import SettingsScreen from '../screens/Settings/SettingsScreen';
import AccountInfoScreen from '../screens/Settings/AccountInfoScreen';
import ChangePasswordScreen from '../screens/Settings/ChangePasswordScreen';
import SavedAddressesScreen from '../screens/Settings/SavedAddressesScreen';

export default createStackNavigator(
    {
        MainScreen,
        SettingsScreen,
        AccountInfoScreen,
        ChangePasswordScreen,
        SavedAddressesScreen,
        
    }
)