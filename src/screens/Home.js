import React, { Component } from 'react';
import {Text,View,StyleSheet,ImageBackground,TextInput,Image,KeyboardAvoidingView,Card,Dimensions,Ani} from 'react-native';
//import { SimpleAnimation } from 'react-native-simple-animations';
import { Button } from 'react-native-elements'; 
//import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import image from '../images/image.png'

const {width,height}=Dimensions.get('window');
const window = Dimensions.get('window');
export const IMAGE_HEIGHT = window.width / 2;
export const IMAGE_HEIGHT_SMALL = window.width /7;

const First=({navigation})=>
{
    return(
      <ImageBackground
  source={image}
  style={{ flex: 1, resizeMode:'stretch',height:'90%',backgroundColor:'#241332'}} >
      <View style={styles.main}>  
  <Text style={styles.text1}>
      Welcome 
  </Text>
  <Text style={styles.text}>
   to Lift Up
  </Text>
  <Text style={styles.text2}>
  The best way to find quick help.
  </Text>
  <Text style={styles.text2}>
 Let’s get started!
  </Text>
  </View>
  <View  style={{borderTopLeftRadius:60,backgroundColor:'#7598BA',height:'10%'}}>
  
  <Button style={styles.button1} title="LOG IN" titleStyle={{color:'white',fontSize:14,fontWeight:'500'}} type="clear" onPress={()=>navigation.navigate('Login')}>
    
  </Button>
 
  </View>
  <View style={{backgroundColor:'#7598BA',height:'10%'}}>
  <Button style={styles.button2} title="SIGN UP" titleStyle={{color:'white',fontSize:14,fontWeight:'500'}} type="clear" onPress={()=>navigation.navigate('Register')}/>  
  </View>
</ImageBackground>

    );
}
const styles=StyleSheet.create({
  main:{
       flex: 1,
       justifyContent: 'center', 
       alignItems: 'center',
       marginTop:80
  },
  text:{
    color:'white',
    fontSize:32,
    marginBottom:20,
    //fontFamily: 'light',
    fontWeight: 'bold',
  },
  text1:{
        color:'white',
        fontSize:32,
        fontWeight: 'bold',
        //fontFamily: 'light'    
      },
      text2:{
        color:'white',
        fontSize:12,
        fontWeight: '200',
       // fontFamily: 'light'
      },
      button1: {
        backgroundColor: '#7598BA',
         height: '80%',
        borderTopLeftRadius:60,
        justifyContent:'center',
        alignItems:'center'
      },
      button2: {
        backgroundColor: '#132641',
        height: '100%',
       // marginBottom: 670,
        //paddingBottom: 500,
        //marginTop: 120,
        borderTopLeftRadius:60,
        justifyContent:'center',
        alignItems:'center'
      }
});
export default First;