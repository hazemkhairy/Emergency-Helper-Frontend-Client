import React, { useState } from "react";
import { Text, View, Button } from "react-native";
import { logOut } from "../Utils/Client";
import MainButton from "../components/global/MainButton";
import Payment from "../components/Request/Payment";
import HelperModal from "../components/Request/HelperModal";

const MainScreen = ({ navigation }) => {
  const [paymentModal, setPaymentModal] = useState(false);
  const [helperModal, setHelperModal] = useState(false);

  const helper = () => {
    setHelperModal(true);
  };
  const closeHelperModal = () => {
    setHelperModal(false);
  };
  const payment = () => {
    setPaymentModal(true);
  };
  const closePaymentModal = () => {
    setPaymentModal(false);
  };
  return (
    <View>
      <Payment modalVisible={paymentModal} close={() => closePaymentModal()} />
      <HelperModal
        modalVisible={helperModal}
        close={() => closeHelperModal()}
      />

      <Text>Main Screen</Text>
      <Button
        title="LOG OUT"
        onPress={() => {
          logOut(), navigation.navigate("PreConfigScreen");
        }}
      ></Button>
      <MainButton
        onPress={() => {
          navigation.navigate("SettingsScreen");
        }}
      >
        Settings
      </MainButton>

      <MainButton onPress={() => payment()}>Payment Modal</MainButton>

      <MainButton onPress={() => helper()}>Helper Modal</MainButton>
    </View>
  );
};

export default MainScreen;
