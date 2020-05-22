import React from 'react';
import { Text, View,Button } from 'react-native';
import { logOut } from '../Utils/Client';
import MainButton from '../components/global/MainButton'

const MainScreen = ({navigation}) => {
    
    return (
        <View>
            <Text>Main Screen</Text>
          <Button title="LOG OUT" onPress={()=>{logOut(),navigation.navigate('PreConfigScreen')}}></Button>
          <MainButton
        onPress={() => {
          navigation.navigate("SettingsScreen");
        }}
      >
        Settings
        </MainButton>
        </View>
    )
}



export default MainScreen;