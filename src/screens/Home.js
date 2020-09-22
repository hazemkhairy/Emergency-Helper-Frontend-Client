import React from 'react';
import { Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import image from '../images/image.png';
import homePageStyle from '../styles/homePageStyle';

const First = ({ navigation }) => {
    return (
        <ImageBackground source={image} style={homePageStyle.Backgroundstyle} >

            <View style={homePageStyle.main}>
                <Text style={homePageStyle.welcome}>
                    Welcome to
                </Text>
                <Text style={homePageStyle.toliftup}>
                     Emergency Helper
                </Text>
                <Text style={homePageStyle.text}>
                    The best way to find quick help.
                </Text>
                <Text style={homePageStyle.text}>
                    Let’s get started!
                </Text>
            </View>
            
            <View style={homePageStyle.loginbackground}>
                <TouchableOpacity style={homePageStyle.LoginButton} onPress={() => navigation.navigate('SignIn')}>
                    <Text style={homePageStyle.loginTextStyle}>LOG IN</Text>
                </TouchableOpacity>
           
            
                <TouchableOpacity style={homePageStyle.SignUpButton} onPress={() => navigation.navigate('SignUp')}>
                    <Text style={homePageStyle.SignUpTextStyle}>SIGN UP</Text>
                </TouchableOpacity>
                </View>
           
        </ImageBackground >

    );
}


export default First;