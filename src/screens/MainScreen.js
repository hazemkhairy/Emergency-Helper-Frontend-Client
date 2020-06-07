import React, { useState } from "react";
import { Text, View, Button } from "react-native";
import { logOut } from "../Utils/Client";
import MainButton from "../components/global/MainButton";

const MainScreen = ({ navigation }) => {
  return (
        <View style={{ flex: 1 }}>
            <Text>Main Screen</Text>
            <Button title="LOG OUT" onPress={()=>{logOut(),navigation.navigate('PreConfigScreen')}}></Button>
        </View> 
  )
}
export default MainScreen;
