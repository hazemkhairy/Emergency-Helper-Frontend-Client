import React, { useState } from 'react';
import { View, Text, Picker, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import AuthHeaderStyle from '../../../styles/authHeaderSyle';
import SignInStyle from '../../../styles/signInStyle';
import globalStyle from '../../../styles/globalStyle';
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
                <View style={globalStyle.signInUpContainer}>
                    <TouchableOpacity
                        onPress={() => { props.signInButtonPress() }}
                    >
                        <Text style={props.active == 1 ? globalStyle.activeText : globalStyle.inActiveText} >SIGN IN</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => { props.signUpButtonPress() }}
                    >
                        <Text style={props.active == 2 ? globalStyle.activeText : globalStyle.inActiveText} >SIGN UP</Text>
                    </TouchableOpacity>

                </View>
                <View style={globalStyle.form} >
                    {props.children}
                </View>
                <View >
                    <TouchableOpacity style={globalStyle.continueButton}
                        onPress={() => { props.continueButtonPress() }}
                    >
                        <Text style={globalStyle.continueText}>CONTINUE</Text>
                    </TouchableOpacity>
                    
                </View>
                
            </View>
        </View>
    )
}
export default AuthHeader;