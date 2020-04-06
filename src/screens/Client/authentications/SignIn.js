import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { signInAction } from '../../../store/Client/actions/Client_SignIn_actions'
import globalStyle from '../../../styles/globalStyle'
import Input from '../../../components/global/Input';
import AuthHeader from '../authentications/AuthHeader';
import signInStyle from '../../../styles/signInStyle';
import { SignInUser } from '../../../moduels/Client/Client_Moduel';
import ErrorModal from '../../../components/global/ErrorModal';
import LoadingModal from '../../../components/global/LoadingModal';
import SuccessModal from '../../../components/global/SuccessModal';

const SignIn = ({ navigation }) => {
  const disptach = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [email_error, setemail_error] = useState('');
  const [password_error, setpassword_error] = useState('');

  const requestState = useSelector((store) => {
    return {
      pending: store.SignInReducer.sendingSignInRequest,
      error: store.SignInReducer.errorSignInRequest,
      success: store.SignInReducer.successSignInRequest,
      //  errorMessage: state.signInReducer.errorMessage
    }
  })
  const isLoading = useSelector((state) => {
    return state.SignInReducer.SignIn
  })
  const token = useSelector((state) => {
    return state.SignInReducer.token
  })
  const validate = () => {
    let error = true;
    if (email == '') {
      setemail_error("Please Enter Your Email")
      error = false;
    }
    else {
      const valid = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
      if (valid.test(email) === true) {
        setemail_error("")
      }
      else {
        setemail_error("Invalid Email")
        error = false;
      }
    }
    if (password == '') {
      setpassword_error("Please Enter Your Password")
      error = false;
    }
    else {
      if (password.length < 8) {
        setpassword_error("Password Must Be 8 Characters Or More")
        error = false;
      }
      else setpassword_error("")
    }
    return error;
  }
  const onSubmit = () => {
    if (validate()) {
      console.log("Success")
      disptach(signInAction(new SignInUser(email, password)))
    }
    else console.log("Failed")
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
            error={email_error != ''}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <Text style={globalStyle.textError}>{email_error}</Text>
          <Input
            secureTextEntry={true}
            placeholder="Password"
            placeholderTextColor='#B9B3BD'
            autoCorrect={false}
            autoCapitalize="none"
            style={globalStyle.input}
            value={password}
            onChangeText={(text) => setPassword(text)}
            error={password_error != ''}

          />
          <Text style={globalStyle.textError}>{password_error}</Text>
          {/* <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: 'cyan', height: '5%' }}>
          {

            requestState.pending ?
              <ActivityIndicator size="small" /> :
              requestState.success ?
                <Text>sucess</Text> :
                requestState.error ?
                  <Text>Error</Text> :
                  null
          }
        </View> */}
        </AuthHeader>
      </View>

      <TouchableOpacity style={signInStyle.ForgetPasswordButton}>
        <Text style={signInStyle.ForgetPasswordText}>FORGOT PASSWORD</Text>
      </TouchableOpacity>
    </View >


  );


}

export default SignIn;