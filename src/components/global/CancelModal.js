import React, { useState } from "react";
import { Text, View, StyleSheet, Dimensions, TextInput, Button, TouchableOpacity, ShadowPropTypesIOS } from "react-native";
import Modal from "react-native-modal";
import normalize from 'react-native-normalize';
import MainButton from '../global/MainButton';
import LoadingModal from '../global/LoadingModal';
import { Entypo } from '@expo/vector-icons';
import { cancelRequest } from '../../Utils/CancelRequest';

const CancelModal = ({ modalVisible, id }) => {

  //  const [feedback, setFeedback] = useState('');
  // const [loading, setLoading] = useState();

  // const onSubmit = async () => {
  //   setLoading(true);
  //   const r = await cancelRequest(id, feedback);
  //   setLoading(false)


  // }
  if (!modalVisible) return null;
  const [visible, setVisible] = useState(modalVisible);
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState('');

  const onSubmit = async () => {
    setLoading(true);
    const res = await cancelRequest(id, feedback)
    setLoading(false);
    setVisible(false);



  };
  return (
    <Modal isVisible={visible}>
      <LoadingModal modalVisible={loading} />
      <View style={styles.container}>
        <TouchableOpacity onPress={() => { setVisible(false)}} style={styles.exitButton} >
          <Entypo name="cross" size={24} color="#454F63" />
        </TouchableOpacity>
        <View >
          <Text style={styles.headerQ}>Are you sure you want to cancel?</Text>
        </View>
        <View>
          <TextInput
            style={styles.textInput}
            placeholder="Tell us the problem if it is related to us"
            multiline
            placeholderTextColor='#78849E'
            scrollEnabled={true}
            value={feedback}
            onChangeText={(text) => { setFeedback(text) }}
          >
          </TextInput>

        </View>
        <Text style={styles.Note}>You might be charged the visit payment if you exceeded the minimum time for cancelling. </Text>
        <MainButton style={styles.confirmButton} onPress={() => onSubmit()}>
          <Text style={styles.confirmText}>Confirm</Text>
        </MainButton>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  container: {
    height: normalize(310),
    backgroundColor: "#FFFFFF",
    borderRadius: 40,
    width: normalize(355),
    alignItems: "center",
    alignSelf: 'center'
  },
  exitButton: {
    alignSelf: 'flex-end',
    marginRight: '7%',
    marginTop: '3%'
  },
  headerQ: {
    width: normalize(200),
    fontFamily: "Montserrat_SemiBold",
    marginTop: normalize(-5),
    fontSize: normalize(20),
    color: "#132641",
    textAlign: "center",
  },
  Note: {
    fontFamily: "Montserrat",
    fontSize: normalize(9),
    width: normalize(200),
    top: normalize(15),
    color: '#132641'
  },
  textInput: {
    marginTop: normalize(10),
    borderRadius: normalize(15),
    width: normalize(220),
    height: normalize(100),
    borderWidth: 1,
    borderColor: 'lightgrey',
    textAlignVertical: 'top',
    padding: 10,
    fontFamily: "Montserrat_SemiBold",
    fontSize: 12,

  },
  confirmButton: {
    paddingHorizontal: normalize(30),
    paddingVertical: normalize(8),
    top: normalize(25),
  },
  confirmText: {
    color: "white",
    fontSize: normalize(18),
    fontFamily: "Montserrat",

  }

});
export default CancelModal;