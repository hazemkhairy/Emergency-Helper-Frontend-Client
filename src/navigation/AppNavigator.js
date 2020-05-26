import { createStackNavigator } from 'react-navigation-stack'
import Home from '../screens/Home'
import MainScreen from '../screens/MainScreen';
import PickLocationScreen from '../screens/Request/PickLocationScreen'
export default createStackNavigator(
    {
        MainScreen,
        PickLocationScreen
    }
)