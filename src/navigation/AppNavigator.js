import { createStackNavigator } from 'react-navigation-stack'
import Home from '../screens/Home'
import MainScreen from '../screens/MainScreen';
import HistoryScreen from '../screens/HistoryScreen';
import SupportTicketScreen from '../screens/SupportTicketScreen';
import Chatting from '../screens/Chatting'
export default createStackNavigator(
    {
        MainScreen,
        HistoryScreen,
        SupportTicketScreen,
        Chatting
    },
    
)