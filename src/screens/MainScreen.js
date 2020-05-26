import React from 'react';
import { Text, View, Button } from 'react-native';
import { logOut } from '../Utils/Client';
import MapDisplay from '../components/global/MapDisplay'
import SendRequest from '../components/Request/SendRequest';
const MainScreen = ({ navigation }) => {

    return (
        <View style={{flex:1}}>
            <Text>Main Screen</Text>
            <Button title="LOG OUT" onPress={() => { logOut(), navigation.navigate('PreConfigScreen') }}></Button>
            <View style={{flex:1,justifyContent:'flex-end'}}>
                {/* <MapDisplay /> */}
                {/* <SendRequestModal modalVisiblity={true}/> */}
                <SendRequest/>
            </View>
        </View>
    )
}



export default MainScreen;