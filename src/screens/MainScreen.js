import React from 'react';
import { Text, View,Button } from 'react-native';
import { logOut } from '../Utils/Client';

const MainScreen = ({navigation}) => {
    
    return (
        <View>
            <Text>Main Screen</Text>
          <Button title="LOG OUT" onPress={()=>{logOut(),navigation.navigate('PreConfigScreen')}}></Button>
          <Button title="History Screen" onPress={()=>{navigation.navigate('HistoryScreen')}}></Button>
          <Button title="Support Ticket Screen" onPress={()=>{navigation.navigate('SupportTicketScreen')}}></Button>
          <Button title="Chatting" onPress={()=>{navigation.navigate('Chatting')}}></Button>
        </View>
    )
}



export default MainScreen;