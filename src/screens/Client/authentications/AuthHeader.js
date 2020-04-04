import React, { useState } from 'react';
import { View, Text, Picker, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import AuthHeaderStyle from '../../../styles/authHeaderSyle';
import globalStyle from '../../../styles/globalStyle';
const AuthHeader = (props) => {

    return (
        <View>
            <View style={globalStyle.white_Background}>
                <View style={globalStyle.blue_Background}>
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
                <View style={AuthHeaderStyle.form} >
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