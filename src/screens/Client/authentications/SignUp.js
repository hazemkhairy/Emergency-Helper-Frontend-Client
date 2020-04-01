import React, { useState } from 'react';
import { Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { signUpAction } from '../../../store/Client/actions/Client_SignUp_actions'
import signUpStyle from '../../../styles/signUpStyle'
import globalStyle from '../../../styles/globalStyle'
import Input from '../../../components/global/Input';
import AuthHeader from '../authentications/AuthHeader';


const SignUp = ({ navigation }) => {
  const disptach = useDispatch();

  const user = useSelector((store) => { return store.SignUpReducer.user })
  const requestState = useSelector(
    (store) => {
      return {
        pending: store.SignUpReducer.sendingSignUpRequest,
        error: store.SignUpReducer.errorSignUpRequest,
        success: store.SignUpReducer.successSignUpRequest
      }
    })
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
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
    if (firstname == "") {
      setFirstname_error("Please Enter Your First Name ")
      error = false;

    }
    else {
      var letters = /^[A-Za-z]+$/;

      if (letters.test(firstname) === true) {
        setFirstname_error("")
      }
      else {
        setFirstname_error("Can't Enter Numbers")
        error = false
      }
    }

    if (lastname == '') {
      setLastname_error("Please Enter Your Last Name")
      error = false
    }
    else {
      var letters = /^[A-Za-z]+$/;

      if (letters.test(lastname) === true) {
        setLastname_error("")
      }
      else {
        setLastname_error("Can't Enter Numbers")
        error = false
      }
    }


    if (phonenumber == "") {
      setPhonenumber_error("Please Enter Your Phone Number ")
    }
    else {
      var numbers = /^[0-9\b]+$/;
      if (numbers.test(phonenumber) === true) {

        setPhonenumber_error("")
      }
      else {
        setPhonenumber_error("Can't Enter Letters")
        error = false
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
        setpassword_error("Password Must Be 8 Characters Or More")
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
      disptach(signUpAction(user))
    }

    else console.log("Failed")
  }

  return (

    <View >

      <AuthHeader

        continueButtonPress={() => { onSubmit() }}
        signUpButtonPress={() => { }}
        signInButtonPress={() => { navigation.navigate('SignIn') }}
        backButtonPress={() => { navigation.navigate('Home') }}
        active={2}
      >
        <Input
          placeholder="First Name"
          placeholderTextColor='#B9B3BD'
          autoCorrect={false}
          autoCapitalize="none"
          style={globalStyle.input}
          value={firstname}
          error={firstname_error != ''}
          onChangeText={(text) => setFirstname(text)}
        />
        <Text style={globalStyle.texterror}>{firstname_error}</Text>
        <Input
          placeholder="Last Name"
          placeholderTextColor='#B9B3BD'
          autoCorrect={false}
          autoCapitalize="none"
          style={globalStyle.input}
          value={lastname}
          error={lastname_error != ''}
          onChangeText={(text) => setLastname(text)}
        />
        <Text style={globalStyle.texterror}>{lastname_error}</Text>
        <Input
          placeholder="Phone Number"
          placeholderTextColor='#B9B3BD'
          autoCorrect={false}
          autoCapitalize="none"
          style={globalStyle.input}
          keyboardType={"numeric"}
          value={phonenumber}
          error={phonenumber_error != ''}

          onChangeText={(text) => setPhonenumber(text)}
        />
        <Text style={globalStyle.texterror}>{phonenumber_error}</Text>
        <Input
          placeholder="E-mail"
          placeholderTextColor='#B9B3BD'
          autoCorrect={false}
          autoCapitalize="none"
          style={globalStyle.input}
          keyboardType={"email-address"}
          value={email}
          error={email_error != ''}
          onChangeText={(text) => setEmail(text)}
        />
        <Text style={globalStyle.texterror}>{email_error}</Text>
        <Input
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor='#B9B3BD'
          autoCorrect={false}
          autoCapitalize="none"
          style={globalStyle.input}
          value={password}
          onChangeText={(text) => setPassword(text)}
          error={password_error != ''}
        />
        <Text style={globalStyle.texterror}>{password_error}</Text>
        <Input
          placeholder="Confirm Password"
          secureTextEntry={true}
          placeholderTextColor='#B9B3BD'
          autoCorrect={false}
          autoCapitalize="none"
          style={globalStyle.input}
          value={confirmpassword}
          onChangeText={(text) => setConfirmPassword(text)}
          error={confirmpassword_error != ''}
        />
        <Text style={globalStyle.texterror}>{confirmpassword_error}</Text>

        <Text style={signUpStyle.ByClickingText}>By clicking continue you are agreeing to our </Text>

        <View>
          <TouchableOpacity>
            <Text style={signUpStyle.terms_conditionsbutton}>terms and conditions.</Text>
          </TouchableOpacity>

        </View>


        <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: 'cyan', height: '2%' }}>
          {

            requestState.pending ?
              <ActivityIndicator size="small" /> :
              requestState.success ?
                <Text>sucess</Text> :
                requestState.error ?
                  <Text>Error</Text> :
                  null
          }
        </View>
      </AuthHeader>
    </View>
  )


}

export default SignUp;