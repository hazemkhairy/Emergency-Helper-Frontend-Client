import { createSwitchNavigator } from 'react-navigation'

import AuthenticationNavigation from './AuthenticationNavigator';
import AppNavigation from './AppNavigator';
import PreConfigScreen from '../screens/PreConfigScreen'

export default MainNavigator = createSwitchNavigator(
    {
        PreConfigScreen,
        AuthenticationNavigation,
        AppNavigation
    },
    {
        initialRouteName: 'PreConfigScreen'
    }
)