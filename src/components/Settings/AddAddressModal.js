import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Dimensions,
  KeyboardAvoidingView
} from "react-native";
import Modal from "react-native-modal";
import LoadingModal from "../global/LoadingModal";
import Icon from "react-native-vector-icons/AntDesign";
import { AddAddress } from "../../Utils/Addresses";

const AddAddressModal = ({ modalVisible, test }) => {
  if (!modalVisible) return null;
  const [visible, setVisible] = useState(modalVisible);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [addressName, setaddressName] = useState("New Cairo");
  const [longitude, setlongitude] = useState(2.1);
  const [altitude, setaltitude] = useState(7.1);
  const onSubmit = async () => {
    setLoading(true);
    await AddAddress(name, addressName, longitude, altitude).then((result) => {
      setLoading(false);
      setVisible(false);
      test();
    });

  };

  return (
    <Modal isVisible={visible}>
      <LoadingModal modalVisible={loading}></LoadingModal>
      <KeyboardAvoidingView behavior="position" enabled>
      <View style={styles.container}>
        <View style={styles.closeContainer}>
          <TouchableOpacity
            onPress={() => {
              setVisible(false);
            }}
          >
            <Icon name="close" size={25} style={styles.icon} marginLeft="55%" />
          </TouchableOpacity>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.headerText}>Add New Addresses</Text>
        </View>
        <View style={styles.textInputContainer}>
          <TextInput
            value={name}
            onChangeText={(value) => {
              setName(value);
            }}
            placeholder="Name"
            placeholderTextColor="#78849E"
            style={styles.textInput}
          />
        </View>
        <View style={styles.textInputContainer}>
          <TouchableOpacity onPress={() => { }}>
            <Text style={styles.textInput}>Pick your location</Text>
            <Icon
              name="right"
              size={20}
              color="#78849E"
              style={styles.rightIcon}
              marginLeft="99%"
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => onSubmit()} style={styles.addBTN}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 0.44 * Dimensions.get("window").height,
    resizeMode: "contain",
    backgroundColor: "#FFFFFF",
    borderRadius: 40,
    alignItems: "center",
  },
  closeContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingHorizontal: "8%",
    paddingTop: "3%",
  },
  textContainer: {
    alignItems: "center",
    marginBottom: "3%",
  },
  headerText: {
    fontFamily: "Montserrat_SemiBold",
    color: "#132641",
    fontSize:
      25 *
      Math.min(
        Dimensions.get("window").height / 800.0,
        Dimensions.get("window").width / 375.0
      ),
  },
  textInputContainer: {
    alignSelf: "center",
    width: "65%",
    marginVertical: "3%",
  },
  pickLocation: {
    borderRadius: 12,
    width: "100%",
    height: "40%",
    borderWidth: 0.5,
    textAlignVertical: "top",
    padding: 10,
    fontFamily: "Montserrat_SemiBold",
    fontSize: 13,
    borderColor: "#707070",
  },
  textInput: {
    borderRadius: 12,
    width: "100%",
    borderWidth: 0.5,
    padding: 12,
    fontFamily: "Montserrat_SemiBold",
    fontSize: 13,
    color: "#78849E",
    borderColor: "#707070",
  },
  rightIcon: {
    position: "absolute",
    alignSelf: "flex-end",
    marginTop: "5%",
    marginRight: "8%",
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
  },

  addBTN: {
    marginTop: "3%",
    height: "15%",
    width: "40%",
    borderRadius: 35,
    backgroundColor: "#132641",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    color: "white",
    fontFamily: "Montserrat_Medium",
  },
});
export default AddAddressModal;
