import React from 'react';
import { Text, View,Button } from 'react-native';
import { logOut } from '../Utils/Client';
const MainScreen = ({navigation}) => {
    
    return (
        <View>
            <Text>Main Screen</Text>
          <Button title="LOG OUT" onPress={()=>{logOut(),navigation.navigate('PreConfigScreen')}}></Button>
        </View>
    )
}



export default MainScreen;