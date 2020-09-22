import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import normalize from 'react-native-normalize';
import Icon from "react-native-vector-icons/AntDesign";
import { deleteAddress } from "../../Utils/Addresses";
import LoadingModal from "../global/LoadingModal";


const NewAddress = ({ address, reload }) => {
  const [loading, setLoading] = useState(false);

  const removeAddress = async () => {
    setLoading(true);
    await deleteAddress(address._id).then((result) => {
      setLoading(false);
      reload()
    });
  }
  return (
    <View style={styles.container}>
      <LoadingModal modalVisible={loading}></LoadingModal>

      <View style={styles.addressContainer}>
        <View style={styles.dataContainer}>
          <Text style={styles.name}>{address.name}</Text>
          <Text style={styles.address}>{address.addressName}</Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              removeAddress();
            }}
            style={styles.Icon}
          >
            <Icon name="close" size={25} color="#b30000" />
          </TouchableOpacity>
        </View>


      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    width: normalize(338),
    minHeight: normalize(60),
    alignSelf: "center",
    borderRadius: 40,
    shadowOffset: {
      width: 4,
      height: 6,

    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 3,
    backgroundColor: "#FFFFFF",
    marginTop: "3%",
    marginBottom: '2%',

  },
  addressContainer: {
    margin: '2%',
    flexDirection: 'row',
    justifyContent:'space-between'
  },
  dataContainer:{
    width:'80%'
  },
  name: {
    fontSize: normalize(13),
    fontFamily: "Montserrat_bold",
    color: "#132641",
    marginLeft: '8%',
    marginTop: "3%",

  },
  address: {
    fontSize: normalize(13),
    color: "#B1B7C0",
    fontFamily: "Montserrat",
    marginTop: "1%",
    marginLeft: '8%',
    marginRight: '3%',
  },
  Icon: {
    marginTop: '25%',
    marginRight:'5%'
  }
});

export default NewAddress;
