import React from 'react';
import { Text, View, Button } from 'react-native';
import { logOut } from '../Utils/Client';
import MainButton from '../components/global/MainButton'
import MapDisplay from '../components/global/MapDisplay'
import SendRequest from '../components/Request/SendRequest';
const MainScreen = ({ navigation }) => {

    return (
        <View style={{ flex: 1 }}>
            <Text>Main Screen</Text>
          <Button title="LOG OUT" onPress={()=>{logOut(),navigation.navigate('PreConfigScreen')}}></Button>

          <MainButton
        onPress={() => {
          navigation.navigate("SettingsScreen");
        }}
      >
        Settings
        </MainButton>
          <Button title="History Screen" onPress={()=>{navigation.navigate('HistoryScreen')}}></Button>
          <Button title="Support Ticket Screen" onPress={()=>{navigation.navigate('SupportTicketScreen')}}></Button>
            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                <MapDisplay />
                {/* <SendRequestModal modalVisiblity={true}/> */}
                <SendRequest />
            </View>
        </View>
    )
}



export default MainScreen;