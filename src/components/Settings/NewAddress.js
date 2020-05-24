import React from "react";
import { View, StyleSheet, Text } from "react-native";


const NewAddress = ({ address }) => {
  return (
    <View style={styles.container}>
      <View >
        <Text style={styles.name}>{address.name}</Text>
        <Text style={styles.address}>{address.addressName}</Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: 65,
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
    marginBottom: '2%'
  },

  name: {
    fontSize: 13,
    fontFamily: "Montserrat_bold",
    color: "#132641",
    marginLeft:'8%',
    marginTop: "3%",

  },
  address: {
    fontSize: 13,
    color: "#B1B7C0",
    fontFamily: "Montserrat",
    marginTop: "1%",
    marginLeft:'8%',

  },


});

export default NewAddress;
