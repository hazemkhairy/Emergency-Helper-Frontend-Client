import React, { Component } from 'react';
import { Text, View, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import image from '../images/image.png';

//Missing fonts & (Login and Sign Up botons curves)
const First = ({ navigation }) => {
    return (
        <ImageBackground source={image} style={styles.Backgroundstyle} >

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
            
            <View style={styles.buttonbackground1}>
                <TouchableOpacity style={styles.LoginButton} onPress={() => navigation.navigate('SignIn')}>
                    <Text style={styles.loginTextStyle}>LOG IN</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonbackground2}>
                <TouchableOpacity style={styles.SignUpButton} onPress={() => navigation.navigate('SignUp')}>
                    <Text style={styles.SignUpTextStyle}>SIGN UP</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground >

    );
}
const styles = StyleSheet.create({
    Backgroundstyle: {
        flex: 1,
        resizeMode: 'stretch',
        height: '90%',
        backgroundColor: '#241332'
    },
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 80
    },
    text: {
        color: '#FFFFFF',
        fontSize: 32,
        fontFamily:'Montserrat_bold',
        marginBottom: '3%',
    },
    text1: {
        color: '#FFFFFF',
        fontSize: 32,
        fontWeight: 'bold',
        fontFamily:'Montserrat_bold',
       
    },
    text2: {
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: '200',
        fontFamily: 'Montserrat_Medium'

    },
    loginTextStyle: {
        color: 'white',
        fontSize: 14,
        fontFamily:'Montserrat_SemiBold',
        justifyContent: 'center',
        alignItems: 'center'
    },
    LoginButton: {
        backgroundColor: '#7598BA',
        height: '100%',
        borderTopLeftRadius: 120,
        justifyContent: "center",
        alignItems: 'center',
        

    },
    SignUpButton: {
        backgroundColor: '#132641',
        height: '100%',
        borderTopLeftRadius: 120,
        //justifyContent: "center",
        alignItems: 'center',
    },
    SignUpTextStyle: {
        color: 'white',
        fontSize: 14,
        fontFamily:'Montserrat_SemiBold',
        marginTop:30
    },
    buttonbackground1:{
        borderTopLeftRadius: 100, 
        backgroundColor: '#7598BA',
         height: '10%' 

    },
    buttonbackground2:{
      backgroundColor: '#7598BA',
       height: '12%'
    }
});

export default First;