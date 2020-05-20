import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { signUpAction, ClearSignUpStateAction } from '../../../store/Client/actions/Client_SignUp_actions'
import signUpStyle from '../../../styles/signUpStyle'
import Input from '../../../components/global/Input';
import AuthHeader from '../authentications/AuthHeader';
import { SignUpUser } from '../../../moduels/Client/Client_Moduel';
import ErrorModal from '../../../components/global/ErrorModal';
import LoadingModal from '../../../components/global/LoadingModal';
import SuccessModal from '../../../components/global/SuccessModal';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const SignUp = ({ navigation }) => {
  const disptach = useDispatch();

  const requestState = useSelector(
    (store) => {
      return {
        pending: store.SignUpReducer.sendingSignUpRequest,
        error: store.SignUpReducer.errorSignUpRequest,
        success: store.SignUpReducer.successSignUpRequest,
        errorMessage: store.SignUpReducer.errorMessage
      }
    })

  const [firstName, setFirstname] = useState('');
  const [lastName, setLastname] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');

  const [firstname_error, setFirstname_error] = useState('');
  const [lastname_error, setLastname_error] = useState('');
  const [phonenumber_error, setPhonenumber_error] = useState('');
  const [email_error, setemail_error] = useState('');
  const [password_error, setpassword_error] = useState('');
  const [confirmpassword_error, setConfirmPassword_error] = useState('');

  const validate = () => {
    let error = true;
    if (firstName == "") {
      setFirstname_error("Please Enter Your First Name ")
      error = false;
    }
    else {
      var letters = /^[A-Za-z]+$/;
      if (letters.test(firstName) === true) {
        setFirstname_error("")
      }
      else {
        setFirstname_error("Can't Enter Numbers")
        error = false
      }
    }

    if (lastName == '') {
      setLastname_error("Please Enter Your Last Name")
      error = false
    }
    else {
      var letters = /^[A-Za-z]+$/;
      if (letters.test(lastName) === true) {
        setLastname_error("")
      }
      else {
        setLastname_error("Can't Enter Numbers")
        error = false
      }
    }

    if (!phonenumber || phonenumber == "") {
      error = true;
      setPhonenumber_error("Please Enter your Phone Number ")
    }
    if (phonenumber.length < 6 || phonenumber.length > 15) {
      error = true;
      setPhonenumber_error("Number must be between [6-15]")
    }
    else {
      var numbers = /^[0-9\b]+$/;
      if (numbers.test(phonenumber) === true) {
        setPhonenumber_error("")
      }
      else {

        error = true;
        setPhonenumber_error("Please Enter Numbers Only ")
      }

    }


    if (email == '') {
      setemail_error("Please Enter Your Email")
      error = false
    }
    else {
      const valid = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
      if (valid.test(email) === true) {
        setemail_error("")
      }
      else {
        setemail_error("Invalid Email")
        error = false
      }
    }
    if (password == '') {
      setpassword_error("Please Enter Your Password")
      error = false
    }
    else {
      if (password.length < 8) {
        setpassword_error("Must Be 8 Characters Or More")
        error = false
      }
      else setpassword_error("")
    }
    if (confirmpassword == '') {
      setConfirmPassword_error("Please Confirm Your Password")
      error = false
    }
    else {
      if (password != confirmpassword) {
        setConfirmPassword_error("Confirm Password Doesn't Match")
        error = false
      }
      else
        setConfirmPassword_error("")
    }
    return error;
  }

  const onSubmit = () => {
    if (validate()) {
      console.log("Success")
      disptach(signUpAction(new SignUpUser(firstName, lastName, phonenumber, email, password)))
    }
    else console.log("Failed")
  }

  return (
    <KeyboardAwareScrollView>
      <View >
        <LoadingModal modalVisible={requestState.pending} />
        <SuccessModal modalVisible={requestState.success} closeModal={() => { disptach(ClearSignUpStateAction()), navigation.navigate('SignIn') }} message="Please check your email to verify your account!" />
        <ErrorModal modalVisible={requestState.error} closeModal={() => { disptach(ClearSignUpStateAction()) }} message={requestState.errorMessage} />
        <AuthHeader
          continueButtonPress={() => { onSubmit() }}
          signUpButtonPress={() => { }}
          signInButtonPress={() => { navigation.navigate('SignIn') }}
          backButtonPress={() => { navigation.navigate('Home') }}
          active={2}
          signin={0}
        >
          <Input
            placeholder="First Name"
            placeholderTextColor='#B9B3BD'
            autoCorrect={false}
            autoCapitalize="words"
            style={signUpStyle.firstnameinput}
            value={firstName}
            error={firstname_error != ''}
            onChangeText={(text) => setFirstname(text)}
          />
          <Text style={signUpStyle.textError}>{firstname_error}</Text>
          <Input
            placeholder="Last Name"
            placeholderTextColor='#B9B3BD'
            autoCorrect={false}
            autoCapitalize="words"
            style={signUpStyle.input}
            value={lastName}
            error={lastname_error != ''}
            onChangeText={(text) => setLastname(text)}
          />
          <Text style={signUpStyle.textError}>{lastname_error}</Text>
          <Input
            placeholder="Phone Number"
            placeholderTextColor='#B9B3BD'
            autoCorrect={false}
            autoCapitalize="none"
            style={signUpStyle.input}
            keyboardType={"numeric"}
            value={phonenumber}
            error={phonenumber_error != ''}
            onChangeText={(text) => setPhonenumber(text)}
          />
          <Text style={signUpStyle.textError}>{phonenumber_error}</Text>
          <Input
            placeholder="Email"
            placeholderTextColor='#B9B3BD'
            autoCorrect={false}
            autoCapitalize="none"
            style={signUpStyle.input}
            keyboardType={"email-address"}
            value={email}
            error={email_error != ''}
            onChangeText={(text) => setEmail(text)}
          />
          <Text style={signUpStyle.textError}>{email_error}</Text>
          <Input
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor='#B9B3BD'
            autoCorrect={false}
            autoCapitalize="none"
            style={signUpStyle.input}
            value={password}
            onChangeText={(text) => setPassword(text)}
            error={password_error != ''}
          />
          <Text style={signUpStyle.textError}>{password_error}</Text>
          <Input
            placeholder="Confirm Password"
            secureTextEntry={true}
            placeholderTextColor='#B9B3BD'
            autoCorrect={false}
            autoCapitalize="none"
            style={signUpStyle.input}
            value={confirmpassword}
            onChangeText={(text) => setConfirmPassword(text)}
            error={confirmpassword_error != ''}
          />

          <Text style={signUpStyle.textError}>{confirmpassword_error}</Text>
          <Text style={signUpStyle.ByClickingText}>By clicking continue you are agreeing to our </Text>
          <View>
            <TouchableOpacity>
              <Text style={signUpStyle.terms_conditionsbutton}>terms and conditions.</Text>
            </TouchableOpacity>
          </View>
        </AuthHeader>
      </View>
    </KeyboardAwareScrollView>
  )
}

export default SignUp;