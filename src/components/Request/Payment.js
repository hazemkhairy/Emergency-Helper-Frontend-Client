import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import MainButton from "../global/MainButton";
import normalize from "react-native-normalize";
import LoadingModal from "../global/LoadingModal";
import RatingModal from "../Request/RatingModal";

const UpdateModal = ({ modalVisible, price, close }) => {
  if (!modalVisible) return null;
  const [rateHelperModal, setRateHelperModal] = useState(false);
  // const [loading, setLoading] = useState(false);
  
  const onSubmit = () => {
    // setLoading(true);
    showRatingModal();
      // close();
    // payHelper(requestID).then(() => {
    //   setLoading(false);
    //   showRatingModal();
      // close();
    // });
  };
  const showRatingModal = () => {
    setRateHelperModal(!rateHelperModal);
  };
  const closeRatingModal = () => {
    close();
    setRateHelperModal(!rateHelperModal);
  };
  return (
    <Modal isVisible={modalVisible}>
      {/* <LoadingModal modalVisible={loading} /> */}
      <RatingModal modalVisible={rateHelperModal} close={()=> closeRatingModal()} />
      <View style={styles.container}>
        <View style={styles.centerContainer}>
          <Text style={styles.paymentText}>
            Please pay your Helper {price} EGP
          </Text>
          <MainButton style={styles.okBTN} onPress={() => onSubmit()}>
            <Text style={styles.okBTNtxt}>OK</Text>
          </MainButton>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  container: {
    height: normalize(145),
    backgroundColor: "white",
    borderRadius: 40,
    width: "100%",
    alignItems: "center",
  },

  centerContainer: {
    top: normalize(30),
    alignItems: "center",
  },

  paymentText: {
    fontFamily: "Montserrat_bold",
    fontSize: normalize(18),
    color: "#132641",
    textAlign: "center",
    top: normalize(8),
  },
  okBTN: {
    paddingHorizontal: "12%",
    paddingVertical: "3%",
    top: normalize(35),
  },
  okBTNtxt: {
    color: "white",
    fontSize: normalize(13),
    fontFamily: "Montserrat_SemiBold",
    textAlign: "center",
  },
});
export default UpdateModal;
