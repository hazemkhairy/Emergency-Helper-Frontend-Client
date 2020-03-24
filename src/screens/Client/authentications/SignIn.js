import React,{useState} from 'react';
import {Text,View,TextInput,Dimensions,TouchableOpacity,Button,ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import { useDispatch, useSelector } from 'react-redux';
import { signInAction } from '../../../store/Client/actions/Client_SignIn_actions'
import { SignInUser } from '../../../moduels/Client/Client_Moduel';

import styles from '../../../styles/signInStyle'
import globalStyle from '../../../styles/globalStyle'


const SignIn=({navigation})=>
{
  const disptach = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [email_error,setemail_error]=useState('');
  const [password_error,setpassword_error]=useState('');

  const isLoading = useSelector((state) => {
        return state.SignInReducer.Sign_In
    })
    const token = useSelector((state) => {
        return state.SignInReducer.token
    })
  
  const onSubmit=()=>
  {
    
    if(email=='')
    {
      setemail_error("Please Enter Your Email")
    }
    else
    {
      const valid = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/ ;
      if (valid.test(email) === true){
        setemail_error("")
    }
    else{
      setemail_error("Invalid Email")
    }
  }
  if(password=='')
  {
    setpassword_error("Please Enter Your Password")
  }
  else 
  {
    if(password.length<8)

    setpassword_error("Password Must Be 8 Characters Or More")
    else setpassword_error("")
  }
}  
    return(
        <View style={globalStyle.white_background}>
        <View style={globalStyle.blue_background}>
        <TouchableOpacity 
          onPress={()=>{navigation.navigate('Home')}}
          style={globalStyle.backbutton} >
          <Text>
          <Icon name="arrowleft" style={globalStyle.iconstyle}/>
        </Text>
        </TouchableOpacity>
       <View style={globalStyle.SignIN_SignUp}>
       
       <TouchableOpacity onPress={()=>{navigation.navigate('SignIn')}}>
         <Text style={styles.SignInText}>SIGN IN</Text>
         </TouchableOpacity> 
       <TouchableOpacity onPress={()=>{navigation.navigate('SignUp')}}>
         <Text style={styles.SignUpText}>SIGN UP</Text>
         </TouchableOpacity>   

       </View>
       
        <View style={styles.Form}>
        
          <TextInput
            placeholder="Email"
            placeholderTextColor = '#B9B3BD'
            keyboardType={"email-address"}
            autoCorrect={false}
            autoCapitalize="none"
            style={[styles.input,!email_error==''?globalStyle.error:null]}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
           <Text style={styles.texterror}>{email_error}</Text>
          <TextInput
            secureTextEntry={true}
            placeholder="Password"
            placeholderTextColor = '#B9B3BD'
            autoCorrect={false}
            autoCapitalize="none"
            style={[styles.input,!password_error==''?globalStyle.error:null]}
            value={password}
            onChangeText={(text) => setPassword(text)} 
            />
           <Text style={styles.texterror}>{password_error}</Text>
          
           </View>
           
          <TouchableOpacity 
                     onPress={() => {
                        disptach(signInAction(new SignInUser(email, password)))
                        onSubmit()
                    }
                    } style={globalStyle.Continuebutton}>
                        {
                    isLoading===true ? <ActivityIndicator /> : null
                }{
                token ? <Text >{token}</Text> : null
                }
         <Text style={globalStyle.continueText}>CONTINUE</Text>
         </TouchableOpacity>
         
          <TouchableOpacity style={styles.ForgetPasswordButton}><Text style={styles.ForgetPasswordText}>FORGOT PASSWORD</Text></TouchableOpacity>   
          </View>
          </View>
        
        
    )
  

}

export default SignIn;