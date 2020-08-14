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
import Star from 'react-native-vector-icons/Foundation';
import { Entypo } from "@expo/vector-icons";
import LoadingModal from "../global/LoadingModal";
import CancelModal from "../Request/CancelModal";
import { useNavigation } from "react-navigation-hooks";
import { getAcceptedOffer } from "../../Utils/HelpersOffers";
import ChatModal from "../../screens/ClientChat";
const HelperModal = ({ header }) => {
  const [modalVisible, setModalVisble] = useState(true);
  const [loading, setLoading] = useState(true);
  const [cancelModal, setCancelModal] = useState(false);
  const [chatModal, setChatModal] = useState(false);
  const [offer, setOffer] = useState({});
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  useEffect(() => {
    getAcceptedOffer().then((res) => {
      setOffer(res);
      setfirstName(res.helperName.firstName);
      setlastName(res.helperName.lastName);
      setLoading(false);
    });
  }, []);
  

const fullName= firstName+' '+ lastName;
const name = fullName.split(' ').slice(0,2).join(' ');
  const makeCall = () => {
    let mobile = { ...offer.helperNumber };

    if (Platform.OS === "android") {
      mobile = `tel:${offer.helperNumber}`;
    } else {
      mobile = `telprompt:${offer.helperNumber}`;
    }
    Linking.openURL(mobile);
  };

  const onChat = () => {
    setChatModal(true);
  };
  const onCancel = () => {
    setCancelModal(true);
  };

  if (loading) return <LoadingModal modalVisible={loading} />;
  if (cancelModal)
    return (
      <CancelModal
        CancelModalVisble={cancelModal}
        close={() => setCancelModal(false)}
      />
    );
  if (chatModal) return <ChatModal close={() => setChatModal(false)} />;

  return (
    <Modal isVisible={modalVisible}>
      <View style={styles.container}>
        {header != "" ? <Text style={styles.header}>{header}</Text> : null}
        <View style={styles.centerContainer}>
          
          <View style={styles.helperDetailsContainer}>
            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={{
                  uri: offer.helperImage,
                }}
              />
              <View style={styles.nameNumContainer}>
                <Text style={styles.name}>{name}
                </Text>
              </View>
              <TouchableOpacity
                style={styles.call}
                onPress={() => {
                  makeCall();
                }}
              >
                <Text style={styles.number}>{offer.helperNumber}</Text>
                <Entypo name="phone" size={normalize(16)} />
              </TouchableOpacity>
            </View>
            <View style={styles.rateContainer}>
                                   <Text style={styles.ratenumberStyle}>4.75</Text>
                                   <Star name="star" style={styles.starStyle} />
                                </View>
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
                <Text style={styles.info}>
                  {" "}
                  {offer.priceRange.from} ~ {offer.priceRange.to}
                </Text>
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
    top: normalize(40),
    right: normalize(30),
  },
  helperDetailsContainer: {
    flex: 1,
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
    marginBottom: "2%",
  },

  image: {
    position: "absolute",
    justifyContent: "flex-end",
    width: normalize(60),
    height: normalize(60),
    borderRadius: normalize(400 / 2),
    borderColor: "#132641",
    borderWidth: 0.5,
    left: normalize(-70),
    top: normalize(-20),
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
    position: "absolute",
    justifyContent: "flex-end",
  },
  number: {
    fontSize: Dimensions.get("window").height>850? normalize(14):normalize(14),
    color: "#7B8594",
    fontFamily: "Montserrat",
    width: normalize(90),
  },
  nameNumContainer: {
    flexDirection: "column",
    bottom: normalize(6),
    position:'absolute'
  },
  call: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    bottom: normalize(-11),
  },

  chatBTNContainer: {
    left: normalize(162),
    bottom: normalize(218),
  },
  chatBTN: {
    paddingHorizontal: normalize(10),
    paddingVertical: "3%",
    width: "57%",
    right: normalize(5),
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
    width: normalize(300),
  },
  info: {
    color: "#B1B7C0",
    fontSize: normalize(15),
    fontFamily: "Montserrat",
    marginLeft: "30%",
  },
  infoContainer: {
    marginRight: normalize(-5),
    bottom: normalize(190),
    height: normalize(126),
    width: normalize(500),
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
  rateContainer:{
    flexDirection:'row',
    left:normalize(188),
    position:'absolute',
    top: normalize(-15),
   
},
starStyle:{
    color:'#132641',
    fontSize:17,
    marginLeft:5,
    top:-1
},
ratenumberStyle:{
    fontFamily: "Montserrat_Medium",
    color:'#132641',
    fontSize:13
}
});
export default HelperModal;
