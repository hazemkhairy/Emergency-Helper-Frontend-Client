import React, { useState } from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import Modal from "react-native-modal";
import MainButton from "../global/MainButton";
const UpdateModal = ({ modalVisible, message }) => {
  if (!modalVisible) return null;
  const [visible, setVisible] = useState(modalVisible);
  return (
    <Modal isVisible={visible}>
      <View style={styles.container}>
        <View style={styles.centerContainer}>
          <Text style={styles.successtext}>{message}</Text>
          <MainButton style={styles.okBTN} onPress={() => setVisible(false)}>
            <Text style={styles.okBTNtxt}>Confirm</Text>
          </MainButton>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 0.4 * Dimensions.get("window").height,
    backgroundColor: "white",
    borderRadius: 40,
    width: "100%",
    alignItems: "center",
  },

  centerContainer: {
    marginTop: "20%",
    alignItems: "center",
  },

  successtext: {
    fontFamily: "Montserrat_SemiBold",
    fontSize: 26,
    color: "#132641",
    textAlign:"center",

  },
  okBTN: {
    paddingHorizontal: "13%",
    paddingVertical: "4%",
    marginTop: "14%",
  },
  okBTNtxt: {
    color: "white",
    fontSize: 18,
    fontFamily: "Montserrat",
  },
});
export default UpdateModal;
