import React,{useState} from 'react';
import {Text,View,StyleSheet,TextInput,Dimensions,TouchableOpacity,Button,ActivityIndicator,ScrollView,KeyboardAvoidingView} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

import { useDispatch, useSelector } from 'react-redux';
import {signUpAction} from '../../../store/Client/actions/Client_SignUp_actions'

import styles from '../../../styles/signUpStyle'
import globalStyle from '../../../styles/globalStyle'



//Design :fit on more than mobile,missing font,Validation missing design 

const SignUp=({navigation})=>
{
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
  const [firstname,setFirstname]=useState('');
  const [lastname,setLastname]=useState('');
  const [phonenumber,setPhonenumber]=useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  
  const [firstname_error,setFirstname_error]=useState('');
  const [lastname_error,setLastname_error] = useState('');
  const [phonenumber_error,setPhonenumber_error]=useState('');
  const [email_error,setemail_error]=useState('');
  const [password_error,setpassword_error]=useState('');
  const [confirmpassword_error,setConfirmPassword_error]=useState('');
  
  

const validate=()=>
{
  let error=true;
  if(firstname=="")
  {
    setFirstname_error("Please Enter Your First Name ")
    error=false;
    
  }
  else 
  {
    var letters = /^[A-Za-z]+$/;
    
    if (letters.test(firstname) === true){
      setFirstname_error("")
    }
    else {
    setFirstname_error("Can't Enter Numbers")
    error=false
    }
  }

  if(lastname=='')
  {
    setLastname_error("Please Enter Your Last Name")
    error=false
  }
  else 
  {
    var letters = /^[A-Za-z]+$/;
    
    if (letters.test(lastname) === true){
      setLastname_error("")
    }
    else {
    setLastname_error("Can't Enter Numbers")
    error=false
    }
  }


  if(phonenumber=="")
  {
    setPhonenumber_error("Please Enter Your Phone Number ")
  }
  else
  {
    var numbers =  /^[0-9\b]+$/;
    if (numbers.test(phonenumber) === true){

      setPhonenumber_error("")
    }
    else 
    {
    setPhonenumber_error("Can't Enter Letters")
    error=false
    }
  }
  
  if(email=='')
  {
    setemail_error("Please Enter Your Email")
    error=false
  }
  else
  {
    const valid = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/ ;
    if (valid.test(email) === true){
      setemail_error("")
  }
  else{
    setemail_error("Invalid Email")
    error=false
  }
   
  }
  if(password=='')
  {
    setpassword_error("Please Enter Your Password")
    error=false
  }
  else 
  {
    if(password.length<8)
{
    setpassword_error("Password Must Be 8 Characters Or More")
    error=false
}
    else setpassword_error("")
  }

  if(confirmpassword=='')
  {
    setConfirmPassword_error("Please Confirm Your Password")
    error=false
  }
  else {
    if(password!=confirmpassword)
    {
      setConfirmPassword_error("Confirm Password Doesn't Match")
      error=false
    }
    else
    setConfirmPassword_error("")
  }
 return error;
}
  
const onSubmit=()=>
{
  if(validate())
  {
    console.log("Success")
    disptach(signUpAction(user))
  }
  
  else console.log("Failed")
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
       
       <TouchableOpacity onPress={()=>navigation.navigate('SignIn')}>
         <Text style={styles.SignInText}>SIGN IN</Text>
         </TouchableOpacity> 
       <TouchableOpacity onPress={()=>{navigation.navigate('SignUp')}}>
         <Text style={styles.SignUpText}>SIGN UP</Text>
         </TouchableOpacity>   

       </View>
      
        <View style={styles.Form}>
        {/* <ScrollView>
        <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={100}> */}
        <TextInput
              placeholder="First Name"
              placeholderTextColor = '#B9B3BD'
              autoCorrect={false}
              autoCapitalize="none"
              style={[styles.input,!firstname_error==''?globalStyle.error:null]}
              value={firstname}
              onChangeText={(text) => setFirstname(text)} 
              //onBlur={()=>this.validatefirstname() }         
            />
           <Text style={styles.texterror}>{firstname_error}</Text>
            <TextInput
              placeholder="Last Name"
              placeholderTextColor = '#B9B3BD'
              autoCorrect={false}
              autoCapitalize="none"
              style={[styles.input,!lastname_error==''?globalStyle.error:null]}
              value={lastname}
              onChangeText={(text) => setLastname(text)} 
            //onBlur={()=>this.validationlastname()} 
            />
            <Text  style={styles.texterror}>{lastname_error}</Text>
            <TextInput
              placeholder="Phone Number"
              placeholderTextColor = '#B9B3BD'
              autoCorrect={false}
              autoCapitalize="none"
              style={[styles.input,!phonenumber_error==''?globalStyle.error:null]}
              keyboardType={"numeric"}
              value={phonenumber}
              onChangeText={(text) => setPhonenumber(text)} 
            //onBlur={()=>this.validationphonenumber()}
            />
            <Text style={styles.texterror}>{phonenumber_error}</Text>
            <TextInput
              placeholder="E-mail"
              placeholderTextColor = '#B9B3BD'
              autoCorrect={false}
              autoCapitalize="none"
              style={[styles.input,!email_error==''?globalStyle.error:null]}
              keyboardType={"email-address"}
              value={email}
              onChangeText={(text) => setEmail(text)} 
              //onBlur={()=>this.validationemail()}
            />
            <Text style={styles.texterror}>{email_error}</Text>
            <TextInput
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor = '#B9B3BD'
              autoCorrect={false}
              autoCapitalize="none"
              style={[styles.input,!password_error==''?globalStyle.error:null]}
              value={password}
              onChangeText={(text) => setPassword(text)} 
              //onBlur={()=>this.validationpassword()}
            />
            <Text style={styles.texterror}>{password_error}</Text>
            <TextInput 
              placeholder="Confirm Password"
              secureTextEntry={true}
              placeholderTextColor = '#B9B3BD'
              autoCorrect={false}
              autoCapitalize="none"
              style={[styles.input,!confirmpassword_error==''?globalStyle.error:null]}
              value={confirmpassword}
              onChangeText={(text) => setConfirmPassword(text)} 
             // onBlur={()=>this.validationconfirmpassword()}
            />
           <Text style={styles.texterror}>{confirmpassword_error}</Text>

           <Text style={styles.ByClickingText}>By clicking continue you are agreeing to our </Text>
           
           <TouchableOpacity>
             <Text style={styles.terms_conditionsbutton}>terms and conditions.</Text>
             </TouchableOpacity>   
             {/* </KeyboardAvoidingView>
          </ScrollView> */}
          </View>
         
          <TouchableOpacity 
           onPress={() => {
            onSubmit()
        }
        } style={globalStyle.Continuebutton}>
          <Text style={globalStyle.continueText}>CONTINUE</Text></TouchableOpacity>  
          <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: 'cyan', height: '10%' }}>
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
          </View>
          </View>
         
    )
  

}

export default SignUp;