import React, { useState } from "react";
import { Text, View, Button } from "react-native";
import { logOut } from "../Utils/Client";
import MainButton from "../components/global/MainButton";
import CancelModal from '../components/Request/CancelModal';

const MainScreen = ({ navigation }) => {

  const [modalVisible, setModalVisible] = useState(false);
  return (
        <View style={{ flex: 1 }}>
            <CancelModal
         modalVisible={modalVisible}
       />
            <Text>Main Screen</Text>
            <Button title="LOG OUT" onPress={()=>{logOut(),navigation.navigate('PreConfigScreen')}}></Button>
            <Button title="Helpers" onPress={()=>{navigation.navigate('AvailableHelpersScreen')}}></Button>
            <Button title="Cancel Request" onPress={() => setModalVisible(true)}></Button>

        </View> 
  )
}
export default MainScreen;