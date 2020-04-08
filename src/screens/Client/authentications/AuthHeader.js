import React, { useState } from 'react';
import { View, Text, Picker, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import AuthHeaderStyle from '../../../styles/authHeaderSyle';
import globalStyle from '../../../styles/globalStyle';
import signInStyle from '../../../styles/signInStyle'
import signUpStyle from '../../../styles/signUpStyle'
import authHeaderSyle from '../../../styles/authHeaderSyle';

const AuthHeader = (props) => {
  
    return (
        <View>
            <View style={globalStyle.whiteBackground}>
                <View style={globalStyle.blueBackground}>
                </View>
            </View>

            <View style={globalStyle.container}>

                <View >
                    <TouchableOpacity
                        onPress={() => { props.backButtonPress() }}
                        style={globalStyle.backButton} >
                        <Text>
                            <Icon name="arrowleft" style={globalStyle.backIcon} />
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={AuthHeaderStyle.signInUpContainer}>
                    <TouchableOpacity
                        onPress={() => { props.signInButtonPress() }}
                    >
                        <Text style={props.active == 1 ? AuthHeaderStyle.activeText : AuthHeaderStyle.inActiveText} >SIGN IN</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => { props.signUpButtonPress() }}
                    >
                        <Text style={props.active == 2 ? AuthHeaderStyle.activeText : AuthHeaderStyle.inActiveText} >SIGN UP</Text>
                    </TouchableOpacity>

                </View>
                <View style={authHeaderSyle.form}>
                   <View
                   style={props.signin==1? signInStyle.form: signUpStyle.form} >
                    {props.children}
                    </View>
                </View>
                <View >
                    <TouchableOpacity style={globalStyle.continueButton}
                        onPress={() => { props.continueButtonPress() }}
                    >
                        <Text style={globalStyle.continueText}>{props.signin==1?'Sign In':'Sign Up'}</Text>
                    </TouchableOpacity>
                    
                </View>
                
            </View>
        </View>
    )
}
export default AuthHeader;