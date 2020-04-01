import React, { useState } from 'react';
import { Text, View, TouchableOpacity,Button } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import { useDispatch, useSelector } from 'react-redux';
import { signInAction } from '../../../store/Client/actions/Client_SignIn_actions'
import { SignInUser } from '../../../moduels/Client/Client_Moduel';

import globalStyle from '../../../styles/globalStyle'
import Input from '../../../components/global/Input';
import AuthHeader from '../authentications/AuthHeader';
import signInStyle from '../../../styles/signInStyle';

const SignIn = ({ navigation }) => {
  const disptach = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [email_error, setemail_error] = useState('');
  const [password_error, setpassword_error] = useState('');

  const isLoading = useSelector((state) => {
    return state.SignInReducer.SignIn
  })
  const token = useSelector((state) => {
    return state.SignInReducer.token
  })

  const onSubmit = () => {

    if (email == '') {
      setemail_error("Please Enter Your Email")
    }
    else {
      const valid = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
      if (valid.test(email) === true) {
        setemail_error("")
      }
      else {
        setemail_error("Invalid Email")
      }
    }
    if (password == '') {
      setpassword_error("Please Enter Your Password")
    }
    else {
      if (password.length < 8)

        setpassword_error("Password Must Be 8 Characters Or More")
      else setpassword_error("")
    }
  }
  return (
   
    <View>
      <View>

        <AuthHeader
          continueButtonPress={() => { onSubmit() }}
          signUpButtonPress={() => { navigation.navigate('SignUp') }}
          signInButtonPress={() => { }}
          backButtonPress={() => { navigation.navigate('Home') }}
          active={1}
        >

          <Input
            placeholder="Email"
            placeholderTextColor='#B9B3BD'
            keyboardType={"email-address"}
            autoCorrect={false}
            autoCapitalize="none"
            style={globalStyle.input}
            error = {email_error != ''}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <Text style={globalStyle.texterror}>{email_error}</Text>
          <Input
            secureTextEntry={true}
            placeholder="Password"
            placeholderTextColor='#B9B3BD'
            autoCorrect={false}
            autoCapitalize="none"
            style={globalStyle.input}
            value={password}
            onChangeText={(text) => setPassword(text)}
            error = {password_error != ''}

          />
          <Text style={globalStyle.texterror}>{password_error}</Text>
        </AuthHeader>
      </View>
      <View>
        {
          isLoading === true ? <ActivityIndicator /> : null
        }
        {
          token ? <Text >{token}</Text> : null
        }
        {/* <Button type='clear' title='FORGOT PASSWORD' titleStyle={signInStyle.ForgetPasswordButton}
          onPress={() => { }}
        /> */}
         
      </View>
      <TouchableOpacity style={signInStyle.ForgetPasswordButton}>
            <Text style={signInStyle.ForgetPasswordText}>FORGOT PASSWORD</Text>
            </TouchableOpacity>   
    </View >


  );


}

export default SignIn;