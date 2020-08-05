import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Dimensions,
  KeyboardAvoidingView,
} from "react-native";
import Modal from "react-native-modal";
import MainButton from "../global/MainButton";
import LoadingModal from "../global/LoadingModal";
import RatingComponent from "../Request/RatingComponent";
import Icon from "react-native-vector-icons/Ionicons";
import normalize from "react-native-normalize";
import {rateRequest} from '../../Utils/RequestUtils'
const RateHelperModal = ({ modalVisible, requestID, close}) => {
    if(!modalVisible) return null;
  const [loading, setLoading] = useState(false);
  const [rating, setRating] = useState('1');
  const [feedbackMessage, setFeedbackMessage] = useState("");
  //console.log(requestID)
  const onSubmit = () => {
    setLoading(true);
    
    rateRequest (rating,feedbackMessage,requestID).then(() => {
      console.log('rate', requestID,rating)
      setLoading(false);
      close();
    });
  };
  return (
    <Modal
      isVisible={modalVisible}
    >
      <KeyboardAvoidingView behavior="position" enabled>
        <LoadingModal modalVisible={loading} />
        <View style={styles.container}>
          <TouchableOpacity
            onPressOut={() => {
                close();
            }}
            style={styles.closeIcon}
          >
            <Icon name="ios-close" size={35}  />
          </TouchableOpacity>

          <View style={styles.textContainer}>
            <Text style={styles.text}>Rate Your Helper</Text>
          </View>
          <View style={styles.ratingContainer}>
            <RatingComponent
              maxRating={5}
              setValue={setRating}
              value={rating}
            />
          </View>
          <View style={styles.textInputContainer}>
            <TextInput
              value={feedbackMessage}
              onChangeText={(msg) => {
                setFeedbackMessage(msg);
              }}
              placeholder="Tell us your feedback"
              placeholderTextColor="#AFB0B0"
              multiline
              style={styles.textInput}
            />
          </View>
          <View style={styles.buttonContainer}>
            <MainButton style={styles.submitBtn} onPress={() => onSubmit()}>
              Submit
            </MainButton>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};
const styles = StyleSheet.create({
  container: {
    height: normalize(280),
    backgroundColor: "white",
    borderRadius: 40,
    width: normalize(355),
    alignItems: "center",
    alignSelf: "center",
  },
  closeIcon: {
    color: "#454F63",
    top: normalize(10),
    left: normalize(135),
  },

  ratingContainer: {
    width: "50%",
  },
  textContainer: {
    alignItems: "center",
    marginBottom: "2%",
  },
  text: {
    bottom: normalize(8),
    fontFamily: "Montserrat_SemiBold",
    fontSize:
      normalize(26) *
      Math.min(
        Dimensions.get("window").height / 800.0,
        Dimensions.get("window").width / 375.0
      ),
  },
  textInputContainer: {
    width: "50%",
    marginVertical: "5%",
    height: "30%",
  },
  textInput: {
    borderRadius: 12,
    width: "130%",
    height: "100%",
    borderWidth: 0.5,
    textAlignVertical: "top",
    padding: 10,
    fontFamily: "Montserrat_SemiBold",
    fontSize: normalize(13),
    borderColor: "#AFB0B0",
    alignSelf: "center",
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    top: normalize(22),
  },
  submitBtn: {
    paddingVertical: "8%",
    paddingHorizontal: "15%",
  },
});
export default RateHelperModal;
