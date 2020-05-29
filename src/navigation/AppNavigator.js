import { createStackNavigator } from 'react-navigation-stack'
import Home from '../screens/Home'
import MainScreen from '../screens/MainScreen';
import HistoryScreen from '../screens/HistoryScreen';
import SupportTicketScreen from '../screens/SupportTicketScreen';
import TicketScreen from '../screens/TicketScreen'
export default createStackNavigator(
    {
        MainScreen,
        HistoryScreen,
        SupportTicketScreen,
        TicketScreen
    },
    
)