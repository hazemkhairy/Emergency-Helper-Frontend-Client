import { createStackNavigator } from 'react-navigation-stack'
import Home from '../screens/Home'
import MainScreen from '../screens/MainScreen';
import AccountInfoScreen from '../screens/Settings/AccountInfoScreen';
import SettingsScreen from '../screens/Settings/SettingsScreen';

export default createStackNavigator(
    {
        MainScreen,
        SettingsScreen,
        AccountInfoScreen,
        
    }
)