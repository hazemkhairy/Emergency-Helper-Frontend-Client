import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";


const ReusableButton = (props) => {
  let buttonStyle = { ...styles.buttonStyle, ...props.style };
  return (
    <TouchableOpacity onPress={props.onPress} style={buttonStyle}>
    
             {props.children}
        <Text style={styles.buttonText}>{props.Title}</Text>
       
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  buttonStyle: {
    borderRadius: 30,
    width: "40%",
    backgroundColor:'#132641',
    alignItems:'center',
    //justifyContent:'center',
    padding:10,
    //paddingVertical:10,
    marginBottom:'2%',
    //flex:1
   
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontFamily: "Montserrat",
    textAlign: "center",
  },
});

export default ReusableButton;
