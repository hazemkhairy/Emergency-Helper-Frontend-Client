import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Platform,
  Linking,
} from "react-native";
import Modal from "react-native-modal";
import MainButton from "../global/MainButton";
import normalize from "react-native-normalize";
import Icon from "react-native-vector-icons/Ionicons";
import LoadingModal from "../global/LoadingModal";
import CancelModal from "../Request/CancelModal";
import { useNavigation } from 'react-navigation-hooks'
import { getAcceptedOffer } from '../../Utils/HelpersOffers'
import ChatModal from '../../screens/ClientChat'
const HelperModal = ({ header }) => {
  const [modalVisible,setModalVisble]=useState(true)
  const [loading, setLoading] = useState(true);
  const [cancelModal, setCancelModal] = useState(false);
  const [chatModal,setChatModal]=useState(false)
  const [offer, setOffer] = useState({});
  useEffect(
    () => {
      getAcceptedOffer().then(
        res => {
          setOffer(res);
          setLoading(false);
        }
      )
    }, []
  )
  const makeCall = () => {
    let mobile = { ...offer.helperNumber }

    if (Platform.OS === 'android') {
      mobile = `tel:${offer.helperNumber}`;
    } else {
      mobile = `telprompt:${offer.helperNumber}`;
    }
    Linking.openURL(mobile);
  }
  
  const onChat = () => {
    setChatModal(true)
  };
  const onCancel = () => {
    setCancelModal(true);
  };
  
  if (loading)
    return <LoadingModal modalVisible={loading} />
  if (cancelModal)
    return <CancelModal
      CancelModalVisble={cancelModal}
      close={() => setCancelModal(false)}
    />
  if(chatModal)
  return <ChatModal close={()=>setChatModal(false)} />
  
  return (
    <Modal isVisible={modalVisible}>
      <View style={styles.container}>
        {header != "" ? <Text style={styles.header}>{header}</Text> : null}
        <View style={styles.centerContainer}>
          {header == "" ? (
            <TouchableOpacity
              onPress={() => {
                close();
              }}
              style={styles.closeIcon}
            >
              <Icon name="ios-close" size={35} />
            </TouchableOpacity>
          ) : null}
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{
                uri: offer.helperImage,
              }}
            />
            <View style={styles.nameNumContainer}>
              <Text style={styles.name}>{offer.helperName.firstName} {offer.helperName.lastName}</Text>
              <Text style={styles.number}>{offer.helperNumber}</Text>
            </View>
            <TouchableOpacity onPress={() => { makeCall() }}>
              <Icon
                name="ios-call"
                style={styles.callIcon}
                size={normalize(25)}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.chatBTNContainer}>
            <MainButton style={styles.chatBTN} onPress={() => onChat()}>
              <Text style={styles.chatBTNtxt}>Chat</Text>
            </MainButton>
          </View>
        </View>
        <View style={styles.infoContainer}>
          <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
            <View style={styles.view}>
              <Text style={styles.infoLabels}>
                Price Visit:
            <Text style={styles.info}> {offer.priceRange.from} ~ {offer.priceRange.to}</Text>
              </Text>
            </View>
            <View style={styles.view}>
              <Text style={styles.infoLabels}>
                Category:
                <Text style={styles.info}> {offer.category}</Text>
              </Text>
            </View>
            <View style={styles.view}>
              <Text style={styles.infoLabels}>
                Skills:
                <Text style={styles.info}> {offer.skills}</Text>
              </Text>
            </View>
            <View style={styles.view}>
              <Text style={styles.infoLabels}>
                Offer:
                <Text style={styles.info}> {offer.offerDescription}</Text>
              </Text>
            </View>
          </ScrollView>
        </View>
        <TouchableOpacity onPress={() => onCancel()} style={styles.CancelBTN}>
          <Text style={styles.cancelText}>Cancel Request </Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  container: {
    height: normalize(280),
    backgroundColor: "white",
    borderRadius: 40,
    width: "105%",
    alignItems: "center",
    alignSelf: "center",
    overflow: "hidden",
  },

  centerContainer: {
    top: normalize(8),
    right: normalize(68),
  },
  header: {
    fontSize:
      normalize(23) *
      Math.min(
        Dimensions.get("window").height / 820.0,
        Dimensions.get("window").width / 380.0
      ),
    color: "#132641",
    fontFamily: "Montserrat_bold",
    top: normalize(15),
    marginBottom: "10%",
  },
  closeIcon: {
    color: "#454F63",
    bottom: normalize(5),
    left: normalize(280),
  },
  image: {
    width: normalize(60),
    height: normalize(60),
    borderRadius: normalize(400 / 2),
    borderColor: "#132641",
    borderWidth: 0.5,
    right: normalize(10),
    bottom: normalize(20),
    resizeMode: "cover",
  },
  imageContainer: {
    flexDirection: "row",
  },
  name: {
    fontSize:
      normalize(20) *
      Math.min(
        Dimensions.get("window").height / 820.0,
        Dimensions.get("window").width / 380.0
      ),
    color: "#132641",
    fontFamily: "Montserrat_SemiBold",
    bottom: normalize(5),
  },
  number: {
    fontSize:
      normalize(16) *
      Math.min(
        Dimensions.get("window").height / 820.0,
        Dimensions.get("window").width / 380.0
      ),
    color: "#7B8594",
    fontFamily: "Montserrat",
    width: normalize(100)
  },
  nameNumContainer: {
    flexDirection: "column",
    bottom: normalize(5),
  },
  callIcon: {
    color: "#132641",
    top: normalize(14),
    // right: normalize(5),
  },
  chatBTNContainer: {
    left: normalize(170),
    bottom: normalize(66.5),
  },
  chatBTN: {
    paddingHorizontal: normalize(10),
    paddingVertical: "5.5%",
    width: "65%",
  },
  chatBTNtxt: {
    color: "white",
    fontSize: normalize(14),
    fontFamily: "Montserrat_SemiBold",
  },
  infoLabels: {
    color: "#687486",
    fontSize: normalize(15),
    fontFamily: "Montserrat_Medium",
    marginTop: "2%",
    width: normalize(300)
  },
  info: {
    color: "#B1B7C0",
    fontSize: normalize(15),
    fontFamily: "Montserrat",
    marginLeft: "30%",
  },
  infoContainer: {
    marginRight: normalize(-5),
    bottom: normalize(80),
    height: normalize(126),
    width: normalize(500)
  },
  view: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "20%",
  },
  CancelBTN: {
    bottom: normalize(72),
    left: normalize(90),
  },
  cancelText: {
    color: "#B72020",
    fontSize: normalize(15),
    fontFamily: "Montserrat_SemiBold",
  },
});
export default HelperModal;
