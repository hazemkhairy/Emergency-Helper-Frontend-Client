import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Image, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { TouchableOpacity } from "react-native-gesture-handler";


const SettingsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
        <View style={styles.blueBackground}>
          <Text style={styles.hText}>Settings</Text>
        </View>
        <View>
            <Text style={styles.subHeader}>Settings</Text>
         <TouchableOpacity style={styles.a} onPress={() => {
          navigation.navigate("AccountInfoScreen");
        }} >
             <Text style={styles.settingsTXT}>Account Info</Text>
             <Icon name="ios-arrow-forward" size={25} style={styles.icon} marginLeft='55%'  />
         </TouchableOpacity>

         <TouchableOpacity style={styles.a}>
             <Text style={styles.settingsTXT}>Saved Addresses</Text>
             <Icon name="ios-arrow-forward" size={25} style={styles.icon} />
         </TouchableOpacity>

         <TouchableOpacity style={styles.a}>
             <Text style={styles.settingsTXT}>Change Password</Text>
             <Icon name="ios-arrow-forward" size={25} style={styles.icon} />
         </TouchableOpacity>
         </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  blueBackground: {
    backgroundColor: "#7598BA",
    height: Dimensions.get("window").height * 0.3,
    borderBottomLeftRadius: 70,
  },
  hText: {
    fontSize: 40,
    color: "white",
    fontFamily: "Montserrat_bold",
    marginTop: "25%",
    alignSelf: "center",
  },
  subHeader:{
    fontSize: 24,
    color: "#132641",
    marginBottom: '4%',
    fontFamily: "Montserrat_SemiBold",
    marginLeft:'12%',
    marginTop:'10%',

  },
  
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  settingsTXT:{
    fontSize: 18,
    color: "#132641",
    fontFamily: "Montserrat_Medium",
    width: '75%',

  },
  a:{
    flexDirection: "row",
    marginLeft:'12%',
    marginTop: '5%',

  },
  icon:{
    marginLeft:'12%',
     color:'#132641',    


  },
 
});

export default SettingsScreen;
